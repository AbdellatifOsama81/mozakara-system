import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectContentListComponent } from './subject-content-list.component';

describe('SubjectContentListComponent', () => {
  let component: SubjectContentListComponent;
  let fixture: ComponentFixture<SubjectContentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectContentListComponent]
    });
    fixture = TestBed.createComponent(SubjectContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
