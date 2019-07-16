import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'coben-container',
  templateUrl: './coben-container.component.html',
})
export class CobenContainerComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  private _opened = false;

  constructor() {
  }

  ngOnInit() {
  }

  private _toggleSidebar() {
    this._opened = !this._opened;
  }
}
