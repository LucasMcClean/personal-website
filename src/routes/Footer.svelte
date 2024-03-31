<script lang="ts">
  import * as config from "$lib/config";
</script>

<footer>
  <p>{config.title} &copy {new Date().getFullYear()}</p>
</footer>

<style>
  footer {
    margin-block: var(--footer-spacing);
    padding: 1rem;
    border-top: 3px solid var(--clr-accent);
  }

  p {
    color: var(--clr-text-dim);
  }
</style>