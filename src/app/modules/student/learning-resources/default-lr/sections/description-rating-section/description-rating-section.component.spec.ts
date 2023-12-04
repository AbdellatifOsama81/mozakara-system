import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionRatingSectionComponent } from './description-rating-section.component';

describe('DescriptionRatingSectionComponent', () => {
  let component: DescriptionRatingSectionComponent;
  let fixture: ComponentFixture<DescriptionRatingSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescriptionRatingSectionComponent]
    });
    fixture = TestBed.createComponent(DescriptionRatingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
