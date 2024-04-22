<script lang="ts">
  import PostCard from "$lib/components/PostCard.svelte";

  export let data;
</script>

<title>Posts | Lucas McClean</title>

<ul>
  {#each data.posts as post}
    <li><PostCard postInfo={post} postHeight="15rem" postWidth="20rem" /></li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    gap: 1rem;
  }
</style>
