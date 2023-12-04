import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectCardGridComponent } from './subject-card-grid.component';

describe('SubjectCardGridComponent', () => {
  let component: SubjectCardGridComponent;
  let fixture: ComponentFixture<SubjectCardGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectCardGridComponent]
    });
    fixture = TestBed.createComponent(SubjectCardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
