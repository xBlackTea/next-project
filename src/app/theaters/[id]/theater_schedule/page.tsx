import { Box } from "@yamada-ui/react";
import React from "react";
import { movieCard } from "@/mock/theater/movie/mock";
import { fetchMovieResponse } from "@/mock/theater/movie/MovieInterface";
import { MovieScheduleField } from "./_components/MovieScheduleField";

const Page = () => {
  return (
    <>
      <Box maxW="1500px">
        {movieCard.map((data: fetchMovieResponse) => (
          <MovieScheduleField
            key={data.id}
            id={data.id}
            title={data.title}
            image={data.movie_image}
          />
        ))}
      </Box>
    </>
  );
};

export default Page;
