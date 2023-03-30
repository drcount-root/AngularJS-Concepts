import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  
  statusOnline: boolean = true;
  
  products = [
    {
      name: 'Laptop',
    },
    {
      name: 'TV',
    },
    {
      name: 'Mobile',
    },
    {
      name: 'Washing Machine',
    },
  ];
}
