import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectPlanCardComponent } from './subject-plan-card.component';

describe('SubjectPlanCardComponent', () => {
  let component: SubjectPlanCardComponent;
  let fixture: ComponentFixture<SubjectPlanCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectPlanCardComponent]
    });
    fixture = TestBed.createComponent(SubjectPlanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
