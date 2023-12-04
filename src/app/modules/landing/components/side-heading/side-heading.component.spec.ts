import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideHeadingComponent } from './side-heading.component';

describe('SideHeadingComponent', () => {
  let component: SideHeadingComponent;
  let fixture: ComponentFixture<SideHeadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideHeadingComponent]
    });
    fixture = TestBed.createComponent(SideHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
