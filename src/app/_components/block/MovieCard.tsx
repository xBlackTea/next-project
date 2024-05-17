"use client"
import React from "react";
import { Card, CardFooter, CardHeader, Image, Text, useBreakpoint } from "@yamada-ui/react";

type issueMovieProps = {
  key: number;
  movie_image: string;
  title: string;
};

export function MovieCard(props: issueMovieProps) {

  const breakpoint = useBreakpoint();
  const GAP = 30;

  return (
    <>
      <Card
        w={
          breakpoint === "sm" ? `calc(100% - ${GAP}px)` :
          breakpoint === "md" ? `calc(50% - ${GAP}px)` : 
          `calc(33.3333% - ${GAP}px)`
        }
        sx={{
          '&:hover .img': {
            transition: 'filter 0.3s ease-in-out',
            filter: 'brightness(100%)'
          },
          '&:not(:hover) .img': {
            transition: 'filter 0.3s ease-in-out',
            filter: 'brightness(70%)'
          }
        }}
        cursor="pointer"
      >
        <CardHeader display="flex" justifyContent="center">
          <Image
          className="img"
            src={props.movie_image}
            w="100%"
            aspectRatio="9\16"
            objectFit="cover"
            borderRadius="5px"
            alt={props.title}
          />
        </CardHeader>
        <CardFooter>
          <Text fontSize="3xl" isTruncated>
            {props.title}
          </Text>
        </CardFooter>
      </Card>
    </>
  );
}
