import filterData from "./filterData.js";
import createListings from "./createListings.js";
let dataFile = fetch("../data.json").then((res) => res.json());
let appliedFiltersContainer = document.getElementById("appliedFilters");
let appliedFilters = {
  role: "",
  level: "",
  languages: [],
  tools: [],
};

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
        .map(
          (filter) =>
            `<label>${filter}</label><button id="removeFilter">Remove</button>`
        )
        .join(" ");

      // document.getElementById("removeFilter").addEventListener("click", () => {
      //   appliedFilters.pop(tab.textContent);
      //   console.log(appliedFilters);
      // });

      // console.log(appliedFilters);
    })
  );
}

dataFile
  .then((data) => {
    createListings(data);
    console.log(data);
    appliedFilters.role = "Frontend";
    appliedFilters.level = "Junior";
    appliedFilters.languages = ["JavaScript", "HTML"];
    appliedFilters.tools = ["Sass"];
    let filteredListings = data.filter((item) =>
      filterData(item, appliedFilters)
    );
    console.log(filteredListings);
    // addFilter(data);
  })
  .catch((err) => console.error(err));
