import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-student-info-card',
  templateUrl: './student-info-card.component.html',
  styleUrls: ['./student-info-card.component.scss']
})
export class StudentInfoCardComponent {
  // assetsPath = environment.imgAssetsPath + '/student';
  // studentPagesUrl = '/student/pages';
  // currentRoute!: string;

  // pages = [
  //   {
  //     name: 'متابعاتي',
  //     url: 'following'
  //   },
  //   {
  //     name: 'اختبر نفسك',
  //     url: 'tests'
  //   },
  //   {
  //     name: 'مهام مكتملة',
  //     url: 'completed-subjects'
  //   },

  //   {
  //     name: 'مهمات ليست مكتملة',
  //     url: 'in-progress'
  //   },
  //   {
  //     name: 'الرئيسية',
  //     url: 'home'
  //   },
  // ];


  // constructor(private router: Router) {
  //   //this is to handle state:active for the nav-links
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       this.currentRoute = event.url;
  //     }
  //   });
  // }
  // ngOnInit() {
  //   this.currentRoute = this.router.url;
  // }
}
