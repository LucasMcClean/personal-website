<script lang="ts">
  import { onMount } from "svelte";

  let file: File;

  let content;
  onMount(() => {
    content = document
      .getElementById("content")
      ?.addEventListener("change", function (this: HTMLInputElement, event) {
        file = this.files![0];
      });
  });

  function handleSubmit() {
    const fileReader = new FileReader();
    fileReader.readAsText(file);

    const existingForm: HTMLFormElement = document.getElementsByTagName("form")[0];
    const form = new FormData(existingForm);
    form.delete("content");
    form.append("content", fileReader.result as string);
  }
</script>

<form method="post" on:submit={handleSubmit}>
  <label for="title">Title: </label>
  <input id="title" name="title" required />
  <label for="description">Description: </label>
  <textarea id="description" name="description" required />
  <label for="tags">Tags: </label>
  <input id="tags" name="tags" required />
  <lable for="content">Content: </lable>
  <input id="content" type="file" name="content" accept=".md" required />
  <button type="submit">Upload Post</button>
</form>
