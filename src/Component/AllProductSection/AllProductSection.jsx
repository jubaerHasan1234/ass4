import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductProvider } from "../../provider";
import CategoriProvider from "../../provider/CategoriProvider";
import AllProduct from "./AllProduct";
import ProductDiscription from "./ProductDiscription";
import SortFilterSearchCart from "./SortFilterSearchCart";
export default function AllProductSection() {
  return (
    <div>
      <div className="pt-16 sm:pt-24 lg:pt-40">
        <CategoriProvider>
          <ProductProvider>
            <ProductDiscription />
            <SortFilterSearchCart />
            <AllProduct />
            <ToastContainer />
          </ProductProvider>
        </CategoriProvider>
      </div>
    </div>
  );
}
