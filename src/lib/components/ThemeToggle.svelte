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
    console.log("clicked", curTheme, theme);
    setTheme(theme);
  }

  onMount(() => {
    let curTheme = document.documentElement.getAttribute("theme");
    const theme: Theme = curTheme === "dark" ? "dark" : "light";
    activeTheme = theme;
  });
</script>

<button id="theme-toggle" class={activeTheme} on:click={toggleTheme} aria-label="toggle theme"
></button>

<style>
  #theme-toggle {
    position: relative;
    height: 1.5rem;
    width: 3rem;
    border-radius: 20px;
    background: var(--clr-txt);
    transition: all 0.2s;
  }

  #theme-toggle::before {
    content: "";
    background: var(--clr-acc);
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    height: 1.1rem;
    width: 1.1rem;
    border-radius: 50%;
    transition: all ease-out 0.2s;
  }

  .light::before {
    transform: translate(1.3rem);
  }
</style>
