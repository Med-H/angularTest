import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { HeroService } from 'src/app/services/hero/hero.service'
import { Hero } from '../../model/hero/hero'
import { MessageService } from '../../services/messages/message.service'

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero | undefined
  constructor(private messageService: MessageService,private heroService: HeroService,private route: ActivatedRoute) { }

  private log(message: string) {
    this.messageService.add(`${this.constructor.name} : ${message}`);
  }

  ngOnInit(): void {
    this.getHero()
  }
  getHero() {
    const id = this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(parseInt(id !==null ? id : '-1')).subscribe(hero => this.hero = hero);
  }
  save(): void {
    if (this.hero!==undefined) {
      this.heroService.updateHero(this.hero).subscribe(() => this.log(`saved hero ${this.hero}`));
    }
  }
}
