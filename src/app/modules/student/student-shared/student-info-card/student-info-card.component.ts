import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-info-card',
  templateUrl: './student-info-card.component.html',
  styleUrls: ['./student-info-card.component.scss']
})
export class StudentInfoCardComponent {
  assetsPath = '../../../../../assets/images/student';
  studentPagesUrl = '/student/pages';

  constructor(private router: Router) { }


  // public pageNavOnClick(event: Event, route:string) {
  //   console.log("Clicked element:", event.target);
  //   this.router.navigate([this.studentPagesUrl+route]);
  //   // this._location.go(this.studentPagesUrl+route);
  // }
}
