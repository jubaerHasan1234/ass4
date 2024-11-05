import { useContext } from "react";
import ShopSvg from "../../SvgJsx/ShopSvg";
import { ProductContext } from "../../contexts/context";

export default function Cart() {
  const { card } = useContext(ProductContext);
  return (
    <div className="flow-root">
      <a className="group -m-2 flex items-center p-2 cursor-pointer">
        <ShopSvg />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {card.length}
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </a>
    </div>
  );
}
