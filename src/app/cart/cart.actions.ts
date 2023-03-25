import { createAction, props } from '@ngrx/store';
import { CartItem } from './cart-item.model';


export class CartActions {
  static addItem = createAction(
    '[Cart] Add Item',
    props<{ item: CartItem }>()
  );

  static removeItem = createAction(
    '[Cart] Remove Item',
    props<{ id: string }>()
  );

  static clearCart = createAction(
    '[Cart] Clear Cart'
  );

  static getTotalPrice = createAction(
    '[Cart] Total Items Price'
  )
}

