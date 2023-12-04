import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedTeachersComponent } from './related-teachers.component';

describe('RelatedTeachersComponent', () => {
  let component: RelatedTeachersComponent;
  let fixture: ComponentFixture<RelatedTeachersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatedTeachersComponent]
    });
    fixture = TestBed.createComponent(RelatedTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
