import {useDispatch, useSelector} from 'react-redux';
import ItemList from './ItemList';
import {clearCart} from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <>
      <div>Cart</div>
      <div>
          <button className=" p-2 m-2 bg-black text-white"
          onClick={handleClearCart}
          >
              Clear Cart
          </button>
          {cartItems.length === 0 &&  <h1>Cart is empty. Add items to the cart.</h1>}
        <ItemList items={cartItems} />
      </div>
    </>
  );
};
export default Cart;
