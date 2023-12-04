import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrInfoComponent } from './lr-info.component';

describe('LrInfoComponent', () => {
  let component: LrInfoComponent;
  let fixture: ComponentFixture<LrInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LrInfoComponent]
    });
    fixture = TestBed.createComponent(LrInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
