import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectContentItemComponent } from './subject-content-item.component';

describe('SubjectContentItemComponent', () => {
  let component: SubjectContentItemComponent;
  let fixture: ComponentFixture<SubjectContentItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectContentItemComponent]
    });
    fixture = TestBed.createComponent(SubjectContentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
