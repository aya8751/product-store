import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './cart.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({cardReducer: cartReducer})
  ]
})
export class CartModule { }
