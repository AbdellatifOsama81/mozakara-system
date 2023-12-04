import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lr-feedback',
  templateUrl: './lr-feedback.component.html',
  styleUrls: ['./lr-feedback.component.scss']
})
export class LrFeedbackComponent {
  starsFilterForm: FormGroup = new FormGroup({
    stars: new FormControl(null, [])
  });

  starsFilterOptions = [
    'تقييم 5 نجوم',
    'تقييم 4 نجوم',
    'تقييم 3 نجوم',
    'تقييم 2 نجوم',
    'تقييم 1 نجوم',
  ];
  comments = [
    {
      name: 'محمد حسين',
      imageRelativePath: '/learning-resources/2.svg',
      commentDate: '2023-11-15T11:30:00',
      rating: 4,
      commentText: 'أقدر مقاطع الفيديو القصيرة الدقيقة (10 دقائق أو أقل لكل منها) لأن مقاطع الفيديو الطويلة جدًا تميل إلى فقدان التركيز. يتمتع المدرب بخبرة كبيرة في تصميم الويب ويظهر ذلك عندما يشارك معرفته. كانت هذه أفضل 6 أشهر من التدريب. شكرا فاكو.',
    },
    {
      name: 'احمد حسين',
      imageRelativePath: '/learning-resources/1.svg',
      commentDate: '2023-11-21T10:34:00',
      rating: 5,
      commentText: 'هذه الدورة مذهلة فقط! يحتوي على محتوى دورة تدريبية رائع وأفضل الممارسات والكثير من المعرفة الواقعية. أحب طريقة إعطاء الأمثلة وأفضل النصائح التي يقدمها المعلم والتي تعتبر مثيرة للاهتمام وممتعة وواسعة الاطلاع ولم أشعر بالملل مطلقًا طوال الدورة. تلبي هذه الدورة أكثر من توقعاتي، وقد استثمرت أفضل وقت في تعلم وممارسة ما أنا متحمس له. شكرا جزيلا لمدربنا الممتاز فاكو !! أوصي بشدة بهذه الدورة! اتخذ الخطوة التالية.'
    },
    {
      name: 'محمد حسين',
      imageRelativePath: '/learning-resources/2.svg',
      commentDate: '2022-11-21T07:20:00',
      rating: 3,
      commentText: 'أقدر مقاطع الفيديو القصيرة الدقيقة (10 دقائق أو أقل لكل منها) لأن مقاطع الفيديو الطويلة جدًا تميل إلى فقدان التركيز. يتمتع المدرب بخبرة كبيرة في تصميم الويب ويظهر ذلك عندما يشارك معرفته. كانت هذه أفضل 6 أشهر من التدريب. شكرا فاكو.',
    },
    {
      name: 'احمد حسين',
      imageRelativePath: '/learning-resources/1.svg',
      commentDate: '2023-05-21T01:35:00',
      rating: 1,
      commentText: 'هذه الدورة مذهلة فقط! يحتوي على محتوى دورة تدريبية رائع وأفضل الممارسات والكثير من المعرفة الواقعية. أحب طريقة إعطاء الأمثلة وأفضل النصائح التي يقدمها المعلم والتي تعتبر مثيرة للاهتمام وممتعة وواسعة الاطلاع ولم أشعر بالملل مطلقًا طوال الدورة. تلبي هذه الدورة أكثر من توقعاتي، وقد استثمرت أفضل وقت في تعلم وممارسة ما أنا متحمس له. شكرا جزيلا لمدربنا الممتاز فاكو !! أوصي بشدة بهذه الدورة! اتخذ الخطوة التالية.'
    }
  ];
  ngOnInit(): void {
    this.starsFilterForm.get('stars')?.valueChanges.subscribe((star) => {
      //todo - implement filter functionality here
    });
  }
}
