import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-view-buttons',
  templateUrl: './toggle-view-buttons.component.html',
  styleUrls: ['./toggle-view-buttons.component.scss']
})
export class ToggleViewButtonsComponent {

  currViewLocal: string = 'grid';
  @Output() currView = new EventEmitter<string>();

  public setView(view: string) {
    //for now, possible view values are 'grid', 'horizontal'
    this.currViewLocal = view;
    this.currView.emit(this.currViewLocal);
  }
}
