import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrLinksComponent } from './lr-links.component';

describe('LrLinksComponent', () => {
  let component: LrLinksComponent;
  let fixture: ComponentFixture<LrLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LrLinksComponent]
    });
    fixture = TestBed.createComponent(LrLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
