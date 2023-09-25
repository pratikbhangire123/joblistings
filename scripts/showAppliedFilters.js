import clearAllFilters from "../clearAllFilters.js";
import removeFilter from "./removeFilter.js";

let filters = document.getElementById("filters");

export default function showAppliedFilters(appliedFilters) {
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
                    <button class="removeFilterButton">
                      <img src="../images/icon-remove.svg" />
                    </button>
                  </div>
                `
            )
            .join(" ")
        : `
              <div class="appliedFilter">
                ${appliedFilters[filter]}
                <button class="removeFilterButton">
                  <img src="../images/icon-remove.svg" />
                </button>
              </div>
              `
    )
    .join(" ");

  removeFilter(appliedFilters);
  clearAllFilters(appliedFilters);
}
