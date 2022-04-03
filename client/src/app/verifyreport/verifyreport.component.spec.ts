import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyreportComponent } from './verifyreport.component';

describe('VerifyreportComponent', () => {
  let component: VerifyreportComponent;
  let fixture: ComponentFixture<VerifyreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
