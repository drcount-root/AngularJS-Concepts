import { Component } from '@angular/core';

@Component({
  selector: 'app-template-referance-variable',
  templateUrl: './template-referance-variable.component.html',
  styleUrls: ['./template-referance-variable.component.scss'],
})
export class TemplateReferanceVariableComponent {
  getInputInfo(inputInfo: any) {
    console.log(inputInfo.name);
    console.log(inputInfo.value);
  }
}
