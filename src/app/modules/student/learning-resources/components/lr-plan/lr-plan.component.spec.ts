import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrPlanComponent } from './lr-plan.component';

describe('LrPlanComponent', () => {
  let component: LrPlanComponent;
  let fixture: ComponentFixture<LrPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LrPlanComponent]
    });
    fixture = TestBed.createComponent(LrPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
