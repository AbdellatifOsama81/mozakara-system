import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInputPasswordComponent } from './custom-input-password.component';

describe('CustomInputPasswordComponent', () => {
  let component: CustomInputPasswordComponent;
  let fixture: ComponentFixture<CustomInputPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomInputPasswordComponent]
    });
    fixture = TestBed.createComponent(CustomInputPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
