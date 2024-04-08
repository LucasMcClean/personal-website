<script lang="ts">
  export let data: Post;
</script>

<article>
  <h1 id="title">{data.title}</h1>
  <p id="post-info">Published on {data.publishDate}</p>
  <ul id="tags">
    {#each data.tags as tag}
      <li>{tag}</li>
    {/each}
  </ul>
  <svelte:component this={data.content} />
</article>
