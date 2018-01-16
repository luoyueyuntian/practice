import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import Crisis from '../model/crisis';
import {CRISES} from '../mock/crisis-mock';

@Injectable()
export class CrisisService {
  private unusedId : number;
  constructor() {
    CRISES.forEach(crisis => {
      if (crisis.id > this.unusedId) {
        this.unusedId = crisis.id;
      }
      this.unusedId++;
    });
  }
  private existCrisis(crisisName) : boolean {
    let exist = false;
    CRISES.forEach(crisis => {
      if (crisis.name === crisisName) {
        exist = true;
      }
    });
    return exist;
  }
  private findCrisisPos(destCrisis : Crisis) : number {
    let pos = -1;
    CRISES.forEach((crisis : Crisis, index : number) => {
      if (crisis.name === destCrisis.name && crisis.id === destCrisis.id) {
        pos = index;
      }
    });
    return pos;
  }
  getCrisisLibary() : Observable < Crisis[] > {
    return Observable.of(CRISES);
  }
  getCrisisById(id : number) : Crisis {
    let destCrisis: Crisis;
    CRISES.forEach((crisis : Crisis) => {
      if (crisis.id === id) {
        destCrisis = crisis;
      }
    });
    return destCrisis;
  }
  addCrisis(newCrisisName : string) : Observable < Crisis[] > {
    const hasExist: boolean = this.existCrisis(newCrisisName);
    if (!hasExist) {
      CRISES.push({
        name: newCrisisName,
        id: this.unusedId++
      });
    }
    return Observable.of(CRISES);
  }
}
