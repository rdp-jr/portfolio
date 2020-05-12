<script>
  export let name = "Project Name";
  export let description = "Project description";
  export let urlView;
  export let urlCode;
  export let picture;
</script>

<style>
  .project-card {
    /* background-image: url(picture); */
    /* min-height: 1000px; */
  }

  /* .project-card:hover {
    background-color: red;
  } */

  .img-fluid {
    max-width: 70%;
    max-height: 20vh;
    /* border-radius: 100%; */
    border-radius: 8%;
    transition: 0.25s;
    overflow: hidden;
  }

h3, p {
  font-family: "Jost", sans-serif;
		text-align: center;
}

.icon {
  font-size: 1.25em;
  color: grey;
}

.icon:hover {
  color: black;
}
</style>

<div class="project-card d-flex justify-content-center flex-column align-items-center">

  <h3>{name}</h3>
  <img class="img-fluid" src={picture} alt={`${name} - ${description}`} />
  <p>{description}</p>

<div class="d-flex justify-content-around w-25">

      <a href={urlCode} target="_noblank">
        <i class="fas fa-code icon" />
      </a>
      {#if urlView}
        <a href={urlView} target="_noblank">
        <i class="far fa-eye icon" />
      </a>
      {/if}
      
    </div>


</div>