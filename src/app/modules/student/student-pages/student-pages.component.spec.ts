import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPagesComponent } from './student-pages.component';

describe('StudentPagesComponent', () => {
  let component: StudentPagesComponent;
  let fixture: ComponentFixture<StudentPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentPagesComponent]
    });
    fixture = TestBed.createComponent(StudentPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
