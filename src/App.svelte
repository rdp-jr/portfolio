<script>
  import Particles from 'svelte-particles'
  import Project from "./components/Project.svelte";
  import Tech from "./components/Tech.svelte";

  function changeImage() {
    document.getElementById("splash-whale").src = "/static/img/whale-2.webp";
  }

  function changeImageBack() {
    document.getElementById("splash-whale").src = "/static/img/whale-1.webp";  
  }

  const project1 = {
    name: "GunitaHu",
    desc: "Undergraduate thesis in the Service Science and Software Engineering Laboratory. A WebVR application being built using the A-Frame framework. It's a platform for personalized remote therapy connecting caregivers and dementia patients, employing the Montessori Method for dementia care. Caregivers can personalize a virtual world by uploading their patient's favorite music, show, or family pictures. The patient and caretaker can interact in the virtual world together, all from the comfort of their own home.",
    urlView: "https://gunitahu.herokuapp.com/",
		urlCode: "https://github.com/rdp-jr/thesis-vr",
    picture: "/static/img/screen-gunitahu.webp",
    tech_list: ["javascript-plain", "nodejs-plain", "express-original", "handlebars-plain", "heroku-plain"  ]
  };
  
  const project2 = {
    name: "T3",
    desc: "Realtime Multiplayer Tic Tac Toe built with Socket.io to learn real-time communication between servers and clients. The backend is deployed on Heroku while the frontend is deployed on Surge. To play, you create a room which you'll give to your opponent. They'll join the room and the game will start automatically. The app keeps track of the scores. ",
    urlView: "https://t3.surge.sh/",
		urlCode: "https://github.com/rdp-jr/t3-client",
    picture: "/static/img/screen-t3.webp",
    tech_list: ["react-original", "express-original", "nodejs-plain", "javascript-plain", ]
  };

  const project3 = {
    name: "Superhero Wiki",
    desc: "Database of superheroes and villains from different universes. This was built to gain a deeper understanding in using external APIs and server-side rendering using Next.js",
    urlView: "https://superhero-wiki.now.sh/",
		urlCode: "https://github.com/rdp-jr/superhero-wiki",
    picture: "/static/img/screen-superhero.webp",
    tech_list: ["javascript-plain", ]
  };

  const project4 = {
    name: "Street Food Wars",
    desc: "A Turn-based fighting game with Street Food characters built in Java. You play as the Hero 'Kwek' versus the villain 'Isaw'. You have 5 moves: Basic Attack, Special Attack, Reload Ammo, Heal, and Ultimate Attack. This was built to learn Object Oriented Programming.",
    urlCode: "https://github.com/rdp-jr/street-food-wars",
    picture: "/static/img/screen-streetfoodwars.webp",
    tech_list: ["java-plain", ]
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

<div id="tsparticles"></div>

<Particles
  id="tsparticles"
  options="{particlesConfig}"
/>

<main class="pb-5 pt-4">
  <section>
  
    <h1 class="h-name"><span class="text-blue glow">Hello there</span>, I'm Roberto Principio Jr</h1>

      <h2 class="h-name">Call me <span class="text-red">OBEE</span>!</h2>

      <h2 class="font-weight-bold">I'm a <span class="text-red">SOFTWARE ENGINEER</span> based in the Philippines</h2>
    
    <h5 class="h-sub">I'm an undergraduate student currently taking BS Computer Science</h5>
    <h5 class="h-sub">in the <span class="text-red">University of the Philippines Diliman</span></h5>
    <h5 class="h-sub">I love learning new technologies, piano pieces, and Japanese</h5>
    <h5 class="h-sub">In my free time, I read books, watch anime, movies, series, and play games</h5>

    <div class="text-center mx-auto">
      <div>
        <a class="a-icon glow ml-4 mr-4" href="https://github.com/rdp-jr" target="_noblank">
          <i class="fab fa-github" />
        </a>

        <a
          class="a-icon glow ml-4 mr-4"
          href="https://www.linkedin.com/in/rdprincipiojr/"
          target="_noblank">
          <i class="fab fa-linkedin" />
        </a>

        <a class="a-icon glow ml-4 mr-4" href="/pdf/Principio_Resume.pdf" target="_noblank">
          <i class="far fa-file-pdf" />
        </a>
      </div>
      
      <div>
          <img 
          on:mouseover={changeImage} 
          on:mouseleave={changeImageBack} 
          id="splash-whale"  
          class="anim-float" 
          src="/static/img/whale-1.webp" alt="" />    

          <a 
          on:mouseover={changeImage} 
          on:mouseleave={changeImageBack} 
          href="#section-project" 
          id="a-check" 
          class="text-blue glow text-nowrap ml-5 font-weight-bold h3">
          CHECK OUT MY WORK! <i class="fas fa-angle-double-down anim-float-2"></i> </a>
        </div>  
    </div>
  </section>

 <div class="mb-5 pb-5"></div>
  <section id="section-project">
    <h2 class="mb-4 mt-1 h-name">
      <span class="glow text-blue">
        <i class="fas fa-rocket mr-2"></i>
        TECH</span> <span class="text-red">STACK
      </span>
    </h2>
    <div class="h5 text-center">
      <div class="row no-gutters">
        <div class="col-md-4 mb-4">
          <h3 class="text-white font-weight-bold"> <i class="fas fa-code mr-3"></i>Frontend</h3>
          <Tech name="html5-plain"/>
          <Tech name="css3-plain"/>
          <Tech name="javascript-plain"/>
          <Tech name="bootstrap-plain"/>
          <Tech name="jquery-plain"/>
          <Tech name="react-original"/>
        </div>
        <div class="col-md-4 mb-4">
          <h3 class="text-white font-weight-bold"><i class="fas fa-server mr-3"></i>Backend</h3>
          <Tech name="python-plain"/>
          <Tech name="php-plain"/>
          <Tech name="laravel-plain"/>
          <Tech name="nodejs-plain"/>
          <Tech name="express-original"/>
          <Tech name="flask-original"/>
          <Tech name="mysql-plain"/>
          <Tech name="sqlalchemy-plain"/>
        </div>

        <div class="col-md-4 mb-4">
          <h3 class="text-white font-weight-bold"><i class="fas fa-wrench mr-3"></i>Tools</h3>
          <Tech name="git-plain"/>
          <Tech name="heroku-plain"/>
          <Tech name="visualstudio-plain"/>
          <Tech name="npm-original-wordmark"/>
          <Tech name="composer-line"/>
        </div>
      </div>

    </div>
  </section>
 
  <section class="pt-2">
    <h2 class="mb-4 h-name text-red">PROJECTS</h2>
    <Project {...project1} />
    <Project {...project2} />
    <Project {...project3} />
    <Project {...project4} />
  </section>

</main>

<footer class="d-flex flex-column justify-content-center align-items-center mt-5">

  <h5 class="h-contact pt-3">
    Connect with me at
    <a href="mailto:rdprincipio.jr@gmail.com" class="a-mail"><u>rdprincipio.jr@gmail.com</u></a>
  </h5>
  <div>
    <a class="a-icon glow ml-4 mr-4" href="https://github.com/rdp-jr" target="_noblank">
      <i class="fab fa-github" />
    </a>

    <a
      class="a-icon glow ml-4 mr-4"
      href="https://www.linkedin.com/in/rdprincipiojr/"
      target="_noblank">
      <i class="fab fa-linkedin" />
      </a>

      <a class="a-icon glow ml-4 mr-4" href="/pdf/Principio_Resume.pdf" target="_noblank">
        <i class="far fa-file-pdf" />
      </a>
  </div>
  <small class="mt-5 mb-3 text-red font-weight-bold">Copyright &copy; 2021 Roberto Principio Jr</small>
</footer>