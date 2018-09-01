import { Component } from '@angular/core';

@Component({
  selector: 'nvm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'nvm';
  constructor() {
  }
  add(tileKind: string): void {
    const tile = document.createElement(tileKind);
    document.body.appendChild(tile);
  }

  public load() {
    const script = document.createElement('script');
    script.src = 'assets/lazy-element.bundle.js';
    document.body.appendChild(script);
    this.add('lazy-element');
  }
}
