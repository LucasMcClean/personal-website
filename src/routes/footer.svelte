<script lang="ts">
  import * as config from "$lib/config";
</script>

<footer>
  <p>{config.title} &copy {new Date().getFullYear()}</p>
</footer>

<style>
  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: var(--footer-spacing);
    background: color-mix(in srgb, var(--clr-background) 90%, var(--clr-primary));
  }

  p {
    color: var(--clr-text-dim);
  }
</style>