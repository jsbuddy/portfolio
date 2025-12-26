import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/writing";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Writing",
  description: `Notes on building software, data products, and AI agents, plus the occasional lesson from scaling teams and systems. By Jude Francis.`,
  alternates: { canonical: "/writing" },
};

const WritingPage = () => {
  const posts = getAllPosts();

  return (
    <div className="container">
      <header className="max-w-2xl pt-10">
        <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl">
          Writing
        </h1>
        <p className="mt-3 text-base text-foreground/60">
          Notes on building software, data products, and the occasional lesson
          from scaling teams and systems.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="mt-12 text-foreground/60">
          No posts yet. Check back soon.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-2">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group block"
            >
              <Card
                className={cn(
                  "not-dark:bg-gray-50 p-0 transition-colors",
                  index % 2 === 1 && "bg-transparent! ring-0",
                )}
              >
                <CardContent className="px-5 py-4 sm:px-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-base font-semibold leading-snug transition-colors group-hover:text-foreground/60">
                        {post.title}
                      </h2>
                      {post.draft && (
                        <span className="rounded-full border border-border bg-input/30 px-2 py-0.5 text-xs font-medium text-foreground/60">
                          Draft
                        </span>
                      )}
                    </div>
                    <div className="flex shrink-0 items-center gap-2 text-xs text-foreground/55 sm:text-sm">
                      {post.date && (
                        <time dateTime={post.date} className="italic">
                          {formatDate(post.date)}
                        </time>
                      )}
                      <span aria-hidden className="text-foreground/30">
                        ·
                      </span>
                      <span>{post.readingTime} min read</span>
                    </div>
                  </div>
                  <p className="mt-1 text-sm leading-snug text-foreground/60 sm:text-base">
                    {post.description}
                  </p>
                  {post.tags.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground/55"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default WritingPage;
