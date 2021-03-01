import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { HttpClientModule } from '@angular/common/http';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
