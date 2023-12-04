import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingPercentageComponent } from './rating-percentage.component';

describe('RatingPercentageComponent', () => {
  let component: RatingPercentageComponent;
  let fixture: ComponentFixture<RatingPercentageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatingPercentageComponent]
    });
    fixture = TestBed.createComponent(RatingPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
