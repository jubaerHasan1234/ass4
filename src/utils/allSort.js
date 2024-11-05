export default function allSort(data, order) {
  return data.sort((after, before) => {
    if (order === "asc") {
      return after.price - before.price;
    } else {
      return before.price - after.price;
    }
  });
}
