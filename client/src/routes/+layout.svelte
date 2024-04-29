<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div id="layout">
  <Navbar />

  <main>
    <slot />
  </main>

  <Footer />
</div>

<style>
  #layout {
    min-height: 100svh;
    display: grid;
    grid-template-rows: 1fr auto;
  }

  main {
    width: 100%;
    padding: 1.5rem;
    margin-top: 4rem;
    margin-bottom: 5rem;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--fs-p);
  }
</style>
