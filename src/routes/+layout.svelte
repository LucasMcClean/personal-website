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
    margin-top: 4rem;
    margin-bottom: 5rem;
    justify-self: center;
  }
</style>
