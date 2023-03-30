import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  proSelected: boolean = false;
  selProduct: string = '';

  adddedProduct: any;

  onSelectProduct(p: any) {
    this.proSelected = true;
    this.selProduct = p;
  }

  // onAddProduct(){
  //   this.adddedProduct = this.selProduct;
  // }

  // mytext: string = 'Search in uxtrends';

  onAddProduct(proData: any) {
    this.adddedProduct = proData;
  }
}
