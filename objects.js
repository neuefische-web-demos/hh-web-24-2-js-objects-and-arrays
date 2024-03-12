// Objects

const data = {
  id: "42",
  link: "https://de.wiki...",
  title: "MDN - Wikipedia",
  description: "MDN ...",
};

console.log(data["title"]);
console.log(data.title);

data.title = "Changed...";

console.log(data.title);

data.newItem = "Wow!";

console.log(data);
