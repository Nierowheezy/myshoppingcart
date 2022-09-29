import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "./item.css";

interface Props {
  id: number;
  title: string;
  image: string;
  price: number;
  rating?: number;
}

const Item = ({ id, title, price, image }: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="item">
      <div className="item__info">
        <p className="item__title">{title}</p>
        <p className="item__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={image} alt="item" />
      <button
        onClick={() =>
          dispatch(
            addToCart({
              id,
              title,
              image,
              price,
            })
          )
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
