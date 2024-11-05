export default function searchFilterResult(allProduct, debounceSearch) {
  return allProduct.filter((product) =>
    product.title.toLowerCase().includes(debounceSearch.toLowerCase())
  );
}
