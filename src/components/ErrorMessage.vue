<template>
  <div class="container">
    <div class="alert alert-danger my-5" role="alert">
      <h4 class="alert-heading">Error!</h4>
      <p>Sorry, error when fetch IMDB API!</p>
      <hr>
      <p class="mb-0">Please try again later.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorMessage",
  props: ['error']
}
</script>

<style scoped>

</style>