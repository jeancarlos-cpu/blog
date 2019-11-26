export default (string) =>
  string
    .toLowerCase()
    .split(" ")
    .reduce((acc, word) => `${acc} ${word.charAt(0).toUpperCase() + word.slice(1)}`,"");


