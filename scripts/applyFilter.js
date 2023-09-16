import createListings from "./createListings.js";
import filterData from "./filterData.js";
import showAppliedFilters from "./showAppliedFilters.js";

export default function applyFilter(tab, appliedFilters, data) {
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

  let filteredData = data.filter((item) => filterData(item, appliedFilters));

  showAppliedFilters(appliedFilters, filteredData);
  createListings(filteredData);
}
