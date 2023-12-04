import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowTeacherCardComponent } from './follow-teacher-card.component';

describe('FollowTeacherCardComponent', () => {
  let component: FollowTeacherCardComponent;
  let fixture: ComponentFixture<FollowTeacherCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FollowTeacherCardComponent]
    });
    fixture = TestBed.createComponent(FollowTeacherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
