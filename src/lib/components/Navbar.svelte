<script lang="ts">
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";
</script>

<nav id="navbar">
  <a id="navbar-title" href="/">Lucas McClean</a>
  <ul id="navbar-links" role="list">
    <li><a href="/">Landing</a></li>
    <li><a href="/posts">Posts</a></li>
    <li><a href="/resume">Resume</a></li>
  </ul>
  <div id="theme-toggle"><ThemeToggle /></div>
</nav>

<style>
  #navbar {
    padding-block: 0.9rem;
    padding-inline: 2.1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    font-size: 1.15rem;
  }

  #navbar a {
    color: var(--clr-txt);
    text-decoration: none;
  }

  #navbar-title {
    font-size: 1.25rem;
    font-weight: bold;
  }

  #navbar-links {
    justify-self: center;
    display: flex;
    gap: 2rem;
  }

  #theme-toggle {
    justify-self: end;
  }
</style>
