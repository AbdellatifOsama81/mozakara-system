import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPagesLinksComponent } from './student-pages-links.component';

describe('StudentPagesLinksComponent', () => {
  let component: StudentPagesLinksComponent;
  let fixture: ComponentFixture<StudentPagesLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentPagesLinksComponent]
    });
    fixture = TestBed.createComponent(StudentPagesLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
