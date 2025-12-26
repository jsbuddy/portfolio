import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode, {
  type Options as RehypePrettyCodeOptions,
} from "rehype-pretty-code";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Card, CardContent } from "@/components/ui/card";
import { getAllPosts, getPost, formatDate } from "@/lib/writing";

type Params = { slug: string };

const prettyCodeOptions: RehypePrettyCodeOptions = {
  theme: { light: "github-light", dark: "github-dark" },
  keepBackground: false,
  defaultLang: "plaintext",
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `/writing/${slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date || undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

const PostPage = async ({ params }: { params: Promise<Params> }) => {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="container">
      <article>
        <header className="mt-10 mb-10">
          <Card className="not-dark:bg-gray-50 p-0">
            <CardContent className="px-6 py-5">
              {post.draft && (
                <span className="mb-2 inline-block rounded-full border border-border bg-input/30 px-2 py-0.5 text-xs font-medium text-foreground/60">
                  Draft
                </span>
              )}
              <h1 className="text-3xl sm:text-4xl font-semibold leading-[1.15] tracking-tighter">
                {post.title}
              </h1>
              <div className="mt-2.5 flex items-center gap-2 text-sm text-foreground/50">
                {post.date && (
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                )}
                <span aria-hidden>·</span>
                <span>{post.readingTime} min read</span>
              </div>
              {post.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
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
        </header>
        <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:tracking-tight prose-headings:font-semibold prose-h2:mt-10 prose-h2:text-xl prose-a:font-medium prose-a:text-foreground prose-a:underline-offset-4 prose-blockquote:border-l-foreground/20 prose-blockquote:font-normal prose-blockquote:text-foreground/60 prose-blockquote:not-italic">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
              },
            }}
          />
        </div>
        <footer className="mt-12 border-t border-border pt-8">
          <Link
            href="/writing"
            className="inline-flex items-center gap-1.5 text-sm text-foreground/60 transition-colors hover:text-foreground"
          >
            <ArrowLeftIcon className="size-4" />
            Back to all writing
          </Link>
        </footer>
      </article>
    </div>
  );
};

export default PostPage;
