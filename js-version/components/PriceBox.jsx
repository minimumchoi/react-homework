import formatPrice from "../lib/price";
import { number } from "prop-types";

function PriceBox({ price, discount, quantity }) {
  return (
    <span className="cart__accordion__price">
      <span className="cart__accordion__price__discount">
        {formatPrice(price * ((100 - discount) / 100) * quantity)}원
      </span>
      <span className="cart__accordion__price__value">
        {formatPrice(price * quantity)}원
      </span>
    </span>
  );
}

PriceBox.propTypes = {
  price: number.isRequired,
  discount: number.isRequired,
  quantity: number.isRequired,
};

export default PriceBox;
