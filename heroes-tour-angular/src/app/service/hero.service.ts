import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import Hero from '../model/hero';
import { HEROES } from '../mock/heroes-mock';
@Injectable()
export class HeroService {
  private unusedId: number;
  constructor() {
    HEROES.forEach(hero => this.unusedId = this.unusedId > hero.id
      ? this.unusedId
      : hero.id);
    this.unusedId++;
  }
  private ensureHeroExist(name: string): boolean {
    let exist = false;
    HEROES.forEach(hero => {
      if (hero.name === name) {
        exist = true;
      }
    });
    return exist;
  }
  private findHeroById(id: number): number {
    let pos = -1;
    HEROES.forEach((hero, index) => {
      if (hero.id === id) {
        pos = index;
      }
    });
    return pos;
  }
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  getHeroById(id: number): Hero {
    let destHero: Hero;
    HEROES.forEach(hero => {
      if (hero.id === id) {
        destHero = hero;
      }
    });
    return destHero;
  }
  addHero(newHeroName: string): Observable<Hero[]> {
    const newHeroExist = this.ensureHeroExist(newHeroName);
    if (!newHeroExist) {
      HEROES.push({
        name: newHeroName,
        id: this.unusedId++
      });
    }
    return of(HEROES);
  }
  deleteHero(hero: Hero): Observable<Hero[]> {
    const index = this.findHeroById(hero.id);
    HEROES.splice(index, 1);
    return of(HEROES);
  }
  search(nameFragment: string): Observable<Hero[]> {
    const result: Hero[] = [];
    if (nameFragment === '') {
      return of(result);
    }
    HEROES.map(hero => {
      if (hero.name.indexOf(nameFragment) !== -1) {
        result.push(hero);
      }
    });
    return of(result);
  }
}
