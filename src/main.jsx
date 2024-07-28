import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";
import Product from "/src/products/Product.jsx";
import dataList from "/src/data/dataList.js";
import ProductListPages from "/src/pages/ProductLIstPages.jsx";
import "/src/styles/style.scss";

const container = document.getElementById("root");

createRoot(container).render(<ProductListPages />);
