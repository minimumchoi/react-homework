import Product from "/src/products/Product.jsx";
import dataList from "/src/data/dataList.js";

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
