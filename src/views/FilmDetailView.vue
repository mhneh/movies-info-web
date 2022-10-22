<template>
  <main class="vh-100">
    <div class="container bg-light p-5 mt-5 rounded h-75">
      <h1 class="my-4">Film Name
        <small>@Film</small>
      </h1>
      <div class="row">

        <div class="col-md-8 text-lg-center">
          <img class="img-fluid w-75" src="./../assets/image.jpg" alt="">
        </div>

        <div class="col-md-4">
          <h3 class="my-3">Description</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>

          <h3 class="my-3">Director: <span class="text">Lorem ipsum</span></h3>

          <h3 class="my-3">Published date: <span class="text">XX/XX/XXXX</span></h3>

          <h3 class="my-3">Actors</h3>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Dolor Sit Amet</li>
            <li>Consectetur</li>
            <li>Adipiscing Elit</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "DetailView"
}
</script>

<style scoped>

</style>