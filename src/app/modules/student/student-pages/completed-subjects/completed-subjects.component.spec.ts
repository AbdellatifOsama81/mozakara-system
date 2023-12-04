import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedSubjectsComponent } from './completed-subjects.component';

describe('CompletedSubjectsComponent', () => {
  let component: CompletedSubjectsComponent;
  let fixture: ComponentFixture<CompletedSubjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedSubjectsComponent]
    });
    fixture = TestBed.createComponent(CompletedSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
