import { TestBed } from '@angular/core/testing'
import { HeroService } from './hero.service'
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { Hero } from '../../model/hero/hero'
import { Observable } from 'rxjs'
import { MessageService } from '../messages/message.service'

describe('HeroService', () => {
  let heroService: HeroService
  let httpTestingController : HttpTestingController
  let messageServiceSpy: jasmine.SpyObj<MessageService>

  const heroUrl = "api/heroes"

  enum RequestMethod {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE'
  }
  interface Test<T> {
    requestFunction : Observable<T>
    expected : T,
    controllerPath : string
    requestMethod : RequestMethod,
    message : string,
    opts? : any,
  }

  function testApi<T>(test : Test<T>) {
    test.requestFunction.subscribe(value => expect(value).toEqual(test.expected))

    const req = httpTestingController.expectOne(test.controllerPath)
    expect(req.request.method).toEqual(test.requestMethod)

    req.flush(test.expected,test.opts)

    expect(messageServiceSpy.add).toHaveBeenCalledWith(`${heroService.constructor.name} : ${test.message}`)
  }

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('MessageService', ['add'])

    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      declarations: [],
      providers: [
        HeroService,
        { provide: MessageService, useValue: spy }]
    }).compileComponents()
  })

  beforeEach(() => {
    heroService = TestBed.inject(HeroService)
    httpTestingController = TestBed.inject(HttpTestingController)
    messageServiceSpy = TestBed.inject(MessageService) as jasmine.SpyObj<MessageService>
  })

  afterEach(() => {
    httpTestingController.verify()
  })

  it('should be created', () => {
    expect(heroService).toBeTruthy()
  })

  it('should test getHeroes', () => {
    const testHero: Hero[] = [{id: .1, name: 'Test Data'}]
    testApi<Hero[]>({
      requestFunction : heroService.getHeroes(),
      message: 'fetched heroes',
      requestMethod : RequestMethod.GET,
      controllerPath: heroUrl,
      expected : testHero,
    })
  })

  // just left for hints
  it('should return an error when the server returns a 404', () => {
    const errorMessage = 'custom 404 error'

    heroService.getHeroes().subscribe(
      _heroes => {
        expect(_heroes.length).toBe(0)},
      (error : HttpErrorResponse)  => {
        expect(error.status).toEqual(404, 'status')
        expect(error.error).toEqual(errorMessage, 'message')
      }
    )

    const req = httpTestingController.expectOne(heroUrl)
    expect(req.request.method).toEqual('GET')

    req.flush(errorMessage, { status: 404, statusText: 'Not Found' })
  })

  it('should test getHero with id', () => {
    const heroId : number = 1
    const testHero: Hero = {id: heroId, name: 'Test Data'}

    testApi<Hero>({
      requestFunction : heroService.getHero(heroId),
      message: `fetched hero id=${heroId}`,
      requestMethod : RequestMethod.GET,
      controllerPath: `${heroUrl}/${heroId}`,
      expected : testHero,
    })
  })

  it('should update the Hero', () => {
    const testHero: Hero = {id: 1, name: 'Test Data'}

    testApi<Hero>({
      requestFunction : heroService.updateHero(testHero),
      message: `updated hero id=${testHero.id}`,
      requestMethod : RequestMethod.PUT,
      controllerPath: `${heroUrl}`,
      expected : testHero,
    })
  })

  it('should add a Hero', () => {
    const testHero: Hero = {id: 1, name: 'Test Data'}

    testApi<Hero>({
      requestFunction : heroService.addHero(testHero),
      message: `added hero with id=${testHero.id}`,
      requestMethod : RequestMethod.POST,
      controllerPath: `${heroUrl}`,
      expected : testHero,
    })
  })

  describe('Hero Deletion', () => {
    it('should delete a Hero by Hero object', () => {
      const testHero: Hero = {id: 1, name: 'Test Data'}

      testApi<Hero>({
        requestFunction : heroService.deleteHero(testHero),
        message: `deleted hero id=${testHero.id}`,
        requestMethod : RequestMethod.DELETE,
        controllerPath: `${heroUrl}/${testHero.id}`,
        expected : testHero,
      })
    })

    it('should delete a Hero by Id', () => {
      const testHero: Hero = {id: 1, name: 'Test Data'}

      testApi<Hero>({
        requestFunction : heroService.deleteHero(testHero.id),
        message: `deleted hero id=${testHero.id}`,
        requestMethod : RequestMethod.DELETE,
        controllerPath: `${heroUrl}/${testHero.id}`,
        expected : testHero,
      })
    })
  })

  describe('Hero search function', () => {
    it('should search find multiple heros', () => {
      const testHero: Hero = {id: 1, name: 'Test Data'}
      const searchString = 'Test'

      testApi<Hero[]>({
        requestFunction : heroService.searchHeroes(searchString),
        message: `found heroes matching "${searchString}"`,
        requestMethod : RequestMethod.GET,
        controllerPath: `${heroUrl}/?name=${searchString}`,
        expected : [testHero,testHero],
      })
    })

    it('should search and find no heros', () => {
      const searchString = 'Test'

      testApi<Hero[]>({
        requestFunction : heroService.searchHeroes(searchString),
        message: `no heroes matching "${searchString}"`,
        requestMethod : RequestMethod.GET,
        controllerPath: `${heroUrl}/?name=${searchString}`,
        expected : [],
      })
    })

    it('should return no heroes when search is empty', () => {
      const searchString = '  '

      heroService.searchHeroes(searchString).subscribe(value => expect(value).toEqual([]))
    })
  })


})
