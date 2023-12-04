import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lr-links',
  templateUrl: './lr-links.component.html',
  styleUrls: ['./lr-links.component.scss']
})
export class LrLinksComponent {
  @Input() lrLink!: string;
  links=[
    {
      displayName: 'شرح الدرس',
    },
    {
      displayName: 'ملخص الدرس',
    },
    {
      displayName: 'تمارين الدرس',
    },
    {
      displayName: 'تمارين إضافية',
    },
  ];
}
