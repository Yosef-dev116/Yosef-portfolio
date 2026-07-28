import Link from "next/link";
import { getAllPosts, formatPostDate } from "@/lib/posts";

export const metadata = { title: "Blog" };

export default function Page() {
  const posts = getAllPosts();

  return (
    <main className="section pt-32">
      <div className="container">
        <p className="eyebrow">Blog</p>
        <h1 className="mt-4 text-5xl font-semibold">Writing</h1>
        <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
          Notes on what I&apos;m building, learning, and debugging.
        </p>

        {posts.length === 0 ? (
          <p className="mt-12 text-[var(--muted)]">
            No posts yet — check back soon.
          </p>
        ) : (
          <div className="mt-12 grid gap-5">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="glass card p-8 transition hover:border-white/30">
                  <p className="eyebrow">{formatPostDate(post.date)}</p>
                  <h2 className="mt-3 text-3xl font-semibold">
                    {post.title}
                  </h2>
                  <p className="mt-4 text-[var(--muted)]">{post.summary}</p>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
