import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPagesLinksScrollComponent } from './student-pages-links-scroll.component';

describe('StudentPagesLinksScrollComponent', () => {
  let component: StudentPagesLinksScrollComponent;
  let fixture: ComponentFixture<StudentPagesLinksScrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentPagesLinksScrollComponent]
    });
    fixture = TestBed.createComponent(StudentPagesLinksScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
