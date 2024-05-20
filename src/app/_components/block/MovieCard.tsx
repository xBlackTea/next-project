"use client";
import React from "react";
import {
  Card,
  CardFooter,
  CardHeader,
  Image,
  Text,
  useBreakpoint,
  useColorMode,
} from "@yamada-ui/react";

type issueMovieProps = {
  key: number;
  movie_image: string;
  title: string;
};

export function MovieCard(props: issueMovieProps) {
  const breakpoint = useBreakpoint();
  const { colorMode } = useColorMode();
  const GAP = 15;

  return (
    <>
      <Card
        w={
          breakpoint === "sm"
            ? `calc(100% - ${GAP}px)`
            : breakpoint === "md"
            ? `calc(50% - ${GAP}px)`
            : `calc(33.3333% - ${GAP}px)`
        }
        sx={{
          "&:hover .img": {
            transition: colorMode === "dark" ? "filter 0.3s ease-in-out" : "",
            filter: colorMode === "dark" ? "brightness(100%)" : "",
          },
          "&:not(:hover) .img": {
            transition: colorMode === "dark" ? "filter 0.3s ease-in-out" : "",
            filter: colorMode === "dark" ? "brightness(70%)" : "",
          },
        }}
        cursor="pointer"
        variant="outline"
      >
        <CardHeader display="flex" justifyContent="center">
          <Image
            className="img"
            src={props.movie_image}
            w="100%"
            aspectRatio="9\16"
            objectFit="cover"
            borderRadius="3px"
            alt={props.title}
          />
        </CardHeader>
        <CardFooter>
          <Text
            fontSize={
              breakpoint === "sm" ? "1xl" : breakpoint === "md" ? "2xl" : "3xl"
            }
            isTruncated
            w="100%"
          >
            {props.title}
          </Text>
        </CardFooter>
      </Card>
    </>
  );
}
