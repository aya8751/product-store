import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { CartItem } from './cart-item.model';
import { CartActions } from './cart.actions';
import { CartState } from './cart.reducer';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private store: Store<{ cart: CartState }>) {}

  public addItem(item: CartItem): void {
    item.id = uuidv4();
    this.store.dispatch(CartActions.addItem({ item }));
  }

  public removeItem(id: string): void {
    this.store.dispatch(CartActions.removeItem({ id }));
  }

  public clearCart(): void {
    this.store
  }
}
