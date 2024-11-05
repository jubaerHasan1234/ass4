export default function convertToSingleWord(inputString) {
  return inputString.replace(/\s+/g, "").replace(/[^\w]/g, "").toLowerCase();
}
