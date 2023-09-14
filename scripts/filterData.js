export default function filterData(
  item,
  filters = { role: "", level: "", languages: [], tools: [] }
) {
  return (
    item?.role.includes(filters.role) &&
    item?.level.includes(filters.level) &&
    filters?.languages?.every((language) =>
      item?.languages.includes(language)
    ) &&
    filters?.tools?.every((tool) => item?.tools.includes(tool))
  );
}
