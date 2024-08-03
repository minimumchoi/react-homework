import formatPrice from "../lib/price";

interface PriceBox {
  price: number;
  discount: number;
  quantity: number;
}

function PriceBox({ price, discount, quantity }: PriceBox) {
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

export default PriceBox;
