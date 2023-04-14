import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent {
 
  constructor(){}

  isValid: boolean = false;

  
  
  onCreateBlock(){
    // this.isValid = true;

    if(this.isValid) this.isValid = false;
    else this.isValid = true;
  }
}
