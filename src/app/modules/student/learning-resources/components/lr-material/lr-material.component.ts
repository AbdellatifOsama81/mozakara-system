import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lr-material',
  templateUrl: './lr-material.component.html',
  styleUrls: ['./lr-material.component.scss']
})
export class LrMaterialComponent {
  @Input() materialType!:string;
  @Input() lrLink!:string;
}
