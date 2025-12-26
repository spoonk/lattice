import { getArticleSummary } from "@lattice/wikipedia";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) {
  const { articleId } = await params;
  const a = await getArticleSummary(articleId);
  const articleLen = articleId.length;

  return (
    <div>
      {[...Array(articleLen).keys()].map((i) => (
        <h1 key={i}>{a}</h1>
      ))}
    </div>
  );
}
