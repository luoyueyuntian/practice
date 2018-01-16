import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import Crisis from '../model/crisis';
import {CrisisService} from './../service/crisis.service';

@Component({selector: 'app-crisis', templateUrl: './crisis.component.html', styleUrls: ['./crisis.component.css']})
export class CrisisComponent implements OnInit {
  crisisLibary: Observable<Crisis[] >;
  constructor(private crisisService : CrisisService) {
    this.crisisLibary = this
      .crisisService
      .getCrisisLibary();
  }

  ngOnInit() {}

}
