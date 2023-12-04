import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrFeedbackComponent } from './lr-feedback.component';

describe('LrFeedbackComponent', () => {
  let component: LrFeedbackComponent;
  let fixture: ComponentFixture<LrFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LrFeedbackComponent]
    });
    fixture = TestBed.createComponent(LrFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
