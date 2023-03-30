import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  productSelected: boolean = false;
  selectedProduct: string = '';

  adddedProduct: any;

  onSelectProduct(p: any){
    this.productSelected = true;
    this.selectedProduct = p;
  }

  onAddProduct(){
    this.adddedProduct = this.selectedProduct;
  }
}
