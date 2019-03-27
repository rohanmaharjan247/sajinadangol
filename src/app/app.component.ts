import { Component } from '@angular/core';

import { Router, NavigationStart, NavigationCancel, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sajina-cv';
  loading: boolean;
  constructor(private _router: Router) {
    _router.events.subscribe(e => {
      switch (true) {
        case e instanceof NavigationStart:
          this.loading = true;
          break;
        case e instanceof NavigationCancel:
        case e instanceof NavigationEnd:
        case e instanceof NavigationError:
          this.loading = false;
          break;
        default:
          this.loading = false;
      }



    })
  }
}
