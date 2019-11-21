import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import Hero from '../../model/hero';
import { HeroService } from '../../service/hero.service';

@Component({ selector: 'app-hero-search', templateUrl: './hero-search.component.html', styleUrls: ['./hero-search.component.css'] })
export class HeroSearchComponent implements OnInit {
  result: Observable<Hero[]>;
  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }
  search(heroName: string): void {
    this.result = this
      .heroService
      .search(heroName);
  }
  viewDetail(hero: Hero): void {
    this.router.navigate(['/detail', hero.id]);
  }
  ngOnInit() { }

}
