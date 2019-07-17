import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'coben-container',
  templateUrl: './coben-container.component.html',
})
export class CobenContainerComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  public _opened = false;

  constructor() {
  }

  ngOnInit() {
  }

  public _toggleSidebar() {
    this._opened = !this._opened;
  }
}
