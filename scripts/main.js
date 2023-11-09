import { getListingsData, listingsData } from "./listingsData.js";
import createListings from "./createListings.js";
import applyFilter from "./applyFilter.js";

let appliedFilters = {
  role: "",
  level: "",
  languages: [],
  tools: [],
};

export default function main() {
  let listingCards = document.querySelectorAll("#listingCard");

  let appliedFiltersContainer = document.getElementById("appliedFilters");

  let filterTabs = document.getElementsByClassName("filterTab");

  [...listingCards].forEach((listing) => {
    listing.innerHTML.includes("FEATURED")
      ? (listing.style.borderLeft = "5px solid hsl(180, 29%, 50%)")
      : "";
  });

  appliedFilters.role.length == 0 &&
  appliedFilters.level.length == 0 &&
  appliedFilters.languages.length == 0 &&
  appliedFilters.tools.length == 0
    ? (appliedFiltersContainer.style.visibility = "hidden")
    : (appliedFiltersContainer.style.visibility = "visible");

  [...filterTabs].forEach((tab) => {
    appliedFilters.role.includes(tab.textContent) ||
    appliedFilters.level.includes(tab.textContent) ||
    appliedFilters.languages.includes(tab.textContent) ||
    appliedFilters.tools.includes(tab.textContent)
      ? ((tab.style.backgroundColor = "hsl(180, 29%, 50%)"),
        (tab.style.color = "#fff"))
      : "";

    tab.addEventListener("click", () => {
      applyFilter(tab, appliedFilters);
    });
  });
}

getListingsData();
setTimeout(() => {
  createListings(listingsData);
  main();
}, 3000);
