import { useSelector } from "react-redux";
import './cart.css';
import CartItem from "./CartItem";



const Cart = (props: any) => {

    const cart = useSelector((state: any) => state.cart);

    const getTotal = () => {
        let totalQuantity = 0;
        let totalPrice = 0;
        cart.forEach((item: any) => {
            totalQuantity += item.quantity;
            totalPrice += item.price * item.quantity;
        });
        return { totalPrice, totalQuantity };
    };

    return (
        <>
            <h1 className="text-3xl mb-24 ml-16">Cart</h1>

            {/* <hr /> */}
            <section className='cart__all mb-4 mt-4'>
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
            </section>
            {/* <hr /> */}

            <div className='cart__order'>
                <h3>Tax 21%:   $42.00</h3>
                <h3>Quantity: {getTotal().totalQuantity} items</h3>
                <h3>Total: ${getTotal().totalPrice}</h3>
                <button className='button__cart__order mt-2'>Order</button>
            </div>

        </>
    )
}

export default Cart