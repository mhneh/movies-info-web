<script setup>
import {useRoute} from 'vue-router'
import {useMovieStore} from "@/stores/movie";
import {useActorStore} from "@/stores/actor";
import {storeToRefs} from "pinia";

import Loader from "@/components/Loader.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";

const movieId = useRoute().params.id;
const {movie, loading, error, getMovieById} = storeToRefs(useMovieStore());
const {fetchMovieById} = useMovieStore()

const {loadingActor, actors, errorActor} = storeToRefs(useActorStore());
const {fetchActorsByMovieId} = useActorStore();

fetchMovieById(movieId);

</script>

<template>
  <main class="vh-100">
    <Loader v-if="loading"/>
    <ErrorMessage v-if="error" error="error"/>
    <div v-if="movie" class="container bg-light p-5 mt-5 rounded h-75">
      <h1 class="my-4">{{ movie.title }}
        <small>@Movie</small>
      </h1>
      <div class="row">

        <div class="col-md-8 text-lg-center">
          <img class="img-fluid" style="width: 40%;" v-bind:src="movie.image" alt="">
        </div>

        <div class="col-md-4">
          <h3 class="my-3">Description</h3>
          <p>{{movie.plot}}</p>

          <h3 class="my-3">Directors: </h3>
          <ul v-for="director in movie.directorList">
            <li>{{director.name}}</li>
          </ul>

          <h3 class="my-3">Published: <span class="text">{{ movie.year }}</span></h3>

          <h3 class="my-3">Actors</h3>
          <ul v-for="actor in actors">
            <li><a v-bind:href="'/actors/' + actor.id" class="btn btn-primary"><span class="fw-bold">{{ actor.name }}</span></a> as {{actor.asCharacter}}</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "DetailView",
  data() {
    return {
      page: 0,
      pageSize: 4
    }
  }
}
</script>

<style scoped>

</style>