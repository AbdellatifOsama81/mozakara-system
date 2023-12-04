import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrDescriptionComponent } from './lr-description.component';

describe('LrDescriptionComponent', () => {
  let component: LrDescriptionComponent;
  let fixture: ComponentFixture<LrDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LrDescriptionComponent]
    });
    fixture = TestBed.createComponent(LrDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
