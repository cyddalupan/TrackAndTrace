import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepliesPageComponent } from './replies-page.component';

describe('RepliesPageComponent', () => {
  let component: RepliesPageComponent;
  let fixture: ComponentFixture<RepliesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepliesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepliesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
