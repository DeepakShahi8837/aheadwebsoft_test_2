import axios from "axios";
const BASE_URL = "https://staging.thunderscript.com/api/properties";

export const fetchProperties = async ({ query = "", propertyType = "", price = "" }) => {
  const params = new URLSearchParams();
  if (query) params.append("search", query);
  const url = `${BASE_URL}?${params.toString()}`;
  const res = await axios.get(url);

  let filtered = res.data || [];
  if (propertyType) filtered = filtered.filter(p => p.type.toLowerCase() === propertyType.toLowerCase());
  if (price) filtered = filtered.filter(p => p.price <= parseInt(price));

  return filtered;
};
