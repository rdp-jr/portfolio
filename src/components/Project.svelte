<script>
  import Tech from './Tech.svelte'
  
  export let name = "Project Name";
  export let shortDesc = "short description";
  export let longDesc = "long description";
  export let urlView;
  export let urlCode;
  export let picture;
  export let tech_list;
  let tech_preview = tech_list.slice(0,2);
  import Modal from "sv-bootstrap-modal";
  let isOpen = false;

  
  
</script>

<style>
 
h3, p {
  font-family: "Jost", sans-serif;
}

.title, .description {
  color: white;
  font-weight: 700;
  text-shadow: 2px 2px 2px black;
  width: 75%;
  transition: .3s;
}

.project-card {
  cursor: pointer;
}

.project-card:hover {
  color: white;
}

.project-card img {
  
  height: 100%;
  width: 100%;
  border-radius: 4px;
  transition: .3s;
 
}

.project-card :not(img) {
  position: absolute;
  top: 5%;
  z-index: 1;
  text-align: center;
  width: 90%;
}

.project-card .description {
  top: 40%;
  transition: .3s;
}

.project-card .tech {
  top: 75%;
  /* top: 10em; */
}

.project-card:hover img {
  filter: blur(2px) brightness(40%);
  
}

.description {
  opacity: 0;
}

.project-card:hover .description {
  opacity: 1;
}

/* .project-card:hover :not(img) {
  opacity: 1;
} */

</style>


<div class="project-card" on:click={()=> (isOpen = true)}>
  <img src="{picture}" alt="">
  <h3 class="title">{name}</h3>
  <p class="description">{shortDesc}</p>
  <p class="tech">
    {#each tech_preview as tech}
      <Tech name={tech}/>
    {/each}
  </p>
</div>


<Modal bind:open={isOpen} dialogClasses="modal-dialog-centered modal-lg">
    <div class="modal-header">
        <h5 class="modal-title">{name}</h5>
        <button type="button" class="close" on:click={() => (isOpen = false)}>
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
        
        <p class="mb-0 text-muted">Description</p>
        <p>{[shortDesc, longDesc].join(" ")}</p>

        <div class="text-center">
        <img class="img-fluid" src={picture} alt={`${name} - ${name}`} />
        </div>

        {#if urlCode}
        <p class="pt-3 mb-0 text-muted">Source Code</p>
          <a href={urlCode} target="_noblank">
          {urlCode}
        </a>
        {/if}

        {#if urlView}
        <p class="pt-3 mb-0 text-muted">Live Preview</p>
          <a href={urlView} target="_noblank">
          {urlView}
        </a>
        {/if}

        <p class="pt-3 mb-0 text-muted">Technologies</p>
        <p class="tech">
          {#each tech_list as tech}
            <Tech name={tech}/>
          {/each}
        </p>

      </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary">Close</button>
        
    </div>
</Modal>