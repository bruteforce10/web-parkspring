import { getAll } from "./utils/getAll";

export default async function sitemap() {
  const slugData = await getAll("createdAt_ASC");

  const postEntries = slugData?.articels.map((post) => ({
    url: `https://www.parkspring.co.id/berita-media/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 1,
  }));

  return [
    {
      url: "https://www.parkspring.co.id",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.parkspring.co.id/berita-media",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...postEntries,
  ];
}
