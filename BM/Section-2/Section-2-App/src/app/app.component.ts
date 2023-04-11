import { Component } from '@angular/core';

@Component({
  // select by element itself
  selector: 'app-root',

  // select by attribute
  // selector: '[app-root]',

  // select by class
  // selector: '.app-root',

  templateUrl: './app.component.html',

  //   template: `<div class="container">
  //   <div class="row">
  //       <div class="col-xs-12">
  //           <h3>I'm in the App Component!</h3>
  //           <hr>
  //           <app-one-component/>
  //           <app-one-component/>
  //       </div>
  //   </div>
  // </div>

  // `,
  styleUrls: ['./app.component.scss'],
  
  // styles: [
  //   `
  //     h3 {
  //       color: burlywood;
  //     }
  //   `,
  // ],
})
export class AppComponent {
  title = 'Section-2-App';
}
