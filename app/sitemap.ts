import type { MetadataRoute } from "next";
import projects from "@/lib/projects";
import { getAllPosts } from "@/lib/writing";

const siteUrl = "https://judecod.es";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const posts = getAllPosts();

  const writingRoutes: MetadataRoute.Sitemap =
    posts.length === 0
      ? []
      : [
          {
            url: `${siteUrl}/writing`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.6,
          },
          ...posts.map((post) => ({
            url: `${siteUrl}/writing/${post.slug}`,
            lastModified: post.date ? new Date(post.date) : lastModified,
            changeFrequency: "yearly" as const,
            priority: 0.5,
          })),
        ];

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.id}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: `${siteUrl}/stack`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...writingRoutes,
  ];
}
