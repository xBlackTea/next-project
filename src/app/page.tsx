"use client";
import { Box, Container, useBreakpoint } from "@yamada-ui/react";

import React from "react";
import { movieCard } from "@/mock/movie/mock";
import { fetchMovieResponse } from "@/mock/movie/MovieInterface";
import {
  MovieCard,
  TopSectionContainer,
  TopSectionHeader,
  TopSlider,
} from "./_components/block";
import TheaterList from "./_components/block/TheaterList";
import ShopList from "./_components/block/ShopList";
import { EventList } from "./_components/block/EventList";
import { ServiceList } from "./_components/block/ServiceList";

export default function Page() {
  const breakpoint = useBreakpoint();

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

      <TopSectionContainer>
        <TopSectionHeader title="売店案内" link="/shops" />
        <ShopList />
      </TopSectionContainer>

      <TopSectionContainer>
        <TopSectionHeader title="イベント案内" link="/event" />
        <EventList />
      </TopSectionContainer>

      <TopSectionContainer>
        <TopSectionHeader title="サービス案内" link="/service" />
        <ServiceList />
      </TopSectionContainer>
    </>
  );
}
