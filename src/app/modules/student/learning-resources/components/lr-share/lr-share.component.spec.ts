import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrShareComponent } from './lr-share.component';

describe('LrShareComponent', () => {
  let component: LrShareComponent;
  let fixture: ComponentFixture<LrShareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LrShareComponent]
    });
    fixture = TestBed.createComponent(LrShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
