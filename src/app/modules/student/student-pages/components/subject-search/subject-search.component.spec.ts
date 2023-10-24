import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectSearchComponent } from './subject-search.component';

describe('SubjectSearchComponent', () => {
  let component: SubjectSearchComponent;
  let fixture: ComponentFixture<SubjectSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectSearchComponent]
    });
    fixture = TestBed.createComponent(SubjectSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
