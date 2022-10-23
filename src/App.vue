<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {useMovieStore} from "@/stores/movie";
import Config from "@/config";

const {fetchInTheaterMovies, fetchMostPopularMovies, fetchTopRatingMovies} = useMovieStore();
fetchInTheaterMovies();
fetchMostPopularMovies();
fetchTopRatingMovies();
</script>

<template>
  <div id="main" :class="{'text-dark': theme == 'light', 'bg-secondary text-light': theme == 'dark'}" >
    <header class="container mt-1 p-2 rounded" :class="{'bg-light text-dark': theme == 'light', 'bg-dark text-light': theme == 'dark'}">
      <div class="row justify-content-between">
        <div class="col-2 d-flex align-items-center">20120075</div>
        <div class="col-6 text-center"><h1>Movies Info</h1></div>
        <div class="col-2">
          <div class="container">
            <div class="row">
              <div class="col-12 d-flex justify-content-end"><p>{{Config.apiKey}}</p></div>
              <div class="col-12 d-flex justify-content-end">
                <div class="form-check form-switch">
                  <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      @change="toggleTheme()"
                  >
                  <label class="form-check-label" for="flexSwitchCheckDefault">Dark Theme</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <nav class="container bg-light mt-2 p-2 rounded" :class="{'bg-light text-dark': theme == 'light', 'bg-dark text-light': theme == 'dark'}">
      <div class="row justify-content-between">
        <div class="col-7 d-flex align-items-center"><a href="/" class="stretched-link" :class="{'text-dark': theme == 'light', 'text-light': theme == 'dark'}"><p>Home</p></a></div>
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

    <RouterView :theme="theme" />

    <footer class="container bg-light p-2 rounded" :class="{'bg-light text-dark': theme == 'light', 'bg-dark text-light': theme == 'dark'}">
      <div class="row justify-content-between">
        <div class="col-2 d-flex align-items-center">20120075</div>
        <div class="col-6 text-center"><h1>Movies Info</h1></div>
        <div class="col-2 d-flex align-items-center justify-content-end">
          {{Config.apiKey}}
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  data() {
    return {
      theme: "light"
    }
  },
  mounted() {

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
    },
    toggleTheme() {
      if (this.theme == "light") {
        this.theme = "dark";
      } else {
        this.theme = "light";
      }
    }
  }
}
</script>

<style scoped>
#main {
  margin: 0;
  padding: 0;
}
</style>
