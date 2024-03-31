<script lang="ts">
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";

  import "../app.css";
</script>

<div class="layout">
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</div>

<style>
  main {
    padding-block: .5rem;
    padding-inline: 1rem;
  }
</style>