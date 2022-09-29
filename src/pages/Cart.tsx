import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import Total from "../components/Total";
import "./cart.css";



function Cart() {
  const cart = useSelector((state: any) => state.cart);

  return (
    <div className="cart">
      <div className="cart__left">
        <div>
          <h3 className="text-3xl font-bold">Shopping Cart</h3>
          {cart?.map((item: any) => (
            <CartItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>

      <div className="cart__right">
        <Total />
      </div>
    </div>
  );
}

export default Cart;
