<script lang="ts">
  import { onMount } from "svelte";

  type Theme = "dark" | "light";

  let activeTheme: Theme;

  function setTheme(theme: Theme): void {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("theme", theme);
    activeTheme = theme;
  }

  function toggleTheme(): void {
    let curTheme = document.documentElement.getAttribute("theme");
    const theme: Theme = curTheme === "dark" ? "light" : "dark";
    setTheme(theme);
  }

  onMount(() => {
    let curTheme = document.documentElement.getAttribute("theme");
    const theme: Theme = curTheme === "dark" ? "dark" : "light";
    activeTheme = theme;
  });
</script>

<span id={activeTheme}></span>
<button id="theme-toggle" class={activeTheme} on:click={toggleTheme} aria-label="toggle theme"
></button>

<style>
  #theme-toggle {
    position: relative;
    height: 1rem;
    width: 2.6rem;
    border-radius: 20px;
    background: color-mix(in srgb, var(--clr-acc) 65%, var(--clr-txt));
    transition: all 0.2s;
  }

  #theme-toggle::before {
    content: "";
    background: var(--clr-acc);
    position: absolute;
    top: -0.15rem;
    left: 0rem;
    height: 1.3rem;
    width: 1.3rem;
    border-radius: 50%;
    transition: all ease-out 0.2s;
  }

  .light::before {
    transform: translate(1.3rem);
  }

  #light::before {
    color: color-mix(in srgb, var(--clr-txt) 70%, transparent);
    padding-right: 0.3rem;
    content: "dark";
  }

  #dark::before {
    color: color-mix(in srgb, var(--clr-txt) 70%, transparent);
    padding-right: 0.3rem;
    content: "light";
  }
</style>
