import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrSubjectSummaryComponent } from './lr-subject-summary.component';

describe('LrSubjectSummaryComponent', () => {
  let component: LrSubjectSummaryComponent;
  let fixture: ComponentFixture<LrSubjectSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LrSubjectSummaryComponent]
    });
    fixture = TestBed.createComponent(LrSubjectSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
