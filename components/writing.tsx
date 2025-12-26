import Link from "next/link";
import { BiSolidChevronRight } from "react-icons/bi";
import { getAllPosts, formatDate } from "@/lib/writing";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";
import SectionTitle from "./section-title";
import { Button } from "./ui/button";

const Writing = () => {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <div className="container">
      <SectionTitle
        title="Writing"
        subtitle="Notes on building software, data, and teams."
      />
      <div className="grid grid-cols-1 gap-2">
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
              <CardContent className="px-5 py-5 sm:px-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                  <h3 className="text-base font-medium leading-snug group-hover:opacity-80 transition-opacity">
                    {post.title}
                  </h3>
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
                <p className="mt-1 text-sm leading-snug text-foreground/80 sm:text-base group-hover:opacity-80 transition-opacity">
                  {post.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <Link href="/writing">
        <Button variant="secondary" className="mt-8 px-4 cursor-pointer">
          View all
          <BiSolidChevronRight />
        </Button>
      </Link>
    </div>
  );
};

export default Writing;
