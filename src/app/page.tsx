"use client"
import { Box, useBreakpoint } from "@yamada-ui/react";
import React from "react";
import { movieCard } from "@/mock/movie/mock";
import { fetchMovieResponse } from "@/mock/movie/MovieInterface";
import { MovieCard, TopSlider } from "./_components/block";
import TheaterList from "./_components/TheaterList";

export default function Page() {

  const breakpoint = useBreakpoint();

  return (
    <>
      <TopSlider />

      <Box
        display="flex"
        justifyContent="center"
        alignItems="start"
        flexWrap="wrap"
        gap="30px"
        w={breakpoint === "sm" ? "100%" : breakpoint === "md" ? "90%" : "80%"}
        m="20px auto"
      >
        {movieCard.map((data: fetchMovieResponse) => (
          <MovieCard
            key={data.id}
            movie_image={data.movie_image}
            title={data.title}
          />
        ))}
      </Box>

      <TheaterList />
    </>
  );
}
