import { Client } from "@notionhq/client";
import { NOTION_API_KEY, NOTION_DATABASE_ID } from "$lib/env";
import { json } from "@sveltejs/kit";

export async function GET() {
  const notion = new Client({
    auth: NOTION_API_KEY,
  });

  const response = await notion.databases.query({
    database_id: NOTION_DATABASE_ID,
    sorts: [
      {
        property: "Category",
        direction: "ascending",
      },
    ],
  });

  return json(response);
}
