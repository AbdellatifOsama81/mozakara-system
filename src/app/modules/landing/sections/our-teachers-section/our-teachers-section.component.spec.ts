import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTeachersSectionComponent } from './our-teachers-section.component';

describe('OurTeachersSectionComponent', () => {
  let component: OurTeachersSectionComponent;
  let fixture: ComponentFixture<OurTeachersSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurTeachersSectionComponent]
    });
    fixture = TestBed.createComponent(OurTeachersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
