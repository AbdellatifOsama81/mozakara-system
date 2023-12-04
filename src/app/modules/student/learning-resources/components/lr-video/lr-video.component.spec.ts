import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrVideoComponent } from './lr-video.component';

describe('LrVideoComponent', () => {
  let component: LrVideoComponent;
  let fixture: ComponentFixture<LrVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LrVideoComponent]
    });
    fixture = TestBed.createComponent(LrVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
