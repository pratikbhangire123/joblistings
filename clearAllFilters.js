import createListings from "./scripts/createListings.js";
import showAppliedFilters from "./scripts/showAppliedFilters.js";
import { listingsData } from "./scripts/listingsData.js";
import filterData from "./scripts/filterData.js";

export default function clearAllFilters(appliedFilters) {
  document.getElementById("clearAllFilters").addEventListener("click", () => {
    Object.keys(appliedFilters).forEach((key) => {
      Array.isArray(appliedFilters[key])
        ? (appliedFilters[key] = [])
        : (appliedFilters[key] = "");
    });

    let filterClearedData = listingsData.filter((item) =>
      filterData(item, appliedFilters)
    );

    showAppliedFilters(appliedFilters);

    createListings(filterClearedData);
  });
}
