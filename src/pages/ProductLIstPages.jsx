import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";
import Product from "/src/products/Product.jsx";
import dataList from "/src/data/dataList.js";
import CountBox from "/src/products/CountBox.jsx";

function ProductListPages() {
  return (
    <>
      {dataList.map(({ name, quantity, price, src, discount }) => (
        <Product
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
