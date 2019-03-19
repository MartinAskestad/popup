import { TestBed } from '@angular/core/testing';

import { NgPopupService } from './ng-popup.service';

describe('NgPopupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgPopupService = TestBed.get(NgPopupService);
    expect(service).toBeTruthy();
  });
});
