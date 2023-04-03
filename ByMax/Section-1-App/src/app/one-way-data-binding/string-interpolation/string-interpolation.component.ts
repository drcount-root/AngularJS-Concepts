import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.scss'],
})
export class StringInterpolationComponent {
  title: string = 'String Interpolation';

  newVal : string = 'Dynamic'
}
