import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero/hero';
import { HeroService } from 'src/app/services/hero/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = []
  constructor(private heroService : HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
