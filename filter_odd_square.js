const mixedNums = [1, 2, 3, 4, 5, 6, 7];
const oddSquares = mixedNums
  .filter(n => n % 2 !== 0)
  .map(n => n * n);
console.log("Odd Squares:", oddSquares);
