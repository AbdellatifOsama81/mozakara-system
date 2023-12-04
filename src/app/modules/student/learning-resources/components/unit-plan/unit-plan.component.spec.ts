import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitPlanComponent } from './unit-plan.component';

describe('UnitPlanComponent', () => {
  let component: UnitPlanComponent;
  let fixture: ComponentFixture<UnitPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitPlanComponent]
    });
    fixture = TestBed.createComponent(UnitPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
