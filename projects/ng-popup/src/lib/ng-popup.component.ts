import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { NgPopupService } from './ng-popup.service';

@Component({
  selector: 'popup-ng-popup',
  template: `
    <div
      class="modal show fade"
      tabindex="-1"
      role="dialog"
      style="display: block"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title"
              [innerText]="'heading_popup' | translate"
            ></h5>
            <button
              type="button"
              class="close"
              aria-label="Close"
              *ngIf="closebutton"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" [innerHTML]="'Martin was here!'"></div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              *ngIf="closebutton"
              [innerText]="'button_close' | translate"
            ></button>
            <a
              class="btn btn-primary"
              *ngIf="okbutton"
              [innerText]="'button_ok' | translate"
              [href]="href"
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show"></div>
  `,
  styles: []
})
export class NgPopupComponent implements OnInit {
  @Input()
  translationkey: string;

  @Input()
  closebutton: boolean;

  @Input()
  okbutton: string;

  href: SafeUrl;

  constructor(
    private translate: TranslateService,
    private service: NgPopupService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.href = this.sanitizer.sanitize(SecurityContext.URL, this.okbutton);
    this.translate.use('sv-SE');
    this.service.cmsKey.next(this.translationkey);
  }
}
