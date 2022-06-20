import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  selectedProduct: Product = new Product;
  selected: boolean = false;
  selectedId: number = 0;



  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

    this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });

  }


  toggleSelected(product: Product): void{

    this.selected = !this.selected;
    
    
    if(this.selected){
      this.selectedProduct = product;
      this.selectedId = product.ProductId;
    }else{
      this.selectedId = 0;
    }
    
    console.log(this.selectedId); 
    
  }

  checkNull(item: any): any{
    if(item === null) {
      return "it's unknown"
    }else{
      return item;
    }
  }

}
