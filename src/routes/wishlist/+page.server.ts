import { Client } from "@notionhq/client";

import { NOTION_API_KEY, NOTION_DATABASE_ID } from "$lib/env";
import type { WishlistItem } from "./types";

const notion = new Client({
  auth: NOTION_API_KEY,
});

export async function load() {
  console.log("Starting Notion API call");

  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      sorts: [
        {
          property: "Category",
          direction: "ascending",
        },
      ],
    });

    console.log("API call successful");
    console.log("Number of items:", response.results.length);

    const items: WishlistItem[] = response.results.map((page) => {
      const props = page.properties;
      return {
        name: props.Name.title[0]?.plain_text || "",
        link: props.Link?.url || "",
        price: props.Price?.number,
        category: props.Category?.select?.name || "Uncategorized",
        description: props.Description?.rich_text[0]?.plain_text || "",
      };
    });

    return { items };
  } catch (error) {
    console.error("Notion API Error:", error);
    return { items: [] };
  }
}
