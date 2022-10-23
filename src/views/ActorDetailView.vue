<script setup>
import {useRoute} from 'vue-router'
import {useActorStore} from "@/stores/actor";
import {storeToRefs} from "pinia";
import Loader from "@/components/Loader.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";

const {loadingActor, actor, errorActor} = storeToRefs(useActorStore());
const {fetchActorById} = useActorStore();
const actorId = useRoute().params.id;

fetchActorById(actorId);
</script>

<template>
  <Loader v-if="loadingActor"/>
  <ErrorMessage v-bind:error="errorActor" v-if="errorActor"/>
  <main class="mb-5">
    <div class="container bg-light p-5 mt-5 rounded h-75">
      <h1 class="my-4">{{ actor.name }}
        <small>@Actor</small>
      </h1>
      <div class="row">

        <div class="col-md-7 text-lg-center">
          <img class="img-fluid w-75" v-bind:src="actor.image" alt="">
        </div>

        <div class="col-md-5">
          <h3 class="my-3">Summary</h3>
          <p>{{actor.summary}}</p>

          <h3 class="my-3">Role: <span class="small">{{actor.role}}</span></h3>
          <h3 class="my-3">Birthdate: <span class="small">{{actor.birthDate}}</span></h3>
        </div>
      </div>

      <div class="container border rounded p-3 mt-3">
        <h2 class="text-primary">Cast Movies</h2>
        <hr/>
        <div class="row rounded" v-for="movie in paginate(actor.castMovies, page, pageSize)">
          <a class="text-decoration-none text-black" v-bind:href="'/movies/' + movie.id">
            <div class="col-sm-8">
              <h3 class="title">{{ movie.title }}</h3>
              <p class="text-muted"><span class="glyphicon glyphicon-lock"></span> {{'Year: ' + movie.year}}</p>
              <p>{{movie.description}}</p>

              <p class="text-muted">{{'As ' + movie.role}}</p>
            </div>
          </a>
          <hr/>
        </div>
        <nav aria-label="Page navigation">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" @click="previous(page -1)">Previous</a></li>
            <li class="page-item"><a class="page-link">{{page}}</a></li>
            <li class="page-item"><a class="page-link" @click="next(page + 1, actor.castMovies.length)">Next</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ActorDetailView.vue",
  data(){
    return {
      page: 0,
      pageSize: 5
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
  }
}
</script>

<style scoped>

</style>