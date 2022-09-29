import { useDispatch } from "react-redux";
// import sweat_shirt1 from '../../images/sweat_shirt1.png';
import {
    decrementQuantity,
    incrementQuantity
} from "../../redux/cartSlice";
import './cart.css';



const CartItem = (props: any) => {

    const { id, image, title, price, quantity = 0 } = props

    const dispatch = useDispatch();

    return (
        <>
            {/* <h1 className="text-3xl mb-24 ml-16">Cart</h1> */}

            <hr />
            <section className='cart__all mb-4 mt-4'>
                <div className='cart_content'>

                    <div className='cart_content_detail'>
                        <h1>{title}</h1>
                        <p className='cart__subhead'>Running Short</p>
                        <h3>PIRCE</h3>
                        <h4>{price}</h4>

                        <h3>SIZE:</h3>
                        <div className='cart__sizes'>
                            <div className='cart__xs'>XS</div>
                            <div className='cart__s'>S</div>
                            <div className='cart__m'>M</div>
                            <div className='cart__l'>L</div>
                        </div>

                        <h3>COLOR:</h3>
                        <div className='cart__sizes'>
                            <div className='cart_col1'></div>
                            <div className='cart_col2'></div>
                            <div className='cart_col3'></div>
                        </div>

                    </div>



                    {/* <button className='button__addtocart'>Add To Cart</button> */}

                    <div className='cart_content_calc'>
                        <div className='cart_add mt-4' onClick={() => dispatch(incrementQuantity(id))}>+</div>
                        <div className='cart_count'>{quantity}</div>
                        <div className='cart_subtract mb-4' onClick={() => dispatch(decrementQuantity(id))}>-</div>
                    </div>
                    <div className='cart_content_img mt-4'>
                        <img src={image} alt='' />
                    </div>

                </div>

            </section>
            <hr />


        </>
    )
}

export default CartItem