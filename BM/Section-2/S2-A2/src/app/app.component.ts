import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'S2-A2';


  onInputChange(event: Event){
    this.title = (<HTMLInputElement>event.target).value;
  }
  
  changedText: string = '';

  onButtonClick() {
    this.changedText = this.title;
    console.log('Button Clicked')

    this.title = '';
  }





}
