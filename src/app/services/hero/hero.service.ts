import { Injectable } from '@angular/core';
import { Hero } from 'src/app/model/hero/hero';
import { HEROES } from 'src/app/model/hero/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from '../messages/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService : MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add(`${this.constructor.name}  : fetched heroes`);
    return heroes
  }
}
