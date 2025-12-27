"use client";

import { Button } from "@/components/ui/button";
import { getArticleSummary } from "@lattice/wikipedia";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) {
  const { articleId } = await params;
  const a = await getArticleSummary(articleId);

  return (
    <div>
      <Button>click me!</Button>
      <h1>{a}</h1>
    </div>
  );
}
