import { Component, Input, OnInit } from '@angular/core'
import { Hero } from '../../model/hero/hero'
import { MessageService } from '../../services/messages/message.service'

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero | undefined
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {}
}
