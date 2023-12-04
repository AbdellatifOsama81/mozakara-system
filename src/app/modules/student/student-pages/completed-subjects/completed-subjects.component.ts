import { Component } from '@angular/core';
import { StudySubject } from 'src/app/core/interfaces/learning-resources/study-subject';
import { SubjectService } from 'src/app/shared/services/learning-resources/subject.service';

@Component({
  selector: 'app-completed-subjects',
  templateUrl: './completed-subjects.component.html',
  styleUrls: ['./completed-subjects.component.scss']
})
export class CompletedSubjectsComponent {
  subjects!: StudySubject[];

  constructor(private _subjectService: SubjectService) { }

  ngOnInit() {
    this.getSubjects();
  }
  getSubjects() {
    this._subjectService.getSubject().subscribe(
      {
        next: (response: any) => {
          this.subjects = response.data;
          console.log(this.subjects);
        }
      }
    );
  }
}
