import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningResourcesComponent } from './learning-resources.component';

describe('LearningResourcesComponent', () => {
  let component: LearningResourcesComponent;
  let fixture: ComponentFixture<LearningResourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearningResourcesComponent]
    });
    fixture = TestBed.createComponent(LearningResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
