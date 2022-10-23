<script setup>
import Slider from '../components/Slider.vue'
import {storeToRefs} from 'pinia';
import {useMovieStore} from "@/stores/movie";

const {
  loadingInTheaterMovies, error, inTheaterMovies,
  loadingMostPopularMovies, mostPopularMovies,
  loadingTopRatingMovies, topRatingMovies
} = storeToRefs(useMovieStore());
const {fetchInTheaterMovies, fetchMostPopularMovies, fetchTopRatingMovies} = useMovieStore();

function chunk(movies, pageSize, totalPages) {
  let chunks = [];
  for (let i = 0; i < parseInt(pageSize) * parseInt(totalPages); i += parseInt(pageSize)) {
    const chunk = movies.slice(i, i + parseInt(pageSize));
    chunks.push(chunk);
  }
  return chunks;
}

fetchInTheaterMovies();
fetchMostPopularMovies();
fetchTopRatingMovies();
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <Slider
            title=""
            hasPagination="false"
            pageSize="1"
            totalPages="5"
            v-bind:loading="loadingInTheaterMovies"
            v-bind:error="error"
            v-bind:movieChunks="chunk(inTheaterMovies,1, 5)"/>
      </div>

      <div class="row">
        <Slider
            title="Most Popular"
            hasPagination="true"
            pageSize="3"
            totalPages="5"
            v-bind:loading="loadingMostPopularMovies"
            v-bind:error="error"
            v-bind:movieChunks="chunk(mostPopularMovies,3, 5)"
        />
      </div>

      <div class="row">
        <Slider
            title="Top Rating"
            hasPagination="true"
            pageSize="3"
            totalPages="5"
            v-bind:loading="loadingTopRatingMovies"
            v-bind:error="error"
            v-bind:movieChunks="chunk(topRatingMovies,3, 5)"
        />
      </div>
    </div>
  </main>
</template>
