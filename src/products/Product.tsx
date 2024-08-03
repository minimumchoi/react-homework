import CountBox from "../components/CountBox";
import InputBox from "../components/InputBox";
import ImageLink from "../components/ImageLink";
import PriceBox from "../components/PriceBox";
import DeleteBtn from "../components/DeleteBtn";

interface Product {
  name: string;
  src: string;
  price: number;
  quantity: number;
  discount: number;
}

function Product({ name, src, price, quantity, discount }: Product) {
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

export default Product;
