<script setup>
import {useRoute} from 'vue-router'
import {useMovieStore} from "@/stores/movie";
import {useActorStore} from "@/stores/actor";
import {storeToRefs} from "pinia";

import Loader from "@/components/Loader.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import {useReviewStore} from "@/stores/review";

const movieId = useRoute().params.id;
const {movie, loading, error, getMovieById} = storeToRefs(useMovieStore());
const {fetchMovieById} = useMovieStore()

const {loadingActor, actors, errorActor} = storeToRefs(useActorStore());
const {fetchActorsByMovieId} = useActorStore();

const {reviews} = storeToRefs(useReviewStore());
const {fetchReviewsByMovieId} = useReviewStore();

fetchMovieById(movieId);
fetchActorsByMovieId(movieId);
fetchReviewsByMovieId(movieId);
</script>

<template>
  <main class="mb-5">
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
          <ul v-for="actor in paginate(actors.actors, page, pageSize)">
            <li><a v-bind:href="'/actors/' + actor.id" class="btn btn-primary"><span class="fw-bold">{{ actor.name }}</span></a> as {{actor.asCharacter}}</li>
          </ul>
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li class="page-item"><a class="page-link" @click="previous(page -1)">Previous</a></li>
              <li class="page-item"><a class="page-link">{{page}}</a></li>
              <li class="page-item"><a class="page-link" @click="next(page + 1, actors.actors.length)">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div v-if="reviews" class="row mt-5">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body text-center">
              <h4 class="card-title">Reviews</h4>
              <hr/>
            </div>

            <div class="comment-widgets">
              <!-- Comment Row -->
              <div class="d-flex flex-row comment-row m-t-0 mb-4 p-3" v-for="review in reviews.items">

                <div class="comment-text w-100">
                  <h6 class="font-medium">{{review.username}}</h6> <span class="m-b-15 d-block">{{review.content}}</span>
                  <div class="comment-footer"> <span class="text-muted float-right">{{ review.date }}</span> </div>
                </div>
              </div> <!-- Comment Row -->

            </div> <!-- Card -->
          </div>
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
    }
  }
}
</script>

<style scoped>

</style>