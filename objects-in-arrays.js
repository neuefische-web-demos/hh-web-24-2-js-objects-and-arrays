// Objects in Arrays

const searchResults = [
  {
    id: "42",
    link: "https://de.wiki...",
    title: "MDN - Wikipedia",
    description: "MDN ...",
  },
  {
    id: "13",
    link: "https://mdn.org",
    title: "MDN",
    description: "MDN website ...",
  },
  {
    id: "7",
    link: "https://developer.mozilla.org/",
    title: "MDN Web Docs",
    description: "Documentation ....",
  },
];

// console.log(searchResults[0].title);
// console.log(searchResults[0].link);

function createLink(dataPackage) {
  // imagine creating html here...
  console.log("----");
  console.log(dataPackage.title);
  console.log(dataPackage.link);
  console.log(dataPackage.description);
}

createLink(searchResults[0]); // -> dataPackage = searchResults[0]
createLink(searchResults[1]); // -> dataPackage = searchResults[1]
createLink(searchResults[2]); // -> dataPackage = searchResults[2]
