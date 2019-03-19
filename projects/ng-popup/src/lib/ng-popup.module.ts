import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';
import { NgPopupComponent } from './ng-popup.component';
import { NgPopupService } from './ng-popup.service';

export class DelayedTranslateLoader implements TranslateLoader {
  constructor(private popupService: NgPopupService, private http: HttpClient) {}

  getTranslation(lang: string): Observable<any> {
    console.log('getTranslation', lang);
    return this.popupService.cmsKey.pipe(
      filter(key => !!key),
      switchMap(key => this.http.get(`/assets/i18n/${key}`)),
      tap(key => console.log('getTranslation', 'tap', key))
    );
  }
}

export function httpLoaderFactory(http: HttpClient, service: NgPopupService) {
  return new DelayedTranslateLoader(service, http);
}

@NgModule({
  declarations: [NgPopupComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient, NgPopupService]
      }
    })
  ],
  providers: [NgPopupService],
  exports: [NgPopupComponent]
})
export class NgPopupModule {}
