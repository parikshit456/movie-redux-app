import axios from "axios";

const movieApi  = axios.create({
    baseURL:"http://www.omdbapi.com",
    
})

const movieApi2 = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})

export {movieApi,movieApi2};