<script lang="ts">
  export let data;
</script>

<article id="active-post">
  <h1 id="title">{data.post.title}</h1>
  <div id="weird-fix"></div>
  <div id="content">
    {@html data.content}
  </div>
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
  }
  #content {
    max-width: 850px;
  }
  #title {
    max-width: 850px;
    margin-bottom: 1.5rem;
    line-height: 1;
    font-size: calc(var(--fs-h1) + 2rem);
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
    font-size: clamp(2rem, 5vw + .5rem, 3rem);
  }
  :global(#active-post h2) {
    font-size: var(--fs-h2);
  }
  :global(#active-post h3) {
    font-size: var(--fs-h3);
  }
  :global(#active-post ul) {
    margin-left: 1.1rem;
  }
  :global(#active-post ol) {
    margin-left: 1.1rem;
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

  #weird-fix {
    width: 850px;
  }

  @media (max-width: 1000px) {
    #weird-fix {
      width: 85vw;
    }
  }
</style>

