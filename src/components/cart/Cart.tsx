import { PaystackButton } from "react-paystack";
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


    const config = {
        reference: new Date().getTime().toString(),
        email: 'Buyer@gmail.com',
        items: getTotal().totalQuantity,
        amount: getTotal().totalPrice * 100,
        publicKey: "pk_test_542f13c10fbc1f25bfa6b889d6d8941f12c3d901",
        // publicKey: process.env.REACT_APP_PAYSTACK,
    };

    console.log(process.env.REACT_APP_PAYSTACK);

    // you can call this function anything
    const handlePaystackSuccessAction = (reference: any) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(
            `payment complete! with reference number ${JSON.stringify(
                reference.reference
            )}`
        );
    };

    // you can call this function anything
    const handlePaystackCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        alert("You have cancled this transaction");
    };

    const componentProps = {
        ...config,
        text: "Pay Now",
        onSuccess: (reference: any) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };


    return (
        <>
            <h1 className="text-3xl mb-24 ml-20 mt-28">Cart</h1>

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
                <PaystackButton className='button__cart__order mt-2' {...componentProps} />

                {/* <button className='button__cart__order mt-2'>Order</button> */}
            </div>

        </>
    )
}

export default Cart