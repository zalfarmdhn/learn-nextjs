interface Post {
  id: string;
  title: string;
  content: string;
}

// Incremental Static Regeneration (ISR)
// Explanation Below
// Docs : https://nextjs.org/docs/canary/app/building-your-application/data-fetching/incremental-static-regeneration

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const posts: Post[] = await fetch("https://api.vercel.app/blog").then((res) =>
    res.json()
  );
  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const post: Post = await fetch(
    `https://api.vercel.app/blog/${params.id}`
  ).then((res) => res.json());
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
