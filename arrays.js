// Arrays

const searchResults = [
  "MDN Web Docs",
  "MDN Web Docs - GitHub",
  "MDN Wikipedia",
  "MDN Wikipedia",
];

console.log(searchResults);
console.log(searchResults.length);

searchResults.push(
  "MDN - E-Health-Software, Order-Entry und Videosprechstunde"
);

console.log(searchResults);

const lastElement = searchResults.pop();

console.log(searchResults);
console.log(lastElement);

console.log(searchResults[2]);
