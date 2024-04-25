<script lang="ts">
  import { slugify } from "$lib/utils";
  import { formatDate } from "$lib/utils";

  export let postInfo: PostMetadata;
  export let postHeight: string;
  export let postWidth: string;
</script>

<div id="post-card" style="height: {postHeight}; width: {postWidth};">
  <div id="card-info">
    <a id="title" href={"/posts/" + slugify(postInfo.title)}>{postInfo.title}</a>
    <p id="publish-date">
      Published on {formatDate(new Date(postInfo.publishDate))}
    </p>
    <ul id="tags" role="list">
      {#each postInfo.tags.split(",") as tag}
        <li><span>#</span>{tag}</li>
      {/each}
    </ul>
  </div>
  <p id="description">{postInfo.description}</p>
</div>

<style>
  #post-card {
    width: 100%;
    padding-left: 2.5rem;
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  #card-info {
    max-width: 40%;
  }
  #title {
    color: var(--clr-text);
    line-height: 1;
    text-decoration: none;
    font-size: 4rem;
    font-weight: bold;
  }
  #publish-date {
    margin-top: .2rem;
    margin-bottom: 1rem;
    color: color-mix(var(--clr-txt) 80%, transparent);
    font-style: italic;
  }
  #tags {
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: .5rem;
  }
  #tags li {
    padding-block: .15rem;
    padding-inline: .45rem;
    border-radius: 20px;
    background: color-mix(in srgb, var(--clr-acc) 10%, transparent);
  }
  #tags li span {
    color: var(--clr-acc);
    font-weight: bold;
  }
  #description {
    max-width: 40%;
  }
</style>
