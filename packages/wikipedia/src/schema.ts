import { z } from "zod";

export const TitleSetSchema = z.object({
  description: z.string().optional(),
  canonical: z.string(),
  normalized: z.string(),
  display: z.string(),
});

export type TitleSet = z.infer<typeof TitleSetSchema>;

//https:en.wikipedia.org/api/rest_v1/#/Page%20content/get_page_summary__title_
export const WikipediaArticleSummarySchema = z.object({
  titles: z.array(TitleSetSchema),
  pageid: z.int().optional(),
  extract: z.string(),
  lang: z.string(),
  description: z.string().optional(),
});

export type WikipediaArticleSummary = z.infer<
  typeof WikipediaArticleSummarySchema
>;
