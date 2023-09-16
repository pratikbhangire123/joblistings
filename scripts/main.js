import applyFilter from "./applyFilter.js";
import createListings from "./createListings.js";
import showAppliedFilters from "./showAppliedFilters.js";
let dataFile = fetch("../data.json").then((res) => res.json());
let appliedFiltersContainer = document.getElementById("appliedFilters");
let appliedFilters = {
  role: "",
  level: "",
  languages: [],
  tools: [],
};

export function main(data) {
  let filterTabs = document.getElementsByClassName("filterTab");

  [...filterTabs].forEach((tab) =>
    tab.addEventListener("click", () => {
      appliedFiltersContainer.style.visibility = "visible";

      applyFilter(tab, appliedFilters, data);

      // showAppliedFilters(appliedFilters, data);
    })
  );
}

dataFile
  .then((data) => {
    createListings(data);
    main(data);
  })
  .catch((err) => console.error(err));

// appliedFilters.role.includes(tab.textContent) ||
// appliedFilters.level.includes(tab.textContent) ||
// appliedFilters.languages.includes(tab.textContent) ||
// appliedFilters.tools.includes(tab.textContent)
//   ? ((tab.style.backgroundColor = "hsl(180, 29%, 50%)"),
//     (tab.style.color = "#fff"))
//   : ((tab.style.backgroundColor = "hsl(180, 31%, 95%)"),
//     (tab.style.color = "hsl(180, 29%, 50%)"));

// document.getElementById("clearAllFilters").addEventListener("click", () => {
//   appliedFilters = {
//     role: "",
//     level: "",
//     languages: [],
//     tools: [],
//   };
//   console.log(appliedFilters);
// });
