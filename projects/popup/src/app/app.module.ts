import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { NgPopupComponent } from '../../../ng-popup/src/lib/ng-popup.component';
import { NgPopupModule } from '../../../ng-popup/src/lib/ng-popup.module';

@NgModule({
  imports: [BrowserModule, NgPopupModule],
  entryComponents: [NgPopupComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(NgPopupComponent, { injector });
    console.log('custom element', el);
    customElements.define('kyc-popup', el);
  }

  ngDoBootstrap() {}
}
