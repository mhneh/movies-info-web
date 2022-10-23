import {defineStore} from "pinia";

import Config from "./../config.js"

import IN_THEATER_MOVIES from "@/json/InTheaters.json";
import MOST_POPULAR_MOVIES from "@/json/MostPopular.json";
import TOP_RATING_MOVIES from "@/json/250movies.json";

export const useMovieStore = defineStore({
    id: 'movie',
    state: () => ({
        inTheaterMovies: [],
        mostPopularMovies: [],
        topRatingMovies: [],
        movie: null,
        loadingInTheaterMovies: false,
        loadingMostPopularMovies: false,
        loadingTopRatingMovies: false,
        loading: false,
        error: null
    }),
    getters: {
        getInTheaterMovieChunks: (state) => {
            return (pageSize, totalPages) => {
                let chunks = [];
                for (let i = 0; i < parseInt(pageSize) * parseInt(totalPages); i += parseInt(pageSize)) {
                    const chunk = state.inTheaterMovies.slice(i, i + parseInt(pageSize));
                    chunks.push(chunk);
                }
                return chunks;
            };
        }
    },
    actions: {
        async fetchInTheaterMovies() {
            this.inTheaterMovies = [];
            this.loadingInTheaterMovies = true;
            try {
                // this.inTheaterMovies = await fetch("https://imdb-api.com/en/API/Top250Movies/" + Config.apiKey)
                //     .then(response => response.json());
                setTimeout(() => {
                    this.inTheaterMovies = IN_THEATER_MOVIES.items;
                    console.log(this.inTheaterMovies);
                    this.loadingInTheaterMovies = false;
                }, 3000);
            } catch (error) {
                this.error = error
            } finally {

            }
        },
        async fetchMostPopularMovies() {
            this.mostPopularMovies = [];
            this.loadingMostPopularMovies = true;
            try {
                // this.mostPopularMovies = await fetch("https://imdb-api.com/en/API/MostPopularMovies/" + Config.apiKey)
                //     .then(response => response.json());
                setTimeout(() => {
                    this.mostPopularMovies = MOST_POPULAR_MOVIES.items;
                    console.log(this.mostPopularMovies);
                    this.loadingMostPopularMovies = false;
                }, 4000);
            } catch (error) {
                this.error = error
            } finally {

            }
        },
        async fetchTopRatingMovies() {
            this.topRatingMovies = [];
            this.loadingTopRatingMovies = true;
            try {
                // this.topRatingMovies = await fetch("https://imdb-api.com/en/API/Top250Movies/" + Config.apiKey)
                //     .then(response => response.json());
                setTimeout(() => {
                    this.topRatingMovies = TOP_RATING_MOVIES.items;
                    console.log(this.topRatingMovies);
                    this.loadingTopRatingMovies = false;
                }, 5000);
            } catch (error) {
                this.error = error
            } finally {

            }
        },
        async fetchMovieById(id) {
            this.movie = null;
            this.loading = true;
            try {
                this.movie = await fetch("https://imdb-api.com/en/API/Title/" + Config.apiKey + "/" + id + "/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia,", { mode: 'no-cors'})
                        .then(response => response.json());
                this.loading = false;
                console.log(this.movie);
            } catch (error) {
                this.error = error
            } finally {
                this.loading = false;
            }
        }
    }
});