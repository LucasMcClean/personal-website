import { error } from "@sveltejs/kit";

export async function load({ params }) {
  try {
    const post = await import(`./${params.slug}.md`);
    const postData: Post = post.metadata;
    postData.content = post.default;

    return {
      postData,
    };
  } catch (err) {
    error(404, `Couldn't find ${params.slug}`);
  }
}
