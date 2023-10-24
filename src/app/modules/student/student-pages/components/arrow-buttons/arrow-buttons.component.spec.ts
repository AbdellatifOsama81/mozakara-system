import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowButtonsComponent } from './arrow-buttons.component';

describe('ArrowButtonsComponent', () => {
  let component: ArrowButtonsComponent;
  let fixture: ComponentFixture<ArrowButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrowButtonsComponent]
    });
    fixture = TestBed.createComponent(ArrowButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
