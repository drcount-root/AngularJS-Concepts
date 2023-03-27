import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.scss']
})
export class StringInterpolationComponent {
  dynamicName: string = "Subham";

  myMethod(txt: string) {
    return 'I am learning '+ txt;  
  }

  active: boolean = true;
}
