import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import Crisis from '../model/crisis';
import { CRISES } from '../mock/crisis-mock';

@Injectable()
export class CrisisService {
  private unusedId = -1;
  constructor() {
    CRISES.forEach(crisis => {
      if (crisis.id > this.unusedId) {
        this.unusedId = crisis.id;
      }
      this.unusedId++;
    });
  }
  private existCrisis(crisisName): boolean {
    let exist = false;
    CRISES.forEach(crisis => {
      if (crisis.name === crisisName) {
        exist = true;
      }
    });
    return exist;
  }
  private findCrisisPos(destCrisisId: number): number {
    let pos = -1;
    CRISES.forEach((crisis: Crisis, index: number) => {
      if (crisis.id === destCrisisId) {
        pos = index;
      }
    });
    return pos;
  }
  getCrisisLibary(): Observable<Crisis[]> {
    return of(CRISES);
  }
  getCrisisById(id: number): Crisis {
    let destCrisis: Crisis;
    CRISES.forEach((crisis: Crisis) => {
      if (crisis.id === id) {
        destCrisis = crisis;
      }
    });
    return destCrisis;
  }
  addCrisis(newCrisisName: string): Observable<Crisis[]> {
    const hasExist: boolean = this.existCrisis(newCrisisName);
    if (!hasExist) {
      CRISES.push({
        name: newCrisisName,
        id: this.unusedId++
      });
    }
    return of(CRISES);
  }
  deleteCrisis(crisisId: number): Observable<Crisis[]> {
    const pos = this.findCrisisPos(crisisId);
    CRISES.splice(pos, 1);
    return of(CRISES);
  }
}
