import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrImageComponent } from './lr-image.component';

describe('LrImageComponent', () => {
  let component: LrImageComponent;
  let fixture: ComponentFixture<LrImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LrImageComponent]
    });
    fixture = TestBed.createComponent(LrImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
