import { Component } from '@angular/core';

@Component({
  selector: 'app-one-component',
  templateUrl: './one-component.component.html',
  styleUrls: ['./one-component.component.scss'],
})
export class OneComponentComponent {
  // serverId: number = 10;
  // serverStatus: string = 'Active';

  allowNewServer: boolean = true;

  servers: string[] = [];
  serverName: string = '';

  constructor() {
    // setTimeout(() => {
    //   this.allowNewServer = false;
    //   console.log('Timer End!');
    // }, 3000);
  }

  OnButtonClick() {

    if(this.serverName.length == 0){
      console.log("Please enter server name, can't added without name")
    }

    this.servers.push(this.serverName);
    console.log('Clicked!');
    this.serverName = '';
  }

  onInputChange(name: Event) {
    this.serverName = (<HTMLInputElement>name.target).value;
    console.log((<HTMLInputElement>name.target).value);
  }
}
