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

function addFilter(data) {
  let filterTabs = document.getElementsByClassName("filterTab");

  [...filterTabs].forEach((tab) =>
    tab.addEventListener("click", () => {
      appliedFiltersContainer.style.visibility = "visible";

      tab.id == "role"
        ? (appliedFilters.role = tab.textContent)
        : tab.id == "level"
        ? (appliedFilters.level = tab.textContent)
        : tab.id == "language" &&
          !appliedFilters.languages.includes(tab.textContent)
        ? appliedFilters.languages.push(tab.textContent)
        : tab.id == "tool" && !appliedFilters.tools.includes(tab.textContent)
        ? appliedFilters.tools.push(tab.textContent)
        : false;

      appliedFilters.role.includes(tab.textContent) ||
      appliedFilters.level.includes(tab.textContent) ||
      appliedFilters.languages.includes(tab.textContent) ||
      appliedFilters.tools.includes(tab.textContent)
        ? ((tab.style.backgroundColor = "hsl(180, 29%, 50%)"),
          (tab.style.color = "#fff"))
        : ((tab.style.backgroundColor = "hsl(180, 31%, 95%)"),
          (tab.style.color = "hsl(180, 29%, 50%)"));

      appliedFiltersContainer.innerHTML = `<label>
        ${appliedFilters.role} 
        ${appliedFilters.level} 
        ${[...appliedFilters.languages].join(" ")} 
        ${[...appliedFilters.tools].join(" ")}
      <label>`;

      let filteredData = data.filter((item) =>
        filterData(item, appliedFilters)
      );

      // filteredData.forEach((item) => {
      //   document
      //     .querySelectorAll("#listingCard")
      //     .forEach((card) =>
      //       item.id !== +card.getAttribute("key")
      //         ? (card.style.visibility = "hidden")
      //         : false
      //     );
      // });

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
    console.log(data);
    createListings(data);
    addFilter(data);
  })
  .catch((err) => console.error(err));
