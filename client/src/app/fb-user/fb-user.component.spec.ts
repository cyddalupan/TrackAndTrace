import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbUserComponent } from './fb-user.component';

describe('FbUserComponent', () => {
  let component: FbUserComponent;
  let fixture: ComponentFixture<FbUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
