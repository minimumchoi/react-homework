import { number } from "prop-types";

function CountBox({ quantity }) {
  return (
    <div className="price_counter">
      <button type="button" className="minus-button">
        <img src="/minus.svg" alt="수량 감소 버튼" />
      </button>
      <span className="counter">{quantity}</span>
      <button type="button" className="plus-button">
        <img src="/plus.svg" alt="수량 추가 버튼" />
      </button>
    </div>
  );
}

export default CountBox;

CountBox.propTypes = {
  quantity: number.isRequired,
};
