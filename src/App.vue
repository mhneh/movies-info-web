<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {useMovieStore} from "@/stores/movie";
import Controller from "@/components/Controller.vue";

const {fetchInTheaterMovies, fetchMostPopularMovies, fetchTopRatingMovies} = useMovieStore();
fetchInTheaterMovies();
fetchMostPopularMovies();
fetchTopRatingMovies();
</script>

<template>
  <header class="container bg-light mt-1 p-2 rounded">
    <Controller />
  </header>

  <nav class="container bg-light mt-2 p-2 rounded">
    <div class="row justify-content-between">
      <div class="col-7 d-flex align-items-center"><a href="/" class="text-dark stretched-link">Home</a></div>
      <div class="col-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-8">
              <input
                  type="search"
                  class="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  id="search-box"
              />
            </div>
            <div class="col-2">
              <button type="button" class="ml-1 btn btn-outline-success rounded" @click="search()">Search</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </nav>

  <RouterView changeS />

  <footer class="container bg-light p-2 rounded">
    <Controller />
  </footer>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  methods: {
    search: () => {
      const expression = document.getElementById('search-box').value;
      if (!expression) {
        return
      }
      const url = window.location.href;
      const type = url.includes("actors") ? "actors" : "movies";
      window.location.href = `/search/${type}/${expression}`;
    }
  }
}
</script>

<style scoped>
@media (min-width: 1024px) {

}
</style>
