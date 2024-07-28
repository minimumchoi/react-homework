import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";
import CountBox from "/src/products/CountBox.jsx";
import formatPrice from "/src/lib/price";
import InputBox from "/src/products/InputBox";

function Product({ name, src, price, quantity, discount }) {
  return (
    <div class="cart__accordion">
      <InputBox />
      <a href="/">
        <img src={src} alt={name} class="cart__accordion__img" />
        <label for="cartAddedSelect" class="cart__accordion__name">
          {name}
        </label>
      </a>
      <CountBox quantity={quantity} />
      <span class="cart__accordion__price">
        <span class="cart__accordion__price__discount">
          {formatPrice(price * ((100 - discount) / 100) * quantity)}원
        </span>
        <span class="cart__accordion__price__value">
          {formatPrice(price * quantity)}원
        </span>
      </span>
      <button type="button" class="cart__accordion__delete"></button>
    </div>
  );
}

export default Product;
