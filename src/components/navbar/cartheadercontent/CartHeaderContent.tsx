import { useSelector } from "react-redux";
import CartHeaderContentItems from "./CartHeaderContentItems";


// type Props = {

// }

const CartHeaderContent = (props: any) => {
    const cart = useSelector((state: any) => state.cart);

    return (
        <>
            {cart?.map((item: any) => (
                <CartHeaderContentItems
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                />
            ))}
        </>
    )
}

export default CartHeaderContent