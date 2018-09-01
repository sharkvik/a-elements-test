import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as _ from 'lodash';

@Component({
  // selector: 'lazy-element',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nvm0';
  private _from: string;
  @Input() public set from(val: string) {
    this._from = val;
  }
  public get from(): string {
    return this._from;
  }

  ngOnInit(): void {
    if (!_.isEmpty(this.from) && _.isEmpty(this._from)) {
      this._from = this.from;
    }
    this._title.setTitle(this.title + ' ' + this._from);
  }

  constructor(private _title: Title) {
  }
}
