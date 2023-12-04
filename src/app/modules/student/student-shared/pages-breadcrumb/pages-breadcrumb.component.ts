import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pages-breadcrumb',
  templateUrl: './pages-breadcrumb.component.html',
  styleUrls: ['./pages-breadcrumb.component.scss']
})
export class PagesBreadcrumbComponent {
  @Input() pages!: any[];

}
