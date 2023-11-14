import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSubjectsSectionComponent } from './landing-subjects-section.component';

describe('LandingSubjectsSectionComponent', () => {
  let component: LandingSubjectsSectionComponent;
  let fixture: ComponentFixture<LandingSubjectsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingSubjectsSectionComponent]
    });
    fixture = TestBed.createComponent(LandingSubjectsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
