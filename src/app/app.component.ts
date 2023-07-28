import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<button mat-raised-button color="primary">Primary</button>
      <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'helpdesk-frontend';
}
