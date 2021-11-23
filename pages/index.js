import Head from "next/head";
import { PostCard, PostWidget, Categories } from "../components";

const posts = [
  {
    title: "React Testing",
    excerpt: "Learn React Testing in 3s",
  },
  { title: "React with tailwind", excerpt: "Never mind " },
];

export default function Home() {
  return (
    <main className="container mx-auto px-10 mb-8 bg-gray-50">
      <Head>
        <title>Bookstrap Community</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post, index) => (
              <>
                <PostCard key={index} post={post.title} />
                <PostCard key={index} post={post.excerpt} />
              </>
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
