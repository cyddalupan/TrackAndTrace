import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepliesAddComponent } from './replies-add.component';

describe('RepliesAddComponent', () => {
  let component: RepliesAddComponent;
  let fixture: ComponentFixture<RepliesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepliesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepliesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
