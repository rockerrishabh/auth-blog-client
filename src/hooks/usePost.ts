import {
  type Output,
  boolean,
  minLength,
  object,
  string,
  parse,
  array,
} from "valibot";

type PostResponse = {
  success: boolean;
  message: PostProps | PostProps[];
};

const PostSchema = object({
  id: string("Your id must be a string.", [
    minLength(5, "id must be minimum 5 characters"),
  ]),
  title: string("Your title must be a string.", [
    minLength(5, "title must be minimum 5 characters"),
  ]),
  content: string("Your content must be a string.", [
    minLength(5, "content must be minimum 5 characters"),
  ]),
  published: boolean("Your published must be a boolean."),
  createdAt: string("Your content must be a string.", [
    minLength(5, "content must be minimum 5 characters"),
  ]),
  updatedAt: string("Your content must be a string.", [
    minLength(5, "content must be minimum 5 characters"),
  ]),
  autherId: string("Your authorId must be a string.", [
    minLength(5, "authorId must be minimum 5 characters"),
  ]),
  author: object({
    name: string("Your name must be a string.", [
      minLength(5, "name must be minimum 5 characters"),
    ]),
  }),
});

export type PostProps = Output<typeof PostSchema>;

export const usePost = () => {
  const fetchAll = async () => {
    const res = await fetch("http://localhost:5000/api/post/fetchAll", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const data = (await res.json()) as PostResponse;
      if (data.success) {
        const posts = data.message as PostProps[];
        const parsedData = parse(array(PostSchema), posts);
        return parsedData;
      }
    }
  };
  const fetchSingle = async (id: string) => {
    const res = await fetch(`http://localhost:5000/api/post/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const data = (await res.json()) as PostResponse;

      if (data.success) {
        const post = data.message as PostProps;
        const parsedData = parse(PostSchema, post);
        return parsedData;
      }
    }
  };
  return { fetchAll, fetchSingle };
};
