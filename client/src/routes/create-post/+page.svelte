<script lang="ts">
  import { onMount } from "svelte";

  let file: File;

  let content;
  onMount(() => {
    content = document
      .getElementById("content")
      ?.addEventListener("change", function (this: HTMLInputElement, event) {
        file = this.files![0];
        console.log(file);
      });
  });

  async function handleSubmit() {
    const fileReader = new FileReader();
    fileReader.readAsText(file);

    fileReader.onload = async () => {
      console.log("Getting there");
      const existingForm: HTMLFormElement = document.getElementsByTagName("form")[0];
      const formData = new FormData(existingForm);
      formData.delete("content");
      formData.append("content", fileReader.result as string);

      try {
        // REMOVE ME ------------------------------------------------------------------
        const response = await fetch("http://localhost:5173/create-post", {
          method: "POST",
          body: formData,
        });
        if (!response.ok) {
          alert("Failed to submit form. Try again.");
        } else {
          document.getElementsByTagName("form")[0].reset();
        }
      } catch (e) {
        console.error(e);
      }
    }
  }
</script>

<form method="post" on:submit|preventDefault={handleSubmit}>
  <label for="title">Title: </label>
  <input id="title" name="title" required />
  <label for="tags">Tags: </label>
  <input id="tags" name="tags" required />
  <label for="description">Description: </label>
  <textarea id="description" name="description" required />
  <label for="content">Content: </label>
  <input id="content" type="file" name="content" accept=".md" required />
  <button type="submit">Upload Post</button>
</form>

<style>
  form {
    padding-block: 1.8rem;
    padding-top: 1.5rem;
    padding-inline: 2.5rem;
    border : 2px solid color-mix(in srgb, var(--clr-acc) 80%, var(--clr-txt));
    border-radius: 20px;
    display: grid;
    grid-template: repeat(5, 1fr) / repeat(2, 1fr);
    gap: .1rem;
    align-items: center;
  }

  label {
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: bold;
  }

  input {
    height: 1.8rem;
    padding: .1rem;
  }

  label[for="description"] {
    grid-column: 1 / 3;
  }

  #description {
    grid-column: 1 / 3;
  }

  textarea {
    resize: none;
    padding: .1rem;
  }

  button {
    cursor: pointer;
    grid-column: 1 / 3;
  }
</style>
