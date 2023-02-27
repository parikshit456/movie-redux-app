import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {movieApi, movieApi2} from '../../common/api/MovieApi';
import { APIKEY, APIKEY2 } from '../../common/api/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async ()=> {

        const movieText = "Harry";
        const res = await movieApi2.get(`trending/all/day?api_key=${APIKEY2}`)
        const response = await movieApi.get(`?apiKey=${APIKEY}&s=${movieText}&type=movie`).catch((err)=>console.log(err));
        return res.data;
    }
)


export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail",
    async (id)=> {

        // const movieText = "Harry";

        console.log(id)
        const res = await movieApi2.get(`/movie/${id}?api_key=${APIKEY2}&language=en-US`);
        // const response = await movieApi.get(`?apiKey=${APIKEY}&i=${id}&Plot=full`).catch((err)=>console.log(err));
        console.log(res.data)
        return res.data;
    }
)

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async ()=> {
        const showText = "Detective";
        const response = await movieApi.get(`?apiKey=${APIKEY}&s=${showText}&type=series`).catch((err)=>console.log(err));
        return response.data;
    }
)

const initialState  = {
    movies:{},
    shows:{},
    movieOrShowDetail:{},
    isloading:true
}

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        removeSelectedMovieOrShow: (state) =>{
            state.movieOrShowDetail = {};
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]: (state)=>{
            console.log("Pending")
            
            return {
                ...state,
                isloading:true
            }
            
        },
        [fetchAsyncMovies.fulfilled]: (state,{payload})=>{
                console.log("fetched Successfully")
                return {...state,movies:payload,isloading:false}
        },

        [fetchAsyncMovies.rejected]: ()=>{
            console.log("Rejected")
        },
        [fetchAsyncShows.pending]: (state)=>{
            console.log("Pending")
            
            return {
                ...state,
                isloading:true
            }
            
        },
        [fetchAsyncShows.fulfilled]: (state,{payload})=>{
            console.log("fetched Successfully")
            console.log(state.isloading)

            return {...state,shows:payload,isloading:false}
    },
    [fetchAsyncMovieOrShowDetail.pending]: (state)=>{
        console.log("Pending")
        
        return {
            ...state,
            isloading:true
        }
        
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state,{payload}) =>{
        console.log("fetched Successfully")
            console.log(state.isloading)
            // state.isloading= false;

        return {...state,movieOrShowDetail:payload,isloading:false}
    }


    }
})

export const {removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getLoader = (state) => state.movies.isloading;
export const getMovieOrShowDetail = (state) => state.movies.movieOrShowDetail;


export default movieSlice.reducer