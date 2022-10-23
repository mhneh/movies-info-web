<script setup>
import Loader from "@/components/Loader.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";

</script>

<template>
  <Loader v-if="loading"/>
  <ErrorMessage v-if="error" v-bind:error="error"/>
  <div v-if="movieChunks" class="container-fluid p-0">
    <div class="row mt-5 mb-5">
      <div class="col-sm-12">
        <div class="text-black"><h5>{{title}}</h5></div>

        <div v-bind:id="id" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators" v-if="hasPagination == 'true'">
            <button type="button"
                    :class="{active: i == 0}"
                    v-bind:data-bs-target="'#' + id"
                    v-bind:data-bs-slide-to="i"
                    v-for="i in pagination">
            </button>
          </div>

          <div class="carousel-inner px-5">
            <div class="carousel-item" :class="{ active: index == 0}" v-for="(chunk, index) in movieChunks">
              <div class="row d-flex justify-content-center">
                <div class="col-4 p-0 d-flex justify-content-center" v-for="movie in chunk">
                  <a v-bind:href="'/movies/' + movie.id" style="width: 100%;">
                    <img
                      v-bind:src="movie.image"
                      alt="..." style="width: 97%;">
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" v-bind:data-bs-target="'#' + id" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" v-bind:data-bs-target="'#' + id" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Slider",
  props: [
    'totalPages', 'pageSize', 'hasPagination', 'title', 'loading', 'error',
    'movieChunks'
  ],
  data() {
    return {
      id: this.genSliderId(this.title),
      pagination: this.genPagination(this.totalPages)
    }
  },
  mounted() {

  },
  methods: {
    genSliderId: function(title) {
      if (!title) {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let sliderId = '';
        for ( let i = 0; i < 6; i++ ) {
          sliderId += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return sliderId;
      }
      return title.replace(/\s+/g, '');
    },
    genPagination: function(size) {
      let pagination = [];
      for (let i = 0; i < parseInt(this.totalPages); ++i) {
        pagination.push(i);
      }
      return pagination;
    }
  }
}
</script>

<style scoped>
.cards-wrapper {
  display: flex;
  justify-content: center;
}
.card img {
  max-width: 100%;
  max-height: 100%;
}
.card {
  margin: 0 0.5em;
  box-shadow: 2px 6px 8px 0 rgba(22, 22, 26, 0.18);
  border: none;
  border-radius: 0;
}
.carousel-inner {
  padding: 1em;
}
.carousel-control-prev,
.carousel-control-next {
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-indicators {
  top: -5px;
  left: auto;
}

@media (min-width: 768px) {
  .card img {
    height: 11em;
  }
}
</style>