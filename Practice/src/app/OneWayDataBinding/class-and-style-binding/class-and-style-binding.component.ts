import { Component } from '@angular/core';

@Component({
  selector: 'app-class-and-style-binding',
  templateUrl: './class-and-style-binding.component.html',
  styleUrls: ['./class-and-style-binding.component.scss']
})
export class ClassAndStyleBindingComponent {
  mltStyle = {
    'border-radius': '5px',
  }
}
