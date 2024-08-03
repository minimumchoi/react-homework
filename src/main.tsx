import ProductListPages from "./pages/ProductLIstPages.tsx";
import "/src/styles/style.scss";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root") as HTMLElement;

createRoot(container).render(<ProductListPages />);
