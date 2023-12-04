import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPlanComponent } from './topic-plan.component';

describe('TopicPlanComponent', () => {
  let component: TopicPlanComponent;
  let fixture: ComponentFixture<TopicPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopicPlanComponent]
    });
    fixture = TestBed.createComponent(TopicPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
