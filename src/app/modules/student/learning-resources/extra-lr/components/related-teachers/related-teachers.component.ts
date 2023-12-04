import { Component } from '@angular/core';

@Component({
  selector: 'app-related-teachers',
  templateUrl: './related-teachers.component.html',
  styleUrls: ['./related-teachers.component.scss']
})
export class RelatedTeachersComponent {
  teachers = [
    {
      imageRelativePath:'/learning-resources/nature.png',
      name:'احمد سليمان',
      description:'مدرس لغة عربية',
      rating:4.6,
      numberOfFollowers:320
    },
    {
      imageRelativePath:'/learning-resources/1.svg',
      name:'احمد محمد',
      description:'مدرس  رياضيات',
      rating:4.0,
      numberOfFollowers:180
    },
    {
      imageRelativePath:'/learning-resources/1.svg',
      name:'عادل السيد',
      description:'مدرس علوم',
      rating:3.9,
      numberOfFollowers:120
    },
  ]
}
