import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
    decrementQuantity,
    incrementQuantity
} from "../../../redux/cartSlice";



// type Props = {}

const CartHeaderContentItems = (props: any) => {
    const { id, image, title, price, quantity = 0, handleCloses } = props
    const dispatch = useDispatch();


    return (
        <>
            <Link to={`/details/${id}`} onClick={() => handleCloses()}>

                <div className="cart_header_content">

                    <div className="cart_header_content_detail">
                        <h1>{title}</h1>
                        <p className="cart_header__subhead">Running Short</p>
                        <h4>${price}</h4>

                        <h3 className="cart_header__h3">SIZE:</h3>
                        <div className="cart_header__sizes">
                            <div className="cart_header__xs">XS</div>
                            <div className="cart_header__s">S</div>
                            <div className="cart_header__m">M</div>
                            <div className="cart_header__l">L</div>
                        </div>

                        <h3 className="cart_header__h3">COLOR:</h3>
                        <div className="cart_header__sizes">
                            <div className="cart_header_col1"></div>
                            <div className="cart_header_col2"></div>
                            <div className="cart_header_col3"></div>
                        </div>
                    </div>

                    <div className="cart_header_content_calc">
                        <div className="cart_header_add mt-4" onClick={() => dispatch(incrementQuantity(id))}>+</div>
                        <div className="cart_header_count">{quantity}</div>
                        <div className="cart_header_subtract mb-4" onClick={() => dispatch(decrementQuantity(id))}>-</div>
                    </div>
                    <div className="cart_header_content_img mt-4">
                        <img src={image} alt="" />
                    </div>
                </div>
            </Link>
        </>
    )
}

export default CartHeaderContentItems