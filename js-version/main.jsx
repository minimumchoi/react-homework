import ProductListPages from "./pages/ProductLIstPages.jsx";
import "/src/styles/style.scss";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");

createRoot(container).render(<ProductListPages />);
