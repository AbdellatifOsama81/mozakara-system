import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-description-rating-section',
  templateUrl: './description-rating-section.component.html',
  styleUrls: ['./description-rating-section.component.scss']
})
export class DescriptionRatingSectionComponent {
  @Input() descriptionText!: string;
  @ViewChild('ratingSection') ratingSection!: ElementRef;
  @ViewChild('descriptionSection') descriptionSection!: ElementRef;
  @ViewChild('tabsDiv') tabsDiv!: ElementRef;
  sections: ElementRef[] = [];
  currentTab: string = 'descriptionSection';
  ratingsPercentages = [55, 30, 7, 3, 5];

  tabs = [
    {
      name: 'التقييم',
      type: 'ratingSection',
    },
    {
      name: 'نظره عامة عن الدرس',
      type: 'descriptionSection',
    },
  ];

  ngAfterViewInit() {
    this.sections.push(this.ratingSection, this.descriptionSection);
  }
  @HostListener('window:scroll')
  onScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    this.sections.forEach(section => {
      if (section.nativeElement) {
        const sectionOffset = section.nativeElement.offsetTop;
        const nextSectionOffset = section.nativeElement.nextElementSibling
          ? section.nativeElement.nextElementSibling.offsetTop
          : Number.MAX_SAFE_INTEGER;

        if (scrollPosition >= sectionOffset && scrollPosition < nextSectionOffset) {
          this.setCurrentTab(section.nativeElement.id);
        }
      }
    });
  }

  setCurrentTab(tabName: string) {
    this.currentTab = tabName;
  }
  scrollTo(tabName: string) {
    if (this.ratingSection && tabName === 'ratingSection') {
      this.ratingSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (this.descriptionSection && tabName === 'descriptionSection') {
      this.descriptionSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
