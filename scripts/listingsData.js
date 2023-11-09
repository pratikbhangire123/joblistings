let listingsData;

export function getListingsData() {
  let fetchedData = fetch("../data.json").then((res) => res.json());

  fetchedData.then((data) => {
    window.localStorage.setItem("listingsData", JSON.stringify(data));
  });

  setTimeout(() => {
    listingsData = JSON.parse(window.localStorage.getItem("listingsData"));
  }, 2000);
}

export { listingsData };
