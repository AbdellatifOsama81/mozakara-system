import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressSubjectsComponent } from './in-progress-subjects.component';

describe('InProgressSubjectsComponent', () => {
  let component: InProgressSubjectsComponent;
  let fixture: ComponentFixture<InProgressSubjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InProgressSubjectsComponent]
    });
    fixture = TestBed.createComponent(InProgressSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
