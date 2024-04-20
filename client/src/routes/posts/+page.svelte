<script lang="ts">
  import PostCard from "$lib/components/PostCard.svelte";

  let examplePost: PostMetadata = {
    title: "Example Post",
    publishDate: new Date(),
    description:
      "This is a sample post that does not function but is for demonstration purposes only.",
    tags: ["example", "post", "sample"],
  };

  export let data;
</script>

<title>Posts | Lucas McClean</title>

{#each data.posts as post}
  <li><PostCard postInfo={post} postHeight="15rem" postWidth="20rem" /></li>
{/each}

<PostCard postInfo={examplePost} postHeight="15rem" postWidth="20rem" />
