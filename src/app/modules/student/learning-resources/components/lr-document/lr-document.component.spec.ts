import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrDocumentComponent } from './lr-document.component';

describe('LrDocumentComponent', () => {
  let component: LrDocumentComponent;
  let fixture: ComponentFixture<LrDocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LrDocumentComponent]
    });
    fixture = TestBed.createComponent(LrDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
