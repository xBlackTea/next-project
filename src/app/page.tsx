"use client"
import { Box } from "@yamada-ui/react";
import React from "react";
import { movieCard } from "@/mock/movie/mock";
import { fetchMovieResponse } from "@/mock/movie/MovieInterface";
import { MovieCard, TopSectionContainer, TopSectionHeader, TopSlider } from "./_components/block";
import TheaterList from "./_components/TheaterList";

export default function Page() {

  return (
    <>
      <TopSlider />

      <TopSectionContainer>
        <TopSectionHeader title="作品案内" link="/movies" />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="start"
          flexWrap="wrap"
          gap="15px"
        >
          {movieCard.map((data: fetchMovieResponse) => (
            <MovieCard
              key={data.id}
              movie_image={data.movie_image}
              title={data.title}
            />
          ))}
        </Box>
      </TopSectionContainer>

      <TopSectionContainer>
        <TopSectionHeader title="劇場案内" link="/theaters" />
        <TheaterList />
      </TopSectionContainer>
    </>
  );
}
