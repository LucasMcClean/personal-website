<script lang="ts">
  import html from "$lib/images/html.png";
  import css from "$lib/images/css.png";
  import js from "$lib/images/js.png";
  import ts from "$lib/images/ts.png";
  import node from "$lib/images/node.png";
  import svelte from "$lib/images/svelte.png";
  import git from "$lib/images/git.png";
  import docker from "$lib/images/docker.png";
</script>

<title>Resume | Lucas McClean</title>

<h1>What I do</h1>
<p>
  I'm a web developer with {new Date().getFullYear() - 2022} years of experience and a deep passion for
  computer science.
</p>

<fieldset id="technologies" role="figure">
  <legend>Technologies</legend>
  <figure>
    <img class="tech-img" src={html} alt="HTML" />
    <figcaption>HTML5</figcaption>
  </figure>
  <figure>
    <img class="tech-img" src={css} alt="CSS" />
    <figcaption>CSS</figcaption>
  </figure>
  <figure>
    <img class="tech-img" src={js} alt="JavaScript" />
    <figcaption>JavaScript</figcaption>
  </figure>
  <figure>
    <img class="tech-img" src={ts} alt="TypeScript" />
    <figcaption>TypeScript</figcaption>
  </figure>
  <figure>
    <img class="tech-img" src={node} alt="NodeJS" />
    <figcaption>NodeJS</figcaption>
  </figure>
  <figure>
    <img class="tech-img" src={svelte} alt="Svelte and SvelteKit" />
    <figcaption>Svelte/Kit</figcaption>
  </figure>
  <figure>
    <img class="tech-img" src={git} alt="Git" />
    <figcaption>Git</figcaption>
  </figure>
  <figure>
    <img id="fix-ar" class="tech-img" src={docker} alt="Docker" />
    <figcaption>Docker</figcaption>
  </figure>
</fieldset>

<style>
  #technologies {
    width: fit-content;
    padding: 1.5rem;
    padding-top: 1.2rem;
    border: 3px solid var(--clr-txt);
    border-radius: 20px;
    display: grid;
    grid-template: 1fr 1fr / repeat(4, 1fr);
    gap: 1.5rem;
    justify-items: center;
    align-items: center;
  }

  #technologies legend {
    font-size: 2rem;
    font-weight: bold;
  }

  #technologies img {
    max-height: max(7vw, 5rem);
    max-width: max(7vw, 5rem);
    transition: all 0.2s;
  }

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  figcaption {
    margin-top: 5px;
    color: color-mix(in srgb, var(--clr-txt) 67%, transparent);
  }

  .tech-img:hover {
    transform: translate(-5px, -5px);
  }

  #fix-ar {
    padding-block: 13.5px;
  }

  button {
    height: 10vw;
    width: 10vw;
  }
</style>
