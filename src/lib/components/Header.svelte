

<nav>
  <p><b><a href="/">Lucas McClean</a></b></p>
  <ul role="list">
    <li><a href="/">Landing</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/resume">Resume</a></li>
  </ul>
  <div id="switch">
    <input id="toggle" type="checkbox" />
    <label for="toggle"></label>
  </div>
</nav>

<style>
  nav {
    height: fit-content;
    padding-block: .8rem;
    padding-inline: 3vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-size: 1.2rem;
  }

  p {
    place-self: start;
  }

  b {
    font-size: 1.35rem;
    font-weight: bold;
  }

  a {
    color: var(--clr-text);
    text-decoration: none;
  }

  ul {
    place-self: center;
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 1.5vw;
  }

  ul li a {
    color: var(--clr-text-dim);
  }

  #switch {
    align-self: center;
    display: flex;
    flex-direction: row-reverse;
  }

  #toggle {
    display: none;
  }

  #toggle:checked + label {
    background: var(--clr-secondary);
  }

  #toggle:checked + label::before {
    transform: translate(1.3rem);
  }

  label::before {
    content: "";
    position: absolute;
    top: .2rem;
    left: .2rem;
    height: .8rem;
    width: .8rem;
    border-radius: 50%;
    display: inline-block;
    background: var(--clr-text);
    transition: all ease-out .3s;
  }

  label {
    position: relative;
    cursor: pointer;
    width: 2.5rem;
    height: 1.2rem;
    border-radius: 20px;
    background: var(--clr-primary);
  }
</style>