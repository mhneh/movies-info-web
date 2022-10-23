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
        movies: [],
        loadingInTheaterMovies: false,
        loadingMostPopularMovies: false,
        loadingTopRatingMovies: false,
        loading: false,
        error: null
    }),
    getters: {
        getMovieById: (state) => {
            return (movieId) => [...state.topRatingMovies, ...state.mostPopularMovies, ...state.inTheaterMovies].find(m => m.id === movieId);
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
                }, 500);
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
                }, 1000);
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
                }, 2000);
            } catch (error) {
                this.error = error
            } finally {

            }
        },
        async fetchMovieById(id) {
            this.movie = null;
            this.loading = true;
            try {
                // this.movie = await fetch("https://imdb-api.com/en/API/Title/" + Config.apiKey + "/" + id + "/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia,", { mode: 'no-cors'})
                //         .then(response => response.json());
                setTimeout(() => {
                    this.movie = [...TOP_RATING_MOVIES.items, ...MOST_POPULAR_MOVIES.items, ...IN_THEATER_MOVIES.items].find(m => m.id == id);
                    this.loading = false;
                    console.log(this.movie);
                }, 3000);
            } catch (error) {
                this.error = error
            } finally {
            }
        },
        async fetchMoviesByName(name) {
            this.movies = null;
            this.loading = true;
            try {
                // this.movies = await fetch("https://imdb-api.com/en/API/SearchMovie/" + Config.apiKey + "/" + id + "/" + name, { mode: 'no-cors'})
                //         .then(response => response.json());
                setTimeout(() => {
                    if (!name || name == '') {
                        return;
                    }

                    this.movies = [...TOP_RATING_MOVIES.items, ...MOST_POPULAR_MOVIES.items, ...IN_THEATER_MOVIES.items].filter(m => m.title.toUpperCase().includes(name.toUpperCase()));
                    this.loading = false;
                    console.log(this.movies);
                }, 1000);
            } catch (error) {
                this.error = error
            } finally {
            }
        },
    }
});