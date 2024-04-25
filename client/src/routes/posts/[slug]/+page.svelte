<script lang="ts">
  export let data;
</script>

<title>{data.post.title}</title>

<h1 id="title">{data.post.title}</h1>
<article id="active-post">
  {@html data.content}
  <ul>
    <li>Test</li>
  </ul>
</article>

<style>
  article {
    width: 850px;
  }
  #title {
    max-width: 850px;
    margin-bottom: 1.5rem;
    line-height: 1;
    font-size: 5rem;
    font-weight: bold;
  }
  :global(#active-post 
  h1,
  h2,
  h3,
  h4,
  h5,
  h6) {
    font-weight: bold;
  }
  :global(#active-post h1) {
    font-size: 3rem;
  }
  :global(#active-post h2) {
    font-size: 2rem;
  }
  :global(#active-post h3) {
    font-size: 1.5rem;
  }
  :global(#active-post ul) {
    list-style: inside;
  }
  :global(#active-post blockquote) {
    margin-left: .7rem;
    padding-block: .3rem;
    padding-inline: .5rem;
    border-left: 3px solid var(--clr-acc);
    background: color-mix(in srgb, var(--clr-acc) 10%, transparent);
  }
  :global(#active-post em) {
    font-style: italic;
  }
  :global(#active-post strong) {
    font-weight: bold;
  }
</style>

