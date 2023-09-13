export default function filterData(
  item,
  filters = { role: "", level: "", languages: [], tools: [] }
) {
  if (
    item?.role == filters.role &&
    item?.level == filters.level &&
    filters.languages.every((language) => item?.languages.includes(language)) &&
    filters.tools.every((tool) => item?.tools.includes(tool))
  ) {
    return item;
  }
}
