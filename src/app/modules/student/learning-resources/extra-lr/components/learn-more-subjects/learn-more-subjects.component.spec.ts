import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMoreSubjectsComponent } from './learn-more-subjects.component';

describe('LearnMoreSubjectsComponent', () => {
  let component: LearnMoreSubjectsComponent;
  let fixture: ComponentFixture<LearnMoreSubjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnMoreSubjectsComponent]
    });
    fixture = TestBed.createComponent(LearnMoreSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
