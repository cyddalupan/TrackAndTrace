import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatkeywordComponent } from './catkeyword.component';

describe('CatkeywordComponent', () => {
  let component: CatkeywordComponent;
  let fixture: ComponentFixture<CatkeywordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatkeywordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatkeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
