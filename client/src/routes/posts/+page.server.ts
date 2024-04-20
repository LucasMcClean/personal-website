import { fetchPosts } from "$lib/utils";
import { API_URL } from "$env/static/private";

export async function load() {
  const url = String(API_URL) + "posts";
  const posts = await fetchPosts(url);

  console.log(posts);
  return { posts };
}
