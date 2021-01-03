<script>
  import Project from "./components/Project.svelte";
  import Tech from "./components/Tech.svelte";

  const project1 = {
    name: "T3",
    shortDesc: "Realtime Multiplayer Tic Tac Toe",
    longDesc: "built with Socket.IO to learn real-time communication between servers and clients",
    urlView: "https://t3.surge.sh/",
		urlCode: "https://github.com/rdp-jr/t3-client",
    picture: "/static/img/screen-t3.png",
    tech_list: ["react-original", "express-original", "nodejs-plain", "javascript-plain", ]
  };

  const project2 = {
    name: "Superhero Wiki",
    shortDesc: "Database of superheroes and villains",
    longDesc: "from different universes to understand using external APIs and server-side rendering using Next.js",
    urlView: "https://superhero-wiki.now.sh/",
		urlCode: "https://github.com/rdp-jr/superhero-wiki",
    picture: "/static/img/screen-superhero.png",
    tech_list: ["javascript-plain", ]
  };

  const project3 = {
    name: "Street Food Wars",
    shortDesc: "A Turn-based fighting game with Street Food characters",
    longDesc: "built in Java as a course requirement for Object Oriented Programming",
    urlCode: "https://github.com/rdp-jr/street-food-wars",
    picture: "/static/img/screen-streetfoodwars.png",
    tech_list: ["java-plain", "illustrator-plain"]
  };

  const project4 = {
    name: "StudyUP REST API",
    shortDesc: "A simple REST API",
    longDesc: "built with Flask Framework, Flask RESTful, and ORM Flask-SQLAlchemy for StudyUP, a course requirement for Software Engineering",
    urlCode: "https://github.com/rdp-jr/studyup-rest-api",
    picture: "/static/img/screen-studyuprestapi.png",
    tech_list: ["python-plain",]
  };

</script>

<style>
  h2,
  h5 {
		font-family: "Jost", sans-serif;
    text-align: center;
    color: white;
  }
  
  
  footer {
		color: white;
  }

  .a-icon {
    color: white;
    font-size: 2em;
    transition: all .2s;
  }

  .a-icon:hover {
    color: var(--redColor);
  }

  .h-contact {
    color: white;
  }

  .projectGrid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    /* grid-template-columns:repeat(3, 1fr); */
    display: grid;
    align-items: center;
    grid-row-gap: 1rem;
  }

  .a-mail {
    color: var(--redColor);
    transition: all .2s;
  }

  .a-mail:hover {
    text-decoration: none;
    color: white;
    
  }

 



  .h-name {
    font-family: 'Jost', sans-serif;
    font-weight: 700;
    text-align: center;
    font-size: 2.5em;
    color: white;
  }

  

  .text-red {
    color: var(--redColor);
  }

  

</style>


<main class="pb-5">
  <section class="pt-4 mb-4">
      <h1 class="h-name">ROBERTO PRINCIPIO JR.</h1>
  </section>
 
  <section>
    <h5> 
    I'm a <span class="text-red">software engineer</span> based in the Philippines. </h5>
    <h5>I'm an undergraduate student currently taking computer science
    in the University of the Philippines Diliman. </h5>
  </section>
 
  <section class="pt-5 mt-5">
    <h2 class="mb-4">Tech <span class="text-red">Stack</span></h2>
    <div class="h5 text-center">
      <Tech name="python-plain"/>
      <!-- <Tech name="django-plain"/> -->
      <Tech name="html5-plain"/>
      <Tech name="css3-plain"/>
      <Tech name="javascript-plain"/>
      <Tech name="nodejs-plain"/>
      <Tech name="express-original"/>
      <Tech name="git-plain"/>
      <Tech name="mysql-plain"/>
    </div>
  </section>
 
  <section class="pt-5 mt-5">
  <h2 class="mb-4">Projects</h2>
  </section>

 
  
  <div class="w-100 projectGrid">
    <div class="col">
      <Project {...project1} />
    </div>
    <div class="col">
      <Project {...project2} />
    </div>
    <div class="col">
      <Project {...project3} />
    </div>

    <div class="col">
      <Project {...project4} />
    </div>

    
  </div>

  

</main>

<footer class="d-flex flex-column justify-content-center align-items-center mt-5">

  <h5 class="h-contact pt-3">
    Connect with me at
    <a href="mailto:rdprincipio.jr@gmail.com" class="a-mail">rdprincipio.jr@gmail.com</a>
  </h5>
  <div class="w-25 d-flex justify-content-around">
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

  <small class="mt-5 mb-3">Copyright &copy; 2021 Roberto Principio Jr</small>

</footer>
