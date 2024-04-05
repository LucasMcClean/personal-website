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
    position: fixed;
    width: 100%;
    padding-block: 0.65rem;
    padding-inline: 2.1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    background: color-mix(in srgb, var(--clr-bg) 90%, transparent);
    font-size: 1.15rem;
    backdrop-filter: blur(2px);
  }

  #navbar::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 2%;
    width: 90%;
    height: 1px;
    background: var(--clr-acc);
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
