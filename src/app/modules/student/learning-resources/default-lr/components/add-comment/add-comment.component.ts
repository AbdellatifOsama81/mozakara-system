import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent {
  @Input() studentName!: string;
  @Input() imageRelativePath!: string;

  isSubmitted: boolean = false;
  commentForm: FormGroup = new FormGroup({
    commentText: new FormControl('', [Validators.required]),
    rating: new FormControl(null, [Validators.required]),
  });

  onRatingChanged(rating: number) {
    this.commentForm.patchValue({
      rating: rating
    });
  }

  onSubmit() {
    this.isSubmitted = true;
  }
}
