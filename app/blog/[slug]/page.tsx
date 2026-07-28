import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getPostSlugs, formatPostDate } from "@/lib/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  try {
    const post = getPostBySlug(slug);
    return { title: post.title, description: post.summary };
  } catch {
    return { title: "Post not found" };
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  let post;

  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <main className="section pt-32">
      <div className="container max-w-3xl">
        <p className="eyebrow">{formatPostDate(post.date)}</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
          {post.title}
        </h1>

        <div className="post-content mt-10">
          <MDXRemote
            source={post.content}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>
      </div>
    </main>
  );
}
