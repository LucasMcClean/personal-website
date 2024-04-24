<script lang="ts">
  import { page } from '$app/stores';
  let status = $page.status;
  let error = $page!.error!.message;
</script>

<div id="error">
  <h1>{status}: {error}</h1>
  {#if status === 500}
    <p>Unfortunately the server is down. Please check back later.</p>
  {:else if status === 404}
    <p>It looks like that page couldn't be found.</p>
  {/if}

</div>

<style>
  #error {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    font-size: 4rem;
    font-weight: bold;
  }
</style>