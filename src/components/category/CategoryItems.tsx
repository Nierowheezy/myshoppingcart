import { useDispatch } from "react-redux";
import add_to_cart from '../../images/add_to_cart.png';
import { addToCart } from "../../redux/cartSlice";
import './categoryItems.css';

// type Props = {}

interface Props {
    id: number;
    title: string;
    image: string;
    price: string;
}


const CategoryItems = ({ id, title, price, image }: Props) => {
    const dispatch = useDispatch();


    return (
        <>
            <div className="category__item">
                <div className='img'>
                    <img src={image} alt="img1" />
                    <div className='overlay'>
                        <img src={add_to_cart} alt="add to cart img" onClick={() =>
                            dispatch(
                                addToCart({
                                    id,
                                    title,
                                    image,
                                    price,
                                })
                            )
                        } />
                    </div>
                </div>
                <h4 className='mt-4'>{title}</h4>
                <h6>{price}</h6>
                <div className='add__to__cart__overlay'>
                    <div></div>
                    <div></div>
                </div>
            </div>

        </>
    )
}

export default CategoryItems