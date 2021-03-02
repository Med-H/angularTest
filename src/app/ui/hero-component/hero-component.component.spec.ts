import { HttpClientModule } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { Hero } from '../../model/hero/hero'
import { MessageService } from '../../services/messages/message.service'
import { HeroComponentComponent } from './hero-component.component'

describe('HeroComponentComponent', () => {
  let component: HeroComponentComponent
  let fixture: ComponentFixture<HeroComponentComponent>
  let messageService: MessageService

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('MessageService',['add'])

    await TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        HttpClientModule
      ],
      declarations: [ HeroComponentComponent ],
      providers: [{provide : MessageService, useValue: spy}]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponentComponent)
    messageService = TestBed.inject(MessageService)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('onSelect should trigger messageService',() => {
    const hero : Hero = {id:1, name: 'test'}
    component.onSelect(hero)

    expect(messageService.add).toHaveBeenCalledWith(`${component.constructor.name}  : select hero ${hero.name}`)
    expect(component.selectedHero).toEqual(hero)
  })
})
