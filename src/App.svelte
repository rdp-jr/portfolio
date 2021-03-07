<script>
  import Particles from 'svelte-particles'


  import Project from "./components/Project.svelte";
  import Tech from "./components/Tech.svelte";

  import {fade, scale, draw} from 'svelte/transition';
  import { onMount } from 'svelte';
  let visible = false;

  onMount(() => {
		visible = true;
	});


  function changeImage() {
    document.getElementById("splash-whale").src = "/static/img/whale-2.png";
  }

  function changeImageBack() {
    document.getElementById("splash-whale").src = "/static/img/whale-1.png";  
  }

  
  const project1 = {
    name: "T3",
    shortDesc: "Realtime Multiplayer Tic Tac Toe",
    longDesc: "built with Socket.io to learn real-time communication between servers and clients. The backend is deployed on Heroku while the frontend is deployed on Surge. To play, you create a room which you'll give to your opponent. They'll join the room and the game will start automatically. ",
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
    tech_list: ["java-plain", ]
  };

  const project4 = {
    name: "StudyUP REST API",
    shortDesc: "A simple REST API",
    longDesc: "built with Flask Framework, Flask RESTful, and ORM Flask-SQLAlchemy for StudyUP, a course requirement for Software Engineering",
    urlCode: "https://github.com/rdp-jr/studyup-rest-api",
    picture: "/static/img/screen-studyuprestapi.png",
    tech_list: ["python-plain",]
  };





let particlesConfig = {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 315
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.15,
        "opacity_min": 0.2,
        "sync": false
      }
    },
    "size": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "size_min": 0.5,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.25,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
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
    color: var(--blueColor);;
    font-size: 2em;
    transition: all .25s;
  }

  .a-icon:hover {
    color: var(--darkBlueColor);
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

   .h-sub {
    font-family: 'Jost', sans-serif;
    font-weight: 500;
    text-align: center;
    font-size: 1.5em;
    color: white;
  }

  

  .text-red {
    color: var(--redColor);
  }

#tsparticles canvas {
    display: block;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    opacity: 1;
    -webkit-transition: opacity .8s ease, -webkit-transform 1.4s ease;
    transition: opacity .8s ease, transform 1.4s ease
}

#tsparticles {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -10;
    top: 0;
    left: 0
}

.text-blue {
  color: #61FDF5;
}

.text-red {
    color: #EC3759;
  }



</style>

<div id="tsparticles"></div>

<Particles
  id="tsparticles"
  options="{particlesConfig}"
/>


<main class="pb-5 pt-4">
  <section style="height: 100vh" class="mb-5 pb-5">
  <h1 class="h-name text-blue glow">Hello there</h1>
    {#if visible}

      <h2 class="h-name"
      in:scale="{{delay: 2000 }}"
      >I'm Roberto Principio Jr.</h2>
      <h2 class="h-name"
      in:scale="{{delay: 3750 }}"
      >Call me <span class="text-red">Obee</span>!</h2>


      <h5 class="h-sub"
      in:fade="{{delay: 5500 }}"
      > 
    I'm a <span class="text-red">software engineer</span> based in the Philippines. </h5>
    <h5 class="h-sub"
    in:fade="{{delay: 5500 }}"
    >I'm an undergraduate student currently taking BS Computer Science
    </h5>
    <h5 class="h-sub"
    in:fade="{{delay: 5500 }}"
    >in the <span class="text-red">University of the Philippines Diliman</span>. </h5>
    <h5 class="h-sub"
    in:fade="{{delay: 5500 }}"
    >I love learning new technologies, piano pieces, and Japanese</h5>
    <h5 class="h-sub"
    in:fade="{{delay: 5500 }}"
    >In my free time, I read books, watch anime, movies, series, and play games</h5>

     
    <div class="text-center pb-5 mb-5" style="height:50%">
      <img in:fade="{{delay: 7500 }}"
      on:mouseover={changeImage} on:mouseleave={changeImageBack} id="splash-whale"  src="/static/img/whale-1.png" alt="" />    
      
      <a in:fade="{{delay: 7500 }}"
      on:mouseover={changeImage} on:mouseleave={changeImageBack} href="#section-project" id="a-check" class="text-blue h-sub glow text-nowrap">Check out my work!</a>
    </div>
    {/if}


     
    

    
      
  </section>
 

 <div class="pt-5"></div>
  <section id="section-project" class="pt-5 mt-5">
    <h2 class="mb-4 h-name"><span class="glow text-blue">Tech</span> <span class="text-red">Stack</span></h2>
    <div class="h5 text-center">
      <Tech name="html5-plain"/>
      <Tech name="css3-plain"/>
      <Tech name="javascript-plain"/>
      <Tech name="python-plain"/>
      <Tech name="php-plain"/>
      <Tech name="java-plain"/>
      
      <Tech name="bootstrap-plain"/>
      <Tech name="react-original"/>
      <Tech name="nodejs-plain"/>
      <Tech name="express-original"/>
      <Tech name="flask-original"/>
      
      <Tech name="sqlalchemy-plain"/>
      <Tech name="mysql-plain"/>
      <Tech name="git-plain"/>
      <Tech name="heroku-plain"/>

    </div>
  </section>
 
  <section class="pt-5 mt-5">
  <h2 class="mb-4 h-name">Projects</h2>
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
      class="a-icon glow"
      href="https://www.linkedin.com/in/rdprincipiojr/"
      target="_noblank">
      <i class="fab fa-linkedin" />
    </a>
    <a class="a-icon glow" href="https://github.com/rdp-jr" target="_noblank">
      <i class="fab fa-github" />
    </a>
    <a class="a-icon glow" href="/pdf/Principio_Resume.pdf">
      <i class="far fa-file-pdf" />
    </a>
  </div>

  <small class="mt-5 mb-3 text-red">Copyright &copy; 2021 Roberto Principio Jr</small>

</footer>

