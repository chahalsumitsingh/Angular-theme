import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loadingCount = 0;
  constructor() {}

  show() {
   // this.showLoader = true;
   this.loadingCount++;
  }

  hide() {
   //
   this.loadingCount--;  // this.showLoader = false;
  }
}