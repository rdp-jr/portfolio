<script>
  import Landing from "./components/Landing.svelte";
  import Project from "./components/Project.svelte";

  const project1 = {
    name: "T3",
    description: "Multiplayer Tic Tac Toe build using Express and socket.io",
    urlView: "https://t3.surge.sh/",
		urlCode: "https://github.com/rdp-jr/t3-client",
		picture: "/static/img/screen-t3.png"
  };

  const project2 = {
    name: "Superhero Wiki",
    description:
      "Database of superheroes and villains from different universes from an external API",
    urlView: "https://superhero-wiki.now.sh/",
		urlCode: "https://github.com/rdp-jr/superhero-wiki",
		picture: "/static/img/screen-superhero.png"
  };
</script>

<style>
  h1,
  h2,
  h3,
  p,
  h5 {
		font-family: "Jost", sans-serif;
		text-align: center;
  }
  .s-about {
    height: 50vh;
  }

  .s-skills {
    height: 50vh;
		background-color: var(--redColor);
		color: white;
  }

  footer {
		background-color: var(--redColor);
		color: white;
  }

  .a-icon {
    color: white;
  }

  .a-icon:hover {
    color: black;
  }

  .h-contact {
    color: white;
  }
</style>

<header>
  <Landing />
</header>
<main>
  <section
    class="d-flex flex-column justify-content-center align-items-center s-about">
    <h2 class="">
      Hey, I'm
      <strike>Roberto</strike>
      Obee.
    </h2>
    <h3>
      I'm an undergraduate computer science student from the University of the
      Philippines Diliman.
    </h3>
    <h3>I love building cool stuff.</h3>
  </section>
  <section
    class="d-flex flex-column justify-content-center align-items-center s-skills">
    <h2>Skills</h2>

    <div class="row no-gutter">
      <div class="col">
        <h3>Languages</h3>
        <ul>
          <li>
            <i class="fab fa-html5" />
            HTML5
          </li>
          <li>
            <i class="fab fa-css3-alt" />
            CSS
          </li>
          <li>
            <i class="fab fa-js-square" />
            JavaScript
          </li>
          <li>
            <i class="fab fa-java" />
            Java
          </li>
          <li>
            <i class="fab fa-python" />
            Python
          </li>
        </ul>
      </div>
      <div class="col">
        <h3>Libraries & Frameworks</h3>
        <ul>
          <li>Flask</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Bootstrap 4</li>
          <li>Node.js</li>
          <li>Express</li>
        </ul>

      </div>

      <div class="col">
        <h3>Creative Suite</h3>
        <ul>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Adobe After Effects</li>
          <li>Adobe Premiere Pro</li>
        </ul>

      </div>

    </div>
  </section>
  <section
    class="d-flex flex-column justify-content-center align-items-center
    s-projects">
    <h2>Projects</h2>
    <div class="d-flex justify-content-center align-items-center">
      <Project {...project1} />
      <Project {...project2} />

    </div>
  </section>
</main>

<footer class="d-flex flex-column justify-content-center align-items-center">

  <h5 class="h-contact">
    Contact me at
    <a href="mailto:rdprincipio.jr@gmail.com">rdprincipio.jr@gmail.com</a>
  </h5>
  <div>
    <a
      class="a-icon"
      href="https://www.linkedin.com/in/rdprincipiojr/"
      target="_noblank">
      <i class="fab fa-linkedin" />
    </a>
    <a class="a-icon" href="https://github.com/rdp-jr" target="_noblank">
      <i class="fab fa-github" />
    </a>
    <a class="a-icon" href="/pdf/Principio_Resume.pdf">
      <i class="far fa-file-pdf" />
    </a>
  </div>

  <p>Copyright &copy; 2020 Roberto Principio Jr</p>

</footer>
