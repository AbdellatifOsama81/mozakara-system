import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraLrComponent } from './extra-lr.component';

describe('ExtraLrComponent', () => {
  let component: ExtraLrComponent;
  let fixture: ComponentFixture<ExtraLrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtraLrComponent]
    });
    fixture = TestBed.createComponent(ExtraLrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
