import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisManageComponent } from './crisis-manage.component';

describe('CrisisManageComponent', () => {
  let component: CrisisManageComponent;
  let fixture: ComponentFixture<CrisisManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisisManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
