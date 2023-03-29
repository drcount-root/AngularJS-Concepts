import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent {
  products = [
    {
      proImgURL:
        'https://5.imimg.com/data5/SELLER/Default/2021/6/OK/WK/HM/55002018/asus-gaming-laptop-500x500.jpg',
      proName: 'Laptop',
      id: 'pro01',
      price: 89000,
    },
    {
      proImgURL:
        'https://cdn1.smartprix.com/rx-iiwv5EJze-w420-h420/nothing-phone-1.webp',
      proName: 'Mobile',
      id: 'pro02',
      price: 35000,
    },
    {
      proImgURL:
        'https://images.samsung.com/is/image/samsung/p6pim/in/ua65bu8570ulxl/gallery/in-crystaluhd-bu8500-ua65bu8570ulxl-532176128?$720_576_PNG$',
      proName: 'TV',
      id: 'pro03',
      price: 150000,
    },
    {
      proImgURL: 'https://m.media-amazon.com/images/I/613XJGaYwML._SX466_.jpg',
      proName: 'Washing Machine',
      id: 'pro04',
      price: 49000,
    },
  ];

  users = [
    { name: 'Subham', age: 25 },
    { name: 'Rahul', age: 27 },
    { name: 'Manish', age: 28 },
  ];

  onCreateUser(uname: any, uage: any) {
    this.users.push({
      name: uname.value,
      age: uage.value,
    });
  }

  onDeleteAllUser(){
    this.users = [];
  }

  // Removes user, which is clicked to be deleted
  onRemoveUser(item: number) {
    this.users.splice(item, 1);
  }
}
