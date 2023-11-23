import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";
import Layout from "../layout/index.tsx";
import { PostProps, usePost } from "../hooks/usePost.ts";

function Home() {
  const [posts, setPosts] = useState<PostProps[]>();
  const { fetchAll } = usePost();
  useEffect(() => {
    if (!posts) {
      fetchAll().then((data) => {
        setPosts(data);
      });
    }
  }, [posts, fetchAll]);
  return (
    <Layout>
      <section className="flex flex-col space-y-4">
        {posts?.map((post) => (
          <article
            className="flex flex-col space-y-1 text-slate-700"
            key={post.id}
          >
            <Link to={`/post/${post.id}`}>
              <h1 className="font-semibold">{post.title}</h1>
            </Link>
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <section className="flex items-center justify-between font-medium">
              <h2>{post.author.name}</h2>
              <TimeAgo date={post.updatedAt} />
            </section>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export default Home;
