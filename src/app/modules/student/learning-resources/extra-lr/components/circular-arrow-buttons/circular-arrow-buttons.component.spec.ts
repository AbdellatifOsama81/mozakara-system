import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularArrowButtonsComponent } from './circular-arrow-buttons.component';

describe('CircularArrowButtonsComponent', () => {
  let component: CircularArrowButtonsComponent;
  let fixture: ComponentFixture<CircularArrowButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircularArrowButtonsComponent]
    });
    fixture = TestBed.createComponent(CircularArrowButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
