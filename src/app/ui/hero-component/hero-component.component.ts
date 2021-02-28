import { Component, OnInit } from '@angular/core'
import { Hero } from 'src/app/model/hero/hero'
import { HEROES } from '../../model/hero/mock-heroes'

@Component({
  selector: 'hero-component',
  templateUrl: './hero-component.component.html',
  styleUrls: ['./hero-component.component.scss']
})
export class HeroComponentComponent implements OnInit {
  heroes = HEROES
  selectedHero?: Hero

  constructor() {}

  ngOnInit(): void {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
}
