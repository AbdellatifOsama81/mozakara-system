import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLrComponent } from './default-lr.component';

describe('DefaultLrComponent', () => {
  let component: DefaultLrComponent;
  let fixture: ComponentFixture<DefaultLrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultLrComponent]
    });
    fixture = TestBed.createComponent(DefaultLrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
