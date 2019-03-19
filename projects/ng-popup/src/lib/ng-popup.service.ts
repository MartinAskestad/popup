import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgPopupService {
  cmsKey: Subject<string> = new Subject();
}
