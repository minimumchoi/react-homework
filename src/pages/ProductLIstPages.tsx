import Product from "../products/Product";
import dataList from "../data/dataList";

function ProductListPages() {
  return (
    <>
      {dataList.map(({ productId, name, quantity, price, src, discount }) => (
        <Product
          key={productId}
          name={name}
          quantity={quantity}
          price={price}
          src={src}
          discount={discount}
        />
      ))}
    </>
  );
}

export default ProductListPages;
