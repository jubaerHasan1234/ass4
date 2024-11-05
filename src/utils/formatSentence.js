export default function formatSentence(sentence) {
  if (!sentence) return sentence;

  const words = sentence.split(" ");

  const formattedWords = words.map((word, index) => {
    if (index === 0) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word.charAt(0).toLowerCase() + word.slice(1).toLowerCase();
    }
  });

  return formattedWords.join(" ");
}
