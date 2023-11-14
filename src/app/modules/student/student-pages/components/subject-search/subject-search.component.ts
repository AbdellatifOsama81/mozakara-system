import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-subject-search',
  templateUrl: './subject-search.component.html',
  styleUrls: ['./subject-search.component.scss']
})
export class SubjectSearchComponent {

  isSubmitted: boolean = false;

  searchForm: FormGroup = new FormGroup({
    keyword: new FormControl('', []),
    teacher: new FormControl(null, []),
    status: new FormControl(null, []),
    sort: new FormControl(null, []),
  });

  teachers = [
    'أحمد السيد',
    'تامر سعيد',
    'سعيد معوض',
    'علاء عبد اللطيف',
    'هيثم إسماعيل',
    'سيف الدولتلي'
  ];

  statuses=[
    'جميع المواد',
    'المواد الجديدة',
    'المواد الغير المنتهية',
    'المواد المنتهية',
  ];
  sortTypes=[
    'الأخيرة',
    'الأولى',
  ];

  isInvalid(FormControlName: string) {
    return this.searchForm.get(FormControlName)?.invalid &&
      (this.searchForm.get(FormControlName)?.dirty ||
        this.searchForm.get(FormControlName)?.touched ||
        this.isSubmitted)
  }

  ngOnInit(): void {
    this.searchForm.get('teacher')?.valueChanges.subscribe((teacher) => {
      console.log('SEND API REQUEST AND UPDATE ROLE', teacher);
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log('submitted '+this.searchForm.get('keyword')?.value);
  }

}
