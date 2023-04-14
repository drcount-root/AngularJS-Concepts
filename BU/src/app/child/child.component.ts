import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  
  // placeholderText: string = 'abc';

  // changing placeholder from parent component
  // @Input() placeholderText: string = 'abc';

  @Input() productSelected: boolean = false;
  @Input() selectedProduct: string = '';

  @Output() adddedProduct: any = new EventEmitter<any>();

  onAddProduct(){
    this.adddedProduct.emit(this.selectedProduct);
  }

 
}
