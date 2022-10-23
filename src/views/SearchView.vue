<script setup>
import {useRoute} from "vue-router";
import $ from 'jquery';
import {useMovieStore} from "@/stores/movie.js";
import {storeToRefs} from "pinia";
import Loader from "@/components/Loader.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";

const searchType = useRoute().params.searchType;
const expression = useRoute().params.expression;
console.log(searchType, expression);

$(document).ready(function() {
  document.getElementById('search-box').value = expression;
})

const {movies, loading, error} = storeToRefs(useMovieStore());
const {fetchMoviesByName, fetchMoviesByActorName} = useMovieStore();

if (searchType == 'movies') {
  fetchMoviesByName(expression);
} else if (searchType == 'actors') {
  fetchMoviesByActorName(expression);
}
</script>

<template>
  <Loader v-if="loading"/>

  <main>
    <div class="container">
      <div class="row mt-5 mb-5">
        <div class="col-sm-12">
          <div class="container-fluid">
            <div class="col-3 bg-light rounded px-5 py-2">
              <h3>Search Type</h3>
              <div class="form-check">
                <input :checked="searchType == 'movies'" @click="changeSearchType('movies', expression)" class="form-check-input" type="radio" value="movies" name="search-type" id="movies">
                <label class="form-check-label" for="movies">
                  By Movies
                </label>
              </div>
              <div class="form-check">
                <input :checked="searchType == 'actors'" @click="changeSearchType('actors', expression)" class="form-check-input" type="radio" value="actors" name="search-type" id="actors">
                <label class="form-check-label" for="actors">
                  By Actors
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ErrorMessage v-if="error" v-bind:error="error"/>

      <div class="row" v-if="movies">
        <div class="col-sm-12">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-4 mb-3  d-flex justify-content- align-items-stretch" v-for="movie in paginate(movies, page, pageSize)">
                <div class="card w-100">
                  <a v-bind:href="'/movies/' + movie.id" class="text-decoration-none">
                  <img v-bind:src="movie.image" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title text-center">{{ movie.title }}</h5>
                    <p class="card-text text-center">
                      <span class="text-secondary">Rating: {{ movie.imDbRating }}</span>
                    </p>
                    <p class="card-text text-center">
                      <span class="text-secondary">Length: {{ movie.runtimeStr }}</span>
                    </p>
                    <p class="card-text text-center">
                      <span class="text-secondary">{{ movie.year }}</span>
                    </p>
                  </div>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <div class="row">
        <div class="col-sm-12 d-flex justify-content-center align-items-center">
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li class="page-item"><a class="page-link" @click="previous(page -1)">Previous</a></li>
              <li class="page-item"><a class="page-link">{{page}}</a></li>
              <li class="page-item"><a class="page-link" @click="next(page + 1, movies.length)">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      page: 0,
      pageSize: 6
    }
  },
  methods: {
    previous(p) {
      if (p < 0) {
        return
      }
      this.page = p;
    },
    next(p, size) {
      if (p > size / this.pageSize) {
        return
      }
      this.page = p;
    },
    paginate(data, page, pageSize) {
      return data.slice(page * pageSize, page * pageSize + pageSize);
    },
    changeSearchType(type, expression) {
      if (type == this.searchType) {
        return
      }
      window.location.href = "/search/" + type + "/" + expression;
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
}
</style>
