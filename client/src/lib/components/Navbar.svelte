<script lang="ts">
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";
  import { page } from "$app/stores";

  function getShortenedURL(url: string): string {
    const urlArr: string[] = url.split("/").slice(0, 2);
    if (urlArr[1].length > 11) {
      urlArr[1] = urlArr[1].slice(0, 11) + "...";
    }
    return urlArr.join("/");
  }
</script>

<nav id="navbar">
  <a id="navbar-title" href="/"
    >Lucas McClean <span id="current-page">{getShortenedURL($page.url.pathname)}</span></a
  >
  <ul id="navbar-links" role="list">
    <li><a href="/">Home</a></li>
    <li><a href="/posts">Posts</a></li>
    <li><a href="/resume">Resume</a></li>
  </ul>
  <div id="theme-toggle"><ThemeToggle /></div>
</nav>

<style>
  #navbar {
    container-type: inline-size;
    position: fixed;
    width: 98%;
    padding-block: 0.65rem;
    padding-inline: 8vw;
    border-bottom-right-radius: 100px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    background: color-mix(in srgb, var(--clr-nav) 97.5%, transparent);
    font-size: var(--fs-n);
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
    font-size: calc(var(--fs-n) + .1rem);
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

  @container (width < 850px) {
    #navbar-title span {
      display:none;
    }
  }

  @container (width < 750px) {
    #theme-toggle {
      display: none;
      grid-column: 4 / 4;
    }

    #navbar-links {
      grid-column: 2 / 4;
    }

    #navbar::after {
      animation: loadInScreenS 1s ease-out 1 forwards;
    }
  }

  @container (width < 560px) {
    #navbar-title {
      display: none;
    }

    #navbar-links {
      grid-column: 1 / 4;
      font-weight: bold;
    }
  }

  @keyframes loadIn {
    0% {
      width: 0vw;
    }
    100% {
      width: 92vw;
    }
  }

  @keyframes loadInScreenS {
    0% {
      width: 0vw;
    }
    100% {
      width: 85vw;
    }
  }
</style>
