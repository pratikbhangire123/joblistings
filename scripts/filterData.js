export default function filterData(item, filter = null) {
  if (item?.role == filter) {
    return item;
  } else if (item?.level == filter) {
    return item;
  } else if (item?.languages.includes(filter)) {
    return item;
  } else if (item?.tools.includes(filter)) {
    return item;
  } else if (filter == null || filter == "") {
    return item;
  }
}
