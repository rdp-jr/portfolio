<script>
  export let name = 'c';

  const color = {
    "python-plain": "blue",
    "javascript-plain": "#F7DF1E",
    "html5-plain": "orange",
    "nodejs-plain": "green",
    "express-original": "blue",
    "react-original": "#61DAFB",
    "django-original": "#0C4B33",
    "css3-plain": "#254BDD",
    "html5-plain": "#E44D26",
    "git-plain": "#EB4D28",
    "mysql-plain": "#447592",
    "java-plain": "#E51F24",
    "illustrator-plain": "#F67C19",
    "devicon-php-plain": "purple",
  };

</script>

<style>
.tech-pill {
  background-color: rgb(247, 247, 248);
  color: black;
  box-shadow: 2px 4px;
}
</style>


<span class="badge badge-pill tech-pill ml-1 mr-1">
<i class="devicon-{name} colored"/>
<span>{name.toUpperCase().split("-")[0]}</span>
</span>