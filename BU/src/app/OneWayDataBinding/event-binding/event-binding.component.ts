import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {

  msg: string = ""

  onAddToCart (event: any) {
    this.msg = event.target.value + ' Added to cart'
  }
  
  onInputClick(event: any) {
    console.log(event.target.value);
  }
}

/*

(focus)="myMethod()"  // An element has received focus
(blur)="myMethod()"   // An element has lost focus

(submit)="myMethod()"  // A submit button has been pressed

(scroll)="myMethod()"

(cut)="myMethod()"
(copy)="myMethod()"
(paste)="myMethod()"

(keydown)="myMethod()"
(keypress)="myMethod()"
(keyup)="myMethod()"

(mouseenter)="myMethod()"
(mousedown)="myMethod()"
(mouseup)="myMethod()"

(click)="myMethod()"
(dblclick)="myMethod()"

(drag)="myMethod()"
(dragover)="myMethod()"
(drop)="myMethod()"

*/