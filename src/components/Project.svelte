<script>
  export let name = "Project Name";
  export let description = "Project description";
  export let urlView = "https://github.com/rdp-jr";
  export let urlCode = "https://github.com/rdp-jr";
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
    max-width: 80%;
    /* border-radius: 100%; */
    border-radius: 8%;
    transition: 0.25s;
    overflow: hidden;
  }

h3, p {
  font-family: "Jost", sans-serif;
		text-align: center;
}
</style>

<div class="project-card d-flex justify-content-center flex-column align-items-center">

  <h3>{name}</h3>
  <img class="img-fluid" src={picture} alt={`${name} - ${description}`} />
  <p>{description}</p>

<div class="d-flex justify-content-center">
      <a href={urlCode} target="_noblank">
        <i class="fas fa-code" />
      </a>
      <a href={urlView} target="_noblank">
        <i class="far fa-eye" />
      </a>
    </div>


</div>

<!-- <div class="card">
  <div class="card-title d-flex justify-content-center"><h1>{name}</h1></div>
  <div class="card-body">
    {#if picture}
      <img
        class="img-fluid"
        src={picture}
        alt={`${name} - ${description}`} />
    {/if}
    
    <div class="d-flex justify-content-around">
      <a href={urlCode} target="_noblank">
        <i class="fas fa-code" />
      </a>
      <a href={urlView} target="_noblank">
        <i class="far fa-eye" />
      </a>
    </div>
  </div>
</div> -->
