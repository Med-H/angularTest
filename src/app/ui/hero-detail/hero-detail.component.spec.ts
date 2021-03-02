import { HttpClientModule } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
//import { ActivatedRoute } from '@angular/router'
//import { ActivatedRoute } from '@angular/router'
import { of } from 'rxjs'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { Hero } from '../../model/hero/hero'
import { HeroService } from '../../services/hero/hero.service'
//import { ActivatedRouteStub } from '../../testing/activated-route-stub'

import { HeroDetailComponent } from './hero-detail.component'

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent
  let fixture: ComponentFixture<HeroDetailComponent>
  let heroService: HeroService
  //let activatedRoute : ActivatedRouteStub
  //let routeParams: Subject<Params>;

  beforeEach(async () => {
    //routeParams = new Subject<Params>()

    await TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        HttpClientModule
      ],
      declarations: [ HeroDetailComponent ],
      providers: [
        { provide : HeroService}
      ]
    })
    .compileComponents()

  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent)
    heroService = TestBed.inject(HeroService)
    /*activatedRoute = TestBed.inject(ActivatedRouteStub)*/
    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  /*describe('should not get a hero',()=> {
    fit('should get a hero when hero is set', () => {
      //activatedRoute = new ActivatedRouteStub()
      //activatedRoute.setParamMap({ id: '1234', name:'hero' });
      //routeParams.next({'id': null});

      //component.getHero()

      //expect(heroService.getHero).toHaveBeenCalledWith(-1)


    })
  })*/

  describe ('it should update hero', () => {
    beforeEach(()=> {
      spyOn(heroService, 'updateHero').and.returnValue(of([]))
    })

    it('should updateHero hero when hero is set', () => {
      const hero: Hero = {id: 42, name: 'Test'}
      component.hero = hero

      component.save()

      expect(heroService.updateHero).toHaveBeenCalledWith(hero)
    })

    it('should not call updateHero hero when hero is not set', () => {
      component.hero = undefined

      component.save()

      expect(heroService.updateHero).not.toHaveBeenCalled()
    })
  })
})
