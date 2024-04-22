export function slugify(title: string): string {
  return title.split(" ").join("-").toLowerCase();
}

export function formatDate(date: Date): string {
  return String(date.getFullYear()) + "-" + (date.getMonth() + 1) + "-" + date.getDay();
}

export async function fetchPosts(url: string) {
  const response = await fetch(url + "/posts");
  const posts = await response.json();

  return { posts };
}
