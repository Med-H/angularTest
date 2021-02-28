import { Component, Input, OnInit } from '@angular/core'
import { Hero } from 'src/app/model/hero/hero'

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
