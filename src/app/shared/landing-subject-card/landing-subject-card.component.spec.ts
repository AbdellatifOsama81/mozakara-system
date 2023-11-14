import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSubjectCardComponent } from './landing-subject-card.component';

describe('LandingSubjectCardComponent', () => {
  let component: LandingSubjectCardComponent;
  let fixture: ComponentFixture<LandingSubjectCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingSubjectCardComponent]
    });
    fixture = TestBed.createComponent(LandingSubjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
