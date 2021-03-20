<script>
  import Tech from './Tech.svelte'
  export let name = "Project Name";
  export let desc = "long description";
  export let urlView;
  export let urlCode;
  export let picture;
  export let tech_list;  
</script>

<style>
  h3, p {
    font-family: "Jost", sans-serif;
  }

  img {
    
    height: 300px;
    width: auto;
    border-radius: 4px;
    transition: .3s;
    box-shadow: 6px 6px black;
  
  }

  .subtitle {
    margin-bottom: 0;
  }
</style>

<div class="row no-gutters mb-5">
  <div class="col text-center">
    <h3 class="text-white font-weight-bold h2">{name}</h3>
    
    <img src="{picture}" alt="">
  </div>
  <div class="col-md pl-5 pr-5">
    <p class="text-white font-weight-bold mt-2  subtitle"><i class="fas fa-pen"></i> DESCRIPTION</p>
    <p class="text-white text-justify">{desc}</p>

    {#if urlView}
      <p class="text-white font-weight-bold subtitle"><i class="far fa-window-maximize"></i> LIVE PREVIEW</p>
      <a href={urlView} target="_noblank" class="a-mail"><u>{urlView}</u></a>
    {/if}
    {#if urlCode}
    <p class="text-white font-weight-bold subtitle mt-1"><i class="fas fa-code"></i> SOURCE CODE</p>
      <a href={urlCode} target="_noblank" class="a-mail"><u>{urlCode}</u></a>
    {/if}
    <p class="tech mt-2">
      {#each tech_list as tech}
        <Tech name={tech}/>
      {/each}
    </p>
  </div>
</div>