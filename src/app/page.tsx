import { Box } from "@yamada-ui/react";
import React from "react";
import { movieCard } from "@/mock/movie/mock";
import { fetchMovieResponse } from "@/mock/movie/MovieInterface";
import { MovieCard, TopSlider } from "./_components/block";

export default function Page() {
  return (
    <>
      <TopSlider />

      <Box display="flex" justifyContent="center" flexWrap="wrap">
        {movieCard.map((data: fetchMovieResponse) => (
          <MovieCard
            key={data.id}
            movie_image={data.movie_image}
            title={data.title}
          />
        ))}
      </Box>
    </>
  );
}
