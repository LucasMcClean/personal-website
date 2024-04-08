<script lang="ts">
  import PostCard from "$lib/components/PostCard.svelte";

  let examplePost: PostMetadata = {
    title: "Example Post",
    publishDate: new Date(),
    description:
      "This is a sample post that does not function but is for demonstration purposes only.",
    tags: ["example", "post", "sample"],
  };
</script>

<PostCard postInfo={examplePost} postHeight="15rem" postWidth="20rem" />
