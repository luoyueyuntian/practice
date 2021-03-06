import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import Crisis from '../../model/crisis';
import { CrisisService } from './../../service/crisis.service';

@Component({ selector: 'app-crisis-manage', templateUrl: './crisis-manage.component.html', styleUrls: ['./crisis-manage.component.css'] })
export class CrisisManageComponent implements OnInit {
  crisisLibary: Observable<Crisis[]>;
  newCrisisName: string;
  constructor(
    private router: Router,
    private crisisService: CrisisService
  ) {
    this.crisisLibary = this
      .crisisService
      .getCrisisLibary();
  }
  showDetail(crisis: Crisis): void {
    const crisisId = crisis.id;
    this.router.navigate(['heroes-manage/detail', crisisId]);
  }
  deleteCrisis(crisis: Crisis) {
    this.crisisLibary = this.crisisService.deleteCrisis(crisis.id);
  }
  addCrisis() {
    this.crisisLibary = this.crisisService.addCrisis(this.newCrisisName);
  }
  ngOnInit() { }

}
