import { movieCard } from '@/mock/movie/mock';
import { fetchMovieResponse } from '@/mock/movie/MovieInterface';
import React from 'react';
import { Box } from '@yamada-ui/react';
import { MovieCard } from './_components/block/MovieCard';



const Page = () => {
  return (
    <div style={{ display:"flex", margin:"0 auto", width:"1200px", height:"2000px", backgroundColor:"#fff"}}>
      <div style={{width:"315px", backgroundColor:"#999"}}></div>
      <div>
        <div style={{width:"855px", height:"30px", marginTop:"15px", marginLeft:"15px", borderRadius:"2px", backgroundColor:"#ddd"}}>
          <p style={{paddingLeft:"10px", fontSize:"16px", lineHeight:"1.8", color:"#fff"}}>トップページ {" > "} 作品一覧</p>
        </div>
        <div style={{width:"855px", height:"60px", marginTop:"15px", marginLeft:"15px", borderRadius:"2px", backgroundColor:"#ddd"}}>
          <p style={{paddingLeft:"10px", fontSize:"30px", lineHeight:"1.8", color:"#fff"}}>作品一覧</p>
        </div>
        <Box
          width="870px"
          display="flex"
          alignItems="start"
          flexWrap="wrap"
        >
          {movieCard.map((data: fetchMovieResponse) => (
            <MovieCard
              key={data.id}
              movie_image={data.movie_image}
              title={data.title}
            />
          ))}
        </Box>
      </div>
    </div>
  );
};

export default Page;