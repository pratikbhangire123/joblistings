import createListings from "./createListings.js";
import filterData from "./filterData.js";
import showAppliedFilters from "./showAppliedFilters.js";

export default function removeFilter(appliedFilters, data) {
  let appliedFilter = document.getElementsByClassName("appliedFilter");

  [...appliedFilter].forEach((filter) => {
    let appliedFilterValue = filter.textContent.trim();

    let removeFilterButton =
      filter.getElementsByClassName("removeFilterButton");

    [...removeFilterButton].forEach((button) => {
      button.addEventListener("click", () => {
        Object.keys(appliedFilters).forEach((filterKey) => {
          if (Array.isArray(appliedFilters[filterKey])) {
            appliedFilters[filterKey].forEach((value) => {
              value === appliedFilterValue
                ? appliedFilters[filterKey].splice(
                    appliedFilters[filterKey].indexOf(value),
                    1
                  )
                : false;
            });
          } else if (appliedFilters[filterKey] === appliedFilterValue) {
            appliedFilters[filterKey] = "";
          }
        });

        let filterRemovedData = data.filter((item) =>
          filterData(item, appliedFilters)
        );

        console.log("remove", filterRemovedData);

        showAppliedFilters(appliedFilters, filterRemovedData);

        createListings(filterRemovedData);
      });
    });
  });
}