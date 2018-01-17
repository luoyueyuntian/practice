import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import Crisis from '../../model/crisis';
import { CrisisService } from './../../service/crisis.service';

@Component({ selector: 'app-crisis-manage', templateUrl: './crisis-manage.component.html', styleUrls: ['./crisis-manage.component.css'] })
export class CrisisManageComponent implements OnInit {
  crisisLibary: Observable<Crisis[]>;
  newCrisisName: string;
  constructor(private crisisService: CrisisService, private router: Router) {
    this.crisisLibary = this
      .crisisService
      .getCrisisLibary();
  }
  showDetail(crisis: Crisis): void { }
  deleteCrisis(crisis: Crisis) {
    this.crisisLibary = this.crisisService.deleteCrisis(crisis.id);
  }
  addCrisis() {
    this.crisisLibary = this.crisisService.addCrisis(this.newCrisisName);
  }
  ngOnInit() { }

}
