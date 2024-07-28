import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

function CountBox({ quantity }) {
  return (
    <div class="price_counter">
      <button type="button" class="minus-button">
        <img src="/minus.svg" alt="수량 감소 버튼" />
      </button>
      <span class="counter">{quantity}</span>
      <button type="button" class="plus-button">
        <img src="/plus.svg" alt="수량 추가 버튼" />
      </button>
    </div>
  );
}

export default CountBox;
