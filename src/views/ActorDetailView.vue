<template>
  <main class="vh-100">
    <div class="container bg-light p-5 mt-5 rounded h-75">
      <h1 class="my-4">Actor Name
        <small>@Actor</small>
      </h1>
      <div class="row">

        <div class="col-md-8 text-lg-center">
          <img class="img-fluid w-25" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp" alt="">
        </div>

        <div class="col-md-4">
          <h3 class="my-3">Description</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>

          <h3 class="my-3">Real name: <span class="text">Lorem ipsum</span></h3>

          <h3 class="my-3">Links</h3>
          <div class="mb-4 pb-2">
            <button type="button" class="btn btn-outline-dark rounded-circle">
              <i class="fab fa-facebook-f"></i>
            </button>
            <button type="button" class="btn btn-outline-dark rounded-circle m-1">
              <i class="fab fa-twitter"></i>
            </button>
            <button type="button" class="btn btn-outline-dark rounded-circle">
              <i class="fab fa-skype"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ActorDetailView.vue"
}
</script>

<style scoped>

</style>