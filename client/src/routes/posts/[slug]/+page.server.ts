import { API_URL } from "$env/static/private";
import { fetchPosts } from "$lib/utils";

import { error } from "@sveltejs/kit";
import { compile } from "mdsvex";

export async function load({ params }) {
  const data = await fetchPosts(String(API_URL), params.slug);
  if (data.posts.content === undefined) {
    error(404, {
      message: "Not Found",
    });
  }
  const compiledPost = await compile(data.posts.content);
  console.log(compiledPost);
  return { post: data.posts, content: compiledPost?.code };
}
