import type { WishlistItem } from "./types";

export const load = async ({ fetch }) => {
  const response = await fetch("/api/notion");
  const data = await response.json();

  const items: WishlistItem[] = data.results.map((page) => ({
    name: page.properties.Name.title[0]?.plain_text || "",
    link: page.properties.Link?.url || "",
    price: page.properties.Price?.number,

    category: page.properties.Category?.select?.name || "Uncategorized",
    description: page.properties.Description?.rich_text[0]?.plain_text || "",
  }));

  return { items };
};
