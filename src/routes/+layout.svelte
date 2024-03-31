<script lang="ts">
  import Footer from "./footer.svelte";

  import "../app.css";
</script>

<div class="layout">
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