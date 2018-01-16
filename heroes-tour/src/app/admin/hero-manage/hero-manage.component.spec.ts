import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroManageComponent } from './hero-manage.component';

describe('HeroManageComponent', () => {
  let component: HeroManageComponent;
  let fixture: ComponentFixture<HeroManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
