import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export interface category {
  id: number;
  name: string;
}
export interface product{
  brand:string
  category: string;
  description:string;
  discountPercentage:string;
  id: number;
  images:string[];
  price:number;
  quantity:number;
  rating:number;
  stock:number;
  thumbnail:string;
  title: string;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<any>("https://dummyjson.com/products").pipe(map((response: any) => {
      return response;
      // const { category, description, id, images,price, title, ...rest } = response.products;
      // const newObj = { category, description, id, images, price, title};
    }));
  }
  getProductCategories(){
    return this.http.get<any>("https://dummyjson.com/products/categories").pipe(map((response: any) => response.map((category: any, index: number) => {
      return {
        id: index,
        name: category
      };
    })));
  }
}
