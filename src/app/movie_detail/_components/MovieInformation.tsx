import React from "react";
import { Card, CardBody, Image, Text } from "@yamada-ui/react";
import { movieCard } from "@/mock/movie/mock";

export const MovieInformation = () => {
  const testMovieDetail = movieCard[0];

  // type props = {
  //   id: number;
  //   movie_image: string;
  //   movie_wide_image: string;
  //   title: string;
  //   detail: string;
  // };

  return (
    <>
      <Card borderRadius="0" m="20px 0" boxShadow="none" variant="outline">
        <Image
          objectFit="cover"
          src={testMovieDetail.movie_wide_image}
          alt="movieImage"
          w="100%"
          aspectRatio="16/9"
        />
        <CardBody>
          <Text>{testMovieDetail.detail}</Text>
        </CardBody>
      </Card>
    </>
  );
};
