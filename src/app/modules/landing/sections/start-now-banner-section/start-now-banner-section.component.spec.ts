import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartNowBannerSectionComponent } from './start-now-banner-section.component';

describe('StartNowBannerSectionComponent', () => {
  let component: StartNowBannerSectionComponent;
  let fixture: ComponentFixture<StartNowBannerSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartNowBannerSectionComponent]
    });
    fixture = TestBed.createComponent(StartNowBannerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
