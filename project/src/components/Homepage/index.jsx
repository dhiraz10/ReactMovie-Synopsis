import React,{useEffect,useState} from "react";
import {HomeWrapper, Section,Section2,Section3} from "./style";
import Axios from "axios";
import NowPlaying from "../nowplaying"
import PopularMovie from "../popularmovie"

import TopRated from "../toprated";

const Homepage =()=>{
    const [nowPlaying, setnowPlaying] =useState ([]);
    const [popularMovies, setpopularMovies] =useState ([]);
    const [topMovies, settopMovies] =useState ([]);
    useEffect(()=>{
        getAllMovies();
    },[]);


const getAllMovies = async ()=>{
    let apiKey = '02689249b40636b114a2add6006bff65'
 const allMovies   =  await Axios.all([
Axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`),
Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`),
Axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
]);
// console.log(allMovies[0].data.results);
setnowPlaying(allMovies[0].data.results);
setpopularMovies(allMovies[1].data.results);
settopMovies(allMovies[2].data.results);
}

return(
<>


 <Section > 

<HomeWrapper>
<NowPlaying movie = {nowPlaying } />
</HomeWrapper>
</Section>

<Section2 > 
<HomeWrapper>
<PopularMovie movie ={popularMovies}/>
</HomeWrapper>
</Section2>
<Section3 > 
<HomeWrapper>
<TopRated movie ={topMovies}/>
</HomeWrapper>
</Section3>
</>
);

};
export default Homepage;
