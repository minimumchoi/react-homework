import CountBox from "../components/CountBox";
import InputBox from "../components/InputBox";
import ImageLink from "../components/ImageLink";
import PriceBox from "../components/PriceBox";
import DeleteBtn from "../components/DeleteBtn";
import { number, string } from "prop-types";

function Product({ name, src, price, quantity, discount }) {
  return (
    <div className="cart__accordion">
      <InputBox />
      <ImageLink name={name} src={src} />
      <CountBox quantity={quantity} />
      <PriceBox price={price} discount={discount} quantity={quantity} />
      <DeleteBtn />
    </div>
  );
}

Product.propTypes = {
  name: string,
  src: string,
  price: number,
  quantity: number,
  discount: number,
};

export default Product;
