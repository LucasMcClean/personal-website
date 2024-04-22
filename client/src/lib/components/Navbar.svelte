<script lang="ts">
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";
  import { page } from "$app/stores";

  function getURL(url: string): string {
    const urlArr: string[] = url.split("/").slice(0, 2);
    if (urlArr[1].length > 10) {
      urlArr[1] = urlArr[1].slice(0, 11) + "...";
    }
    return urlArr.join("/");
  }
</script>

<nav id="navbar">
  <a id="navbar-title" href="/"
    >Lucas McClean <span id="current-page">{getURL($page.url.pathname)}</span></a
  >
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
    width: 98%;
    padding-block: 0.65rem;
    padding-inline: 8vw;
    border-bottom-right-radius: 100px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    background: color-mix(in srgb, var(--clr-nav) 97.5%, transparent);
    font-size: 1.15rem;
    backdrop-filter: blur(2px);
  }

  #navbar::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    height: 1px;
    background: var(--clr-acc);
    animation: loadIn 1s ease-out 1 forwards;
  }

  #navbar a {
    color: var(--clr-txt);
    text-decoration: none;
  }

  #navbar-title {
    font-size: 1.25rem;
    font-weight: bold;
  }

  #current-page {
    opacity: 67%;
  }

  #navbar-links {
    justify-self: center;
    display: flex;
    gap: 2rem;
  }

  #theme-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: end;
  }

  @keyframes loadIn {
    0% {
      width: 0vw;
    }
    100% {
      width: 92vw;
    }
  }
</style>
