<script lang="ts">
  import { slugify } from "$lib/utils";

  export let postInfo: PostMetadata;
  export let postHeight: string;
  export let postWidth: string;
</script>

<div id="post-card" style="height: {postHeight}; width: {postWidth};">
  <a id="title" href={slugify(postInfo.title)}>{postInfo.title}</a>
  <p id="publish-date">
    Published on {postInfo.publishDate.toLocaleDateString()}
  </p>
  <p id="description">{postInfo.description}</p>
  <div id="tags" role="list">
    {postInfo.tags.join(", ")}
  </div>
</div>

<style>
  #post-card {
    padding-block: 0.8rem;
    padding-inline: 1.3rem;
    border-radius: 20px;
    background: var(--clr-acc);
  }
  #title {
    color: var(--clr-text);
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: bold;
  }
  #publish-date {
    color: color-mix(var(--clr-text) 80%, transparent);
    font-style: italic;
  }
  #tags {
  }
</style>
