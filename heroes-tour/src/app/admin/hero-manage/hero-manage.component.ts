import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import Hero from '../../model/hero';
import { HeroService } from './../../service/hero.service';

@Component({
  selector: 'app-hero-manage',
  templateUrl: './hero-manage.component.html',
  styleUrls: ['./hero-manage.component.css']
})
export class HeroManageComponent implements OnInit {
  heroes: Observable<Hero[]>;
  newHeroName: string;
  constructor(
    private router: Router,
    private heroService: HeroService
  ) {
    this.heroes = this.heroService.getHeroes();
  }
  viewDetail(hero: Hero): void {
    const heroId = hero.id;
    this.router.navigate(['/admin', heroId]);
  }
  deleteHero(hero: Hero): void {
    this.heroes = this.heroService.deleteHero(hero);
  }
  addHero(): void {
    if (this.newHeroName === '') {
      return;
    }
    this.heroService.addHero(this.newHeroName)
      .map(status => {
        this.heroes = this.heroService.getHeroes();
        this.newHeroName = '';
      });
  }
  ngOnInit() {
  }

}
