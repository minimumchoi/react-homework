import formatPrice from "../lib/price";
import CountBox from "./CountBox";
import InputBox from "./InputBox";

interface Props {
  name: string;
  src: string;
  price: number;
  quantity: number;
  discount: number;
}

function Product({ name, src, price, quantity, discount }: Props) {
  return (
    <div className="cart__accordion">
      <InputBox />
      <a href="/">
        <img src={src} alt={name} className="cart__accordion__img" />
        <label htmlFor="cartAddedSelect" className="cart__accordion__name">
          {name}
        </label>
      </a>
      <CountBox quantity={quantity} />
      <span className="cart__accordion__price">
        <span className="cart__accordion__price__discount">
          {formatPrice(price * ((100 - discount) / 100) * quantity)}원
        </span>
        <span className="cart__accordion__price__value">
          {formatPrice(price * quantity)}원
        </span>
      </span>
      <button type="button" className="cart__accordion__delete"></button>
    </div>
  );
}

export default Product;
