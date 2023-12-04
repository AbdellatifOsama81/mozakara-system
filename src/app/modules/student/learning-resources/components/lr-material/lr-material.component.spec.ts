import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrMaterialComponent } from './lr-material.component';

describe('LrMaterialComponent', () => {
  let component: LrMaterialComponent;
  let fixture: ComponentFixture<LrMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LrMaterialComponent]
    });
    fixture = TestBed.createComponent(LrMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
