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

  return (
    <>
      <Card
        w="calc(33.3333% - 15px)"
        marginTop="15px"
        marginLeft="15px"
        borderRadius="2px"
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
        overflow="hidden"
        cursor="pointer"
        variant="outline"
        color="movieCard.color"
        backgroundColor="movieCard.bg"
      >
        <CardHeader display="flex" justifyContent="center" margin="10px" padding="0px">
          <Image
            className="img"
            src={props.movie_image}
            w="100%"
            aspectRatio="9\16"
            objectFit="cover"
            borderRadius="2px"
            alt={props.title}
          />
        </CardHeader>
        <CardFooter
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            fontSize={
              breakpoint === "sm" ? "sm" : breakpoint === "md" ? "md" : "lg"
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
