import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TimeAgo from "react-timeago";
import Layout from "../layout/index.tsx";
import { PostProps, usePost } from "../hooks/usePost.ts";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState<PostProps>();
  const { fetchSingle } = usePost();
  useEffect(() => {
    if (id) {
      fetchSingle(id).then((data) => {
        setPost(data);
      });
    }
  }, [id, post, fetchSingle]);
  return (
    <Layout title="">
      {post && (
        <article
          className="flex flex-col space-y-1 text-slate-700"
          key={post.id}
        >
          <h1 className="font-semibold">{post.title}</h1>
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <section className="flex items-center justify-between font-medium">
            <h2>{post.author.name}</h2>
            <TimeAgo date={post.updatedAt} />
          </section>
        </article>
      )}
    </Layout>
  );
}

export default Post;
