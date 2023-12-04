import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() imageRelativePath!:string;
  @Input() name!:string;
  @Input() commentDate!:string;
  @Input() rating!:number;
  @Input() commentText!:string;
}
