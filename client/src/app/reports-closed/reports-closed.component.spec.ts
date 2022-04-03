import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsClosedComponent } from './reports-closed.component';

describe('ReportsClosedComponent', () => {
  let component: ReportsClosedComponent;
  let fixture: ComponentFixture<ReportsClosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsClosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
