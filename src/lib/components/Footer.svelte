<script lang="ts">
  import * as config from "$lib/config";
</script>

<footer>
  <p>{config.title} &copy {new Date().getFullYear()}</p>
</footer>

<style>
  footer {
    margin-top: 3.5rem;
    margin-inline: 3vw;
    padding-block:1.5rem;
    padding-inline: 1.5vw;
    border-top: 3px solid var(--clr-accent);
  }

  p {
    color: var(--clr-text-dim);
  }
</style>