import { API_URL } from "$env/static/private";
import { fetchPosts } from "$lib/utils";

export async function load() {
  return fetchPosts(String(API_URL));
}
