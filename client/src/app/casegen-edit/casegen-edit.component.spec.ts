import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasegenEditComponent } from './casegen-edit.component';

describe('CasegenEditComponent', () => {
  let component: CasegenEditComponent;
  let fixture: ComponentFixture<CasegenEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasegenEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasegenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
