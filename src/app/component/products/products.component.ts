import { Component, OnInit } from '@angular/core';
import { ApiService, category, product } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productList : product[] = [];
  public filterCategory : product[] = [];
  public categories !: category[];
  searchKey:string ="";
  selectedCategoryId !: number;
  p: number = 1;
  // collection: any[] = [15, 30];

  constructor(private api : ApiService, private cartService : CartService){
  }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res =>{
      this.productList = res.products;
      this.filterCategory = res.products;
      // console.log(res.products);
      this.productList.forEach((element:product) => {
        Object.assign(element,{quantity:1, total:element.price})
      });
      console.log("pros", this.productList);
    })
    this.api.getProductCategories().subscribe(res =>{
      this.categories = res;
      // console.log(res);
    })
    this.cartService.search.subscribe(value=>{
      this.searchKey = value;
    })
  }

  addtocart(item: product){
    this.cartService.addtoCart(item);
  }

  filter(category: string = ""){
    this.filterCategory = this.productList.filter((item:any)=>{
      if(item.category == category || category==""){
        return item;
      }
    });
  }
}
