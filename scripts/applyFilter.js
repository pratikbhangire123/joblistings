import { listingsData } from "./listingsData.js";
import filterData from "./filterData.js";
import showAppliedFilters from "./showAppliedFilters.js";
import createListings from "./createListings.js";

export default function applyFilter(tab, appliedFilters) {
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

  let filteredData = listingsData.filter((item) =>
    filterData(item, appliedFilters)
  );

  showAppliedFilters(appliedFilters);

  createListings(filteredData);
}
