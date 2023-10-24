import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectProgressComponent } from './subject-progress.component';

describe('SubjectProgressComponent', () => {
  let component: SubjectProgressComponent;
  let fixture: ComponentFixture<SubjectProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectProgressComponent]
    });
    fixture = TestBed.createComponent(SubjectProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
