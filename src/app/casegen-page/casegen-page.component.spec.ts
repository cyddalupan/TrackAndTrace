import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasegenPageComponent } from './casegen-page.component';

describe('CasegenPageComponent', () => {
  let component: CasegenPageComponent;
  let fixture: ComponentFixture<CasegenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasegenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasegenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
