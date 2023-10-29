import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Page } from 'src/app/core/student/Page';

@Component({
  selector: 'app-student-info-card',
  templateUrl: './student-info-card.component.html',
  styleUrls: ['./student-info-card.component.scss']
})
export class StudentInfoCardComponent {
  assetsPath = '../../../../../assets/images/student';
  studentPagesUrl = '/student/pages';
  currentRoute!: string;

  pages: Page[] = [
    {
      name: 'الرئيسية',
      url: 'home'
    },
    {
      name: 'مهمات ليست مكتملة',
      url: 'in-progress'
    },
    {
      name: 'مهام مكتملة',
      url: 'completed-subjects'
    },
    {
      name: 'اختبر نفسك',
      url: 'tests'
    },
    {
      name: 'متابعاتي',
      url: 'following'
    },
  ];

  constructor(private router: Router) {
    //this is to handle state:active for the nav-links
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }
  ngOnInit() {
    this.currentRoute = this.router.url;
  }
}
