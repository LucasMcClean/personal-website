import { slugify } from "$lib/utils.js";
import { formatDate } from "$lib/utils.js";
import { API_URL } from "$env/static/private";

import { seedPosts } from "$lib/tests.js";

export const actions = {
  default: async (event) => {
    const data = await event.request.formData();

    // REMOVE ME ------------------------------------------------------------------
    if (data.get("title") === "testing") {
      await seedPosts();
      return;
    }

    const post = {
      postSlug: slugify(String(data.get("title"))),
      title: data.get("title"),
      publishDate: formatDate(new Date()),
      description: data.get("description"),
      tags: data.get("tags"),
      content: data.get("content"),
    };

    await fetch(API_URL + "/create-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  },
};
