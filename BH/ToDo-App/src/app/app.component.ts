import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  heading: string = 'Wait for it';

  constructor() {
    // setTimeout(() => {
    //   this.heading = 'Heading changed after 2s';
    // }, 2000);
  }
}
