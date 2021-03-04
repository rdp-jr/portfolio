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
      "speed": 0.15,
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
  <section style="height: 100vh">
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
    >I'm an undergraduate student currently taking computer science
    in the <span class="text-red">University of the Philippines Diliman</span>. </h5>
    <h5 class="h-sub"
    in:fade="{{delay: 5500 }}"
    >I love learning new technologies, piano pieces, and Japanese</h5>
    <h5 class="h-sub"
    in:fade="{{delay: 5500 }}"
    >In my free time, I read books, watch anime, movies, series, and play games</h5>

    
<!-- <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000"><defs><style>.cls-1,.cls-2,.cls-5,.cls-6{fill:#fff;}.cls-1,.cls-3,.cls-4,.cls-5,.cls-6{stroke:#000;stroke-miterlimit:10;}.cls-1{stroke-width:3px;}.cls-4,.cls-5{stroke-width:2px;}</style></defs><path transition:draw="{{duration: 10000}}" class="cls-1" d="M68.7,257.48l.16-1.62c.07-.7-.71-1.44-1-2,.37-.54,1.29-1.11,1.36-1.8V252l.61-1.06c.35-.61-.06-1.61-.05-2.26.56-.34,1.62-.48,2-1.09l.2-.34.67-.37c.51-.27.71-1.05,1-1.63A3.88,3.88,0,0,0,77,245l1.43-.78c.61-.33.78-1.4,1.13-2,.65,0,1.64.44,2.25.11l1.43-.78a3.8,3.8,0,0,0,1.71-5.21l-.12-.23a4,4,0,0,0-5.41-1.59l-1.43.78c-.48.26-.6,1.12-.79,1.76a4,4,0,0,0-3.52.12l-1.43.78c-.61.34-.63,1.68-1,2.23-.66,0-1.79-.72-2.41-.38l-1.13.62a4,4,0,0,0-2,1.71l-.81,1.41c-.35.61.34,1.76.33,2.42l-.12.05a3.87,3.87,0,0,0-1.54.45,1.14,1.14,0,0,0-.54.37,4,4,0,0,0-1.54,2.74l-.16,1.62c-.07.7,1,1.47,1.29,2.07-.38.54-1.61,1.07-1.68,1.77l-.16,1.62A3.91,3.91,0,0,0,64.31,261l.26,0A3.72,3.72,0,0,0,68.7,257.48Z"/><rect class="cls-2" x="68.5" y="264.5" width="51" height="45" rx="12" transform="translate(-207.48 304.83) rotate(-75.25)"/><path transition:draw="{{duration: 10000}}" class="cls-1" d="M127,17.5C62.3,17.5,9.9,68.87,9.9,131c0,47.39,30.48,88.5,73.63,105.5h86.84C213.52,219.5,244,178.39,244,131,244,68.87,191.59,17.5,127,17.5Z"/><path transition:draw="{{duration: 10000}}" class="cls-1" d="M180.23,211.29c-5,12.84-7.6,25.21-14.23,25.21H86.76c-6.63,0-17.61-20.79-22.09-63.17C62.62,154,98.5,63,98.5,63c6.67-12.33,6.73-14.5,40.17-19.43,40.66-6,65.18,13.56,65.18,13.56,21,16.12,15.3,17.43-.78,68.73Z"/><path transition:draw="{{duration: 10000}}" class="cls-1" d="M69.88,283.1l-1.06-1.23c-.46-.53-1.54-.46-2.15-.69-.14-.64.08-1.69-.38-2.22l0,0-.35-1.18c-.2-.67-1.21-1.06-1.68-1.51.14-.64.77-1.52.57-2.19l-.12-.38.2-.73c.14-.57-.28-1.25-.53-1.83a3.87,3.87,0,0,0,2.11-2.6l.42-1.57c.17-.68-.49-1.53-.65-2.17.46-.47,1.45-.89,1.63-1.56l.41-1.58a3.8,3.8,0,0,0-2.62-4.81l-.24-.07a4,4,0,0,0-4.87,2.84l-.42,1.58c-.14.52.41,1.2.74,1.78a3.92,3.92,0,0,0-2.32,2.64l-.42,1.58c-.18.68.79,1.61,1,2.24-.45.48-1.75.81-1.93,1.49l-.33,1.25a3.93,3.93,0,0,0-.14,2.65l.47,1.56c.2.67,1.51,1,2,1.42,0,0,0,.07,0,.11a3.93,3.93,0,0,0-.73,1.44,1.28,1.28,0,0,0-.11.64,4,4,0,0,0,1,3l1.06,1.23c.46.53,1.77.26,2.39.49.13.64-.32,1.9.14,2.43l1.06,1.23a3.91,3.91,0,0,0,5.57.34l.19-.17A3.72,3.72,0,0,0,69.88,283.1Z"/><ellipse class="cls-3" cx="79.67" cy="182.92" rx="3.33" ry="4.08"/><path transition:draw="{{duration: 10000}}" class="cls-4" d="M158.5,216c-6.17,12.5-13.21,10.5-19.83,10.5L114,225.17c-6.63,0-21.5-7.34-20.17-21l6-29.53c2-8.17,10.31-6.31,19.14-4.47L151.67,177c12.83.83,29.83-6.67,22.66,7.83Z"/><path transition:draw="{{duration: 10000}}" class="cls-1" d="M174.5,238.5a2.82,2.82,0,0,1-2.6,3H81.85a2.82,2.82,0,0,1-2.6-3h0a2.82,2.82,0,0,1,2.6-3H171.9a2.82,2.82,0,0,1,2.6,3Z"/><path transition:draw="{{duration: 10000}}" class="cls-5" d="M142.37,205.5c-7.67.25-17.59,1.53-12,7.13-3.65-4.88-9.3-9.78-20.12-10.13-7.33-.24-13.28,2.15-16.36,5.53l.44,2.18A24.64,24.64,0,0,0,97.2,216a28.37,28.37,0,0,0,2.93,3.15c3.32,2.48,5.79,4.83,9.84,5.41,4.87.69,15.54,1.32,18,1.4,5.9.32,7.2.75,15.19.75,4.69,0,6.79-1.08,10.12-3.56a30.42,30.42,0,0,0,2.93-3.15,25.48,25.48,0,0,0,2.87-5.75l.43-2.18C156.47,208.65,149.71,205.26,142.37,205.5Z"/><path transition:draw="{{duration: 10000}}" class="cls-1" d="M79.5,263.5c2.8-8.54,2.61-17.8,2.4-21.42a57.6,57.6,0,0,0-6.09-3.67c-25-13.14-54.66-35.61-58.08-25.43-2.51,7.46,11.4,19.57,29.47,36.23,10.8,10,22.07,17.11,30.52,20Z"/><path transition:draw="{{duration: 10000}}" class="cls-5" d="M82.79,271.47l-5.07-1.26,1.78-5.71c3.59-10.95,2.27-23.1,2.28-23l13.72,0s.83,6.48-4.17,17.15S82.79,271.47,82.79,271.47Z"/><path transition:draw="{{duration: 10000}}" class="cls-1" d="M174.49,263.5c-2.8-8.54-2.62-17.8-2.4-21.42a56.59,56.59,0,0,1,6.09-3.67c25-13.14,54.66-35.61,58.08-25.43,2.51,7.46-11.41,19.57-29.47,36.23-10.81,10-22.07,17.11-30.53,20Z"/><path transition:draw="{{duration: 10000}}" class="cls-5" d="M171.19,271.47l5-1.76-1.74-5.21c-3.6-10.95-2.27-23.1-2.28-23l-13.72,0s-.84,6.48,4.16,17.15S171.19,271.47,171.19,271.47Z"/><path transition:draw="{{duration: 10000}}" class="cls-1" d="M87.83,367.75,110.17,359c47.16-23.25,61-88.29,61-88.29-2.68-2.2-7.12-9.77-8.51-12.54-4.11-8.24-4.53-15.67-4.16-16.67h-63c.37,1-.56,6.12-2.54,12.83a46,46,0,0,1-5,10c-1.93,2.9-4.89,6.51-5,6.75l.58,43.19a21.74,21.74,0,0,1-3.75,11.47,15.2,15.2,0,0,1-3.52,3.87,11.89,11.89,0,0,1-3.77,1.07c-5,.08-8.09-2.09-14.84-9.09-4.56-4.73-14.5-25.88-38.62-24-6.17.48-1.44,4.63,2.5,7.5s3.12,16.27,3.12,22c0,13.58,20.33,20.69,27.09,21.64,4.09.57,4.19,1.14,5.11,1.87a3.13,3.13,0,0,1,0,4.36c-4,5-16.76,22.22-11,34.17,2.5,5.2,9,16.92,6.75,21.21s-4.76,10.09,1,7.85c22.55-8.79,22.33-32.15,24.38-38.39,0,0,2.2-7,5.92-9.46Z"/><circle class="cls-5" cx="101.58" cy="262.67" r="2.67"/><circle class="cls-5" cx="101.58" cy="262.67" r="5.75"/><path transition:draw="{{duration: 10000}}" class="cls-5" d="M75,305.63a8.29,8.29,0,0,1-5.71-10.25l7.29-26.61c-.91-.34-1.85-.73-2.82-1.16l-8,29.22A9.05,9.05,0,0,0,72.06,308l11.39,3.12,0-3.15Z"/><circle class="cls-6" cx="73.5" cy="298.58" r="2.67"/><path transition:draw="{{duration: 10000}}" class="cls-5" d="M44.14,341a2,2,0,0,1-2.56,1.19h0a2,2,0,0,1-1.19-2.56l7.92-21.6a2,2,0,0,1,2.56-1.19h0a2,2,0,0,1,1.19,2.57Z"/><path transition:draw="{{duration: 10000}}" class="cls-5" d="M36.79,335a1.79,1.79,0,0,1-2.37.65h0c-1-.38-1.66-1.28-1.39-2l5.65-15.4a1.79,1.79,0,0,1,2.37-.65h0c1,.38,1.65,1.29,1.38,2Z"/><path transition:draw="{{duration: 10000}}" class="cls-5" d="M72.8,385.73a2,2,0,0,1,1.41,2.46h0a2,2,0,0,1-2.46,1.41l-22.2-6a2,2,0,0,1-1.4-2.45h0a2,2,0,0,1,2.45-1.41Z"/><path transition:draw="{{duration: 10000}}" class="cls-5" d="M67.38,393.59a1.79,1.79,0,0,1,.85,2.3h0c-.29,1.07-1.14,1.77-1.9,1.56l-15.82-4.29c-.76-.2-1.15-1.24-.86-2.3h0c.29-1.07,1.14-1.77,1.9-1.56Z"/><path transition:draw="{{duration: 10000}}" class="cls-5" d="M86.56,368.6s-7.3-16.78-8.06-18.76c-7.08-18.59-6-19.13-6-19.13a7.78,7.78,0,0,0,2.44-.51,27.12,27.12,0,0,0,2.65-1.12s3.37,13.48,6.11,20c5.11,12.07,8.43,17,8.43,17Z"/><rect class="cls-5" x="125.18" y="253.25" width="22.92" height="37.15" rx="3.96" transform="translate(-149.43 375.37) rotate(-83.21)"/><circle class="cls-6" cx="124.77" cy="262.64" r="1.63"/><circle class="cls-6" cx="123.91" cy="269.86" r="1.63"/><circle class="cls-6" cx="122.98" cy="277.73" r="1.63"/><path transition:draw="{{duration: 10000}}" class="cls-6" d="M151.53,265.64c-.08.63-.54,1.13-1,1.07L131,264.39a1.08,1.08,0,0,1-.75-1.28h0c.07-.64.54-1.13,1-1.07l19.45,2.31a1.09,1.09,0,0,1,.76,1.29Z"/><path transition:draw="{{duration: 10000}}" class="cls-6" d="M150,283.41c-.86-.1-1.54-.43-1.51-.73l1.42-11.9c0-.31.77-.47,1.63-.37h0c.87.11,1.55.44,1.51.74l-1.42,11.9c0,.3-.77.47-1.63.36Z"/><path transition:draw="{{duration: 10000}}" class="cls-6" d="M145.67,282.9c-.86-.1-1.16-.26-1.14-.42l.7-6c0-.15.35-.23,1.21-.13h0c.86.1,1.17.26,1.15.41l-.71,6c0,.15-.35.23-1.21.13Z"/><path transition:draw="{{duration: 10000}}" class="cls-6" d="M141.35,282.39c-.86-.11-1.55-.31-1.53-.47l.71-5.95c0-.15.74-.19,1.6-.08h0c.86.1,1.55.31,1.53.46l-.7,5.95c0,.15-.75.19-1.61.09Z"/><path transition:draw="{{duration: 10000}}" class="cls-5" d="M83.46,311.86s13.37.06,18.62,1.14c28.09,5.79,31.17,29.25,31.17,29.25s-3.86,3.65-5.84,5.37c-1.55,1.35-2.65,2.16-2.65,2.16s-6.49-13.26-13.22-18.52C99,321.47,82.25,320.89,82.25,320.89a22.58,22.58,0,0,0,1-4.38C83.5,314.25,83.46,311.86,83.46,311.86Z"/></svg>    -->
  
    <div class="text-center" style="height:50%">
      <img in:fade="{{delay: 7000 }}" class="img-fluid" src="/static/img/whale.png" alt="" style="height:95%;width:auto;"/>    
      <a href="#section-project" in:fade="{{delay: 7000 }}"  id="a-check" class="text-blue h-sub glow">Check out some cool stuff I built!</a>
    </div>
    {/if}


     
    

    <!-- <a href="#section-project">Check out some cool stuff I built!</a> -->
      
  </section>
 

 
  <section id="section-project" class="pt-5 mt-5">
    <h2 class="mb-4 h-name"><span class="glow text-blue">Tech</span> <span class="text-red">Stack</span></h2>
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

