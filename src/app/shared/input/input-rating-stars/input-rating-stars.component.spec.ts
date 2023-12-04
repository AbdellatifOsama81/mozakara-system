import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRatingStarsComponent } from './input-rating-stars.component';

describe('InputRatingStarsComponent', () => {
  let component: InputRatingStarsComponent;
  let fixture: ComponentFixture<InputRatingStarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputRatingStarsComponent]
    });
    fixture = TestBed.createComponent(InputRatingStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
