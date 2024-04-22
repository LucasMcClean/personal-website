import { API_URL } from "$env/static/private";
import { formatDate } from "./utils";

export async function seedPosts() {
  for (let i = 1; i < 16; i++) {
    const post = {
      postSlug: `test-${i}`,
      title: `Test ${i}`,
      publishDate: formatDate(new Date()),
      description: `Test ${i} description`,
      tags: "one,two,three",
      content: `This is content for test ${i}`,
    };
    await fetch(API_URL + "/create-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  }
}
