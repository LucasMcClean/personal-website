export function slugify(title: string): string {
  return title.split(" ").join("-").toLowerCase();
}

export async function fetchPosts(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
