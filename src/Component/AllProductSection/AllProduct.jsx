import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { CategoriContext, ProductContext } from "../../contexts/context";
import LoadingCard from "./LoadingCard";
import ProductCard from "./ProductCard";

export default function AllProduct() {
  const { loading, data } = useContext(ProductContext);
  const { emptyCategori } = useContext(CategoriContext);
  const loadingArray = [1, 2, 3, 4];

  useEffect(() => {
    if (
      emptyCategori === "men's clothing" ||
      emptyCategori === "women's clothing"
    ) {
      if (data.length === 0) {
        toast.error("Sorry, this category cannot be filtered", {
          position: "bottom-center",
        });
      }
    }
  }, [emptyCategori, data]);
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {loading
              ? loadingArray.map((currantValue) => (
                  <LoadingCard key={currantValue} />
                ))
              : data.map((productValue) => (
                  <ProductCard
                    productValue={productValue}
                    key={productValue.id}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
