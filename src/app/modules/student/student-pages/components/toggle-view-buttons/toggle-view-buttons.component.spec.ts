import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleViewButtonsComponent } from './toggle-view-buttons.component';

describe('ToggleViewButtonsComponent', () => {
  let component: ToggleViewButtonsComponent;
  let fixture: ComponentFixture<ToggleViewButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleViewButtonsComponent]
    });
    fixture = TestBed.createComponent(ToggleViewButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
