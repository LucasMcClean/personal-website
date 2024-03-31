<script lang="ts">
  import * as config from "$lib/config";  
</script>

<nav>
  <p>Lucas McClean</p>
  <ul role="list">
    <li><a href="{config.url}">Landing</a></li>
    <li><a href="{config.url}/blog">Blog</a></li>
  </ul>
</nav>

<style>
  nav {
    padding-block: .5rem;
    padding-inline: 1rem;
    display: flex;
    align-items: center;
    gap: .5rem;
    color: var(--clr-background);
    background: linear-gradient(160deg, var(--clr-primary), var(--clr-secondary));
    box-shadow: inset 0 -1px 1px var(--clr-background);
    font-size: 1.2rem;
  }

  p {
    margin-right: 1.5rem;
    padding-block: .1rem;
    padding-inline: .4rem;
    border: 1px solid var(--clr-background);
    font-size: 1.3rem;
    font-weight: bold;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: .9rem;
  }

  ul li a {
    color: var(--clr-background);
    text-decoration: none;
  }
</style>
