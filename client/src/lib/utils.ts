export function slugify(title: string): string {
  return title.split(" ").join("-").toLowerCase();
}
