import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InnerComponent } from './inner/inner.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InnerComponent],
  entryComponents: [InnerComponent]
})
export class ElModule {
  constructor(private injector: Injector) {
    const tileCE = createCustomElement(InnerComponent, { injector: this.injector });
    customElements.define('nvm-inner', tileCE);
  }
}
