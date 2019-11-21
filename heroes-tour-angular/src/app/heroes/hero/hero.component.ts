import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import Hero from '../../model/hero';
import { HeroService } from '../../service/hero.service';

@Component({ selector: 'app-hero', templateUrl: './hero.component.html', styleUrls: ['./hero.component.css'] })
export class HeroComponent implements OnInit {
  heroes: Observable<Hero[]>;
  constructor(
    private router: Router,
    private heroService: HeroService
  ) {
    this.heroes = this.heroService.getHeroes();
  }
  viewDetail(hero: Hero): void {
    this.router.navigate(['/detail', hero.id]);
  }
  ngOnInit() { }

}
