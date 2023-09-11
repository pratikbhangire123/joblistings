import filterData from "./filterData.js";
import createListings from "./createListings.js";
let dataFile = fetch("../data.json").then((res) => res.json());
let appliedFiltersContainer = document.getElementById("appliedFilters");
let appliedFilters = [];

function addFilter() {
  let filterTabs = document.getElementsByClassName("filterTab");

  [...filterTabs].forEach((tab) =>
    tab.addEventListener("click", () => {
      appliedFiltersContainer.style.visibility = "visible";

      appliedFilters.includes(tab.textContent)
        ? ""
        : appliedFilters.push(tab.textContent);

      appliedFilters.includes(tab.textContent)
        ? ((tab.style.backgroundColor = "hsl(180, 29%, 50%)"),
          (tab.style.color = "#fff"))
        : ((tab.style.backgroundColor = "hsl(180, 31%, 95%)"),
          (tab.style.color = "hsl(180, 29%, 50%)"));

      appliedFiltersContainer.innerHTML = appliedFilters
        .map((filter) => `<label>${filter}</label>`)
        .join(" ");
    })
  );
}

dataFile
  .then((data) => {
    createListings(data);
    addFilter(data);
  })
  .catch((err) => console.error(err));

// const people = [
//   {
//     name: "Adam",
//     age: 30,
//     country: "Austria",
//     languages: ["English", "Spanish"],
//   },
//   {
//     name: "Bob",
//     age: 40,
//     country: "Belgium",
//     languages: ["English", "French"],
//   },
//   {
//     name: "Carl",
//     age: 30,
//     country: "Canada",
//     languages: ["Spanish", "Portuguese"],
//   },
//   {
//     name: "Adam",
//     age: 40,
//     country: "Austria",
//     languages: ["Spanish", "Portuguese"],
//   },
// ];

// const conditions = {
//   name: "Adam",
//   country: "Austria",
//   languages: ["Spanish"],
// };

// const results = people.filter((person) => {
//   return Object.keys(conditions).every((key) => {
//     // return conditions[key] === person[key];
//     if (Array.isArray(conditions[key])) {
//       return conditions[key] == person[key];
//     }
//   });
// });

// console.log(results);
