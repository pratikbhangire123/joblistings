import filterData from "./filterData.js";
import createListings from "./createListings.js";
let dataFile = fetch("../data.json").then((res) => res.json());
let appliedFiltersContainer = document.getElementById("appliedFilters");
let filters = document.getElementById("filters");
let appliedFilters = {
  role: "",
  level: "",
  languages: [],
  tools: [],
};

export function addFilter(data) {
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

      // appliedFilters.role.includes(tab.textContent) ||
      // appliedFilters.level.includes(tab.textContent) ||
      // appliedFilters.languages.includes(tab.textContent) ||
      // appliedFilters.tools.includes(tab.textContent)
      //   ? ((tab.style.backgroundColor = "hsl(180, 29%, 50%)"),
      //     (tab.style.color = "#fff"))
      //   : ((tab.style.backgroundColor = "hsl(180, 31%, 95%)"),
      //     (tab.style.color = "hsl(180, 29%, 50%)"));

      let filteredData = data.filter((item) =>
        filterData(item, appliedFilters)
      );

      createListings(filteredData);

      filters.innerHTML = Object.keys(appliedFilters)
        .map((filter) =>
          appliedFilters[filter] == ""
            ? ``
            : Array.isArray(appliedFilters[filter])
            ? appliedFilters[filter]
                .map(
                  (value) =>
                    `
                    <div class="appliedFilter">
                      ${value}
                      <button id=${filter} class="removeFilterButton">
                        <img src="../images/icon-remove.svg" />
                      </button>
                    </div>
                    `
                )
                .join(" ")
            : `
              <div class="appliedFilter">
                ${appliedFilters[filter]}
                <button id=${filter} class="removeFilterButton">
                  <img src="../images/icon-remove.svg" />
                </button>
              </div>
              `
        )
        .join(" ");

      // console.log(appliedFilters);
      // [...document.getElementsByClassName("removeFilterButton")].forEach(
      //   (removeFilter) =>
      //     removeFilter.addEventListener("click", () => {
      //       !Array.isArray(appliedFilters[removeFilter.id])
      //         ? (appliedFilters[removeFilter.id] = "")
      //         : "";
      //       console.log(appliedFilters);
      //     })
      // );

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

// document.getElementById("clearAllFilters").addEventListener("click", () => {
//   appliedFilters = {
//     role: "",
//     level: "",
//     languages: [],
//     tools: [],
//   };
//   console.log(appliedFilters);
// });
