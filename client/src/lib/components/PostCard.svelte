<script lang="ts">
  import { slugify } from "$lib/utils";
  import { formatDate } from "$lib/utils";

  export let postInfo: PostMetadata;
  export let postHeight: string;
  export let postWidth: string;
</script>

<div id="post-card" style="height: {postHeight}; width: {postWidth};">
  <a id="title" href={slugify(postInfo.title)}>{postInfo.title}</a>
  <div id="card-content">
    <p id="publish-date">
      Published on {formatDate(new Date(postInfo.publishDate))}
    </p>
    <p id="description">{postInfo.description}</p>
    <div id="tags" role="list">
      {postInfo.tags.split(",").map((a) => "#"+a).join(", ")}
    </div>
  </div>
</div>

<style>
  #post-card {
    width: 100%;
    padding-left: 2.5rem;
    display: grid;
  }
  #title {
    color: var(--clr-text);
    text-decoration: none;
    font-size: 4rem;
    font-weight: bold;
  }
  #publish-date {
    color: color-mix(var(--clr-text) 80%, transparent);
    font-style: italic;
  }
</style>
