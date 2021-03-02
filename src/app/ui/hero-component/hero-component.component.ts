import { Component, OnInit } from '@angular/core'
import { HeroService } from '../../services/hero/hero.service'
import { MessageService } from '../../services/messages/message.service'
import { Hero } from '../../model/hero/hero'


@Component({
  selector: 'hero-component',
  templateUrl: './hero-component.component.html',
  styleUrls: ['./hero-component.component.scss']
})
export class HeroComponentComponent implements OnInit {
  heroes: Hero[] = []
  selectedHero?: Hero

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
    this.messageService.add(`${this.constructor.name}  : select hero ${this.selectedHero?.name}`)
  }
}
