import { listingsData } from "./listingsData.js";
import filterData from "./filterData.js";
import showAppliedFilters from "./showAppliedFilters.js";
import createListings from "./createListings.js";

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
