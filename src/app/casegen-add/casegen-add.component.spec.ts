import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasegenAddComponent } from './casegen-add.component';

describe('CasegenAddComponent', () => {
  let component: CasegenAddComponent;
  let fixture: ComponentFixture<CasegenAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasegenAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasegenAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
