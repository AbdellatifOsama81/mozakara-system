import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrAllRatingsComponent } from './lr-all-ratings.component';

describe('LrAllRatingsComponent', () => {
  let component: LrAllRatingsComponent;
  let fixture: ComponentFixture<LrAllRatingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LrAllRatingsComponent]
    });
    fixture = TestBed.createComponent(LrAllRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
