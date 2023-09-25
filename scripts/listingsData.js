let fetchedData = fetch("../data.json").then((res) => res.json());

fetchedData.then((data) => {
  window.localStorage.setItem("listingsData", JSON.stringify(data));
});

export let listingsData = JSON.parse(
  window.localStorage.getItem("listingsData")
);
