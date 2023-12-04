import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesBreadcrumbComponent } from './pages-breadcrumb.component';

describe('PagesBreadcrumbComponent', () => {
  let component: PagesBreadcrumbComponent;
  let fixture: ComponentFixture<PagesBreadcrumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesBreadcrumbComponent]
    });
    fixture = TestBed.createComponent(PagesBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
