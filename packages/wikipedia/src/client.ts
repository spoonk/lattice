import axios from "axios";
import type { WikipediaArticleSummary } from "./schema.js";

export async function getArticleSummary(title: string) {
  return title;
  // TODO: cors error on client
  let { data } = await axios.get<WikipediaArticleSummary>(
    `https://en.wikipedia.org/api/rest_v1/page/summary/Albert Einstein`,
    {
      headers: {
        "User-agent": "CustomWikipediaIntegration/1.0.0",
      },
    },
  );
  return data.extract;
}
