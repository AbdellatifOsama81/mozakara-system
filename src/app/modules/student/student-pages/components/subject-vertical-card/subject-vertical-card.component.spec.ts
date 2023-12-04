import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectVerticalCardComponent } from './subject-vertical-card.component';

describe('SubjectVerticalCardComponent', () => {
  let component: SubjectVerticalCardComponent;
  let fixture: ComponentFixture<SubjectVerticalCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectVerticalCardComponent]
    });
    fixture = TestBed.createComponent(SubjectVerticalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
