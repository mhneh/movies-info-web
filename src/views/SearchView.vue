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
  document.getElementById(searchType).checked = true;
})

const {movies, loading, error} = storeToRefs(useMovieStore());
const {fetchMoviesByName} = useMovieStore();

if (searchType == 'movies') {
  fetchMoviesByName(expression);
}
</script>

<template>
  <Loader v-if="loading"/>
  <ErrorMessage v-if="error" v-bind:error="error"/>
  <main>
    <div class="container" v-if="movies">
      <div class="row mt-5 mb-5">
        <div class="col-sm-12">
          <div class="container-fluid">
            <div class="col-3 bg-light rounded px-5 py-2">
              <h3>Search Type</h3>
              <div class="form-check">
                <input class="form-check-input" type="radio" value="movies" name="search-type" id="movies">
                <label class="form-check-label" for="movies">
                  By Movies
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" value="actors" name="search-type" id="actors">
                <label class="form-check-label" for="actors">
                  By Actors
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-4 mb-3  d-flex justify-content- align-items-stretch" v-for="movie in movies">
                <div class="card w-100">
                  <img v-bind:src="movie.image" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title text-center">{{ movie.title }}</h5>
                    <p class="card-text text-center"><span class="text-secondary">Description</span></p>
                  </div>
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
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
}
</style>
