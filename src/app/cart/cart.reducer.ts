import { createReducer, on } from '@ngrx/store';
import { CartItem } from './cart-item.model';
import { CartActions} from './cart.actions';
export const cartFeatureKey = 'cart';

export interface CartState {
  items: CartItem[];
}

export const initialState: CartState = {
  items: []
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addItem, (state, { item }) => {
    return { ...state, items: [...state.items, item] };
  }),
  on(CartActions.removeItem, (state, { id }) => {
    return { ...state, items: state.items.filter(item => item.id !== id)
    };
  }),
  on(CartActions.clearCart, (state) => {
    return { ...state, items: [] };
  })
);
