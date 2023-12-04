import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectHorizontalCardComponent } from './subject-horizontal-card.component';

describe('SubjectHorizontalCardComponent', () => {
  let component: SubjectHorizontalCardComponent;
  let fixture: ComponentFixture<SubjectHorizontalCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectHorizontalCardComponent]
    });
    fixture = TestBed.createComponent(SubjectHorizontalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
