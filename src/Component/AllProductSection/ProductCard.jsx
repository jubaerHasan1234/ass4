import { useContext, useState } from "react";
import { ProductContext } from "../../contexts/context";
import ButtonShopSvg from "../../SvgJsx/ButtonShopSvg";
import { formatSentence } from "../../utils";

export default function ProductCard({ productValue }) {
  const [add, setAdd] = useState(true);
  const { cardDispatch } = useContext(ProductContext);
  const handelAdd = (addProduct) => {
    cardDispatch({ type: "add", addProduct });
  };
  const handelRemove = (removeId) => {
    cardDispatch({ type: "remove", removeId });
  };
  return (
    <div className="relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
        <img
          src={productValue.image}
          alt={productValue.category}
          className="h-full w-full object-cover object-top lg:h-full lg:w-full  bg-gray-100"
        />
      </div>
      <div className="mt-4 px-3 pb-4">
        <div>
          <h3 className="text-sm text-gray-700">
            {formatSentence(productValue.title)}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {formatSentence(productValue.category)}
          </p>
        </div>
        <p className="text-sm font-medium text-gray-900">{`$${productValue.price}`}</p>
      </div>

      <div className="cursor-pointer rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 ring-1  hover:ring-1 ring-slate-700/10 hover:bg-slate-50 hover:text-slate-900 items-center text-center mb-3 mx-3 flex-1">
        {add ? (
          <div
            className={`flex px-3 py-2 justify-center`}
            onClick={() => {
              setAdd(!add);
              handelAdd(productValue);
            }}
          >
            <ButtonShopSvg />
            Add to Cart
          </div>
        ) : (
          <div
            className={`flex px-3 py-2 justify-center ${
              add ? null : "bg-red-200"
            }`}
            onClick={() => {
              setAdd(!add);
              handelRemove(productValue.id);
            }}
          >
            Remove From Cart
          </div>
        )}
      </div>
    </div>
  );
}

// {
//   add ? <ButtonShopSvg /> : null;
// }
// {
//   add ? "" : "Remove From Cart";
// }
