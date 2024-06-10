import React from "react";
import { Box, Card, CardBody, Image, Text } from "@yamada-ui/react";
import { movieCard } from "@/mock/movie/mock";

export const MovieInformation = () => {
  const movieDetail = movieCard[0];

  return (
    <>
      <Card borderRadius="0" m="20px 0" boxShadow="none" variant="outline">
        <Image
          objectFit="cover"
          src={movieDetail.movie_wide_image}
          alt="movieImage"
          w="100%"
          aspectRatio="16/9"
        />
        <CardBody>
          <Box h="200px">
            <Text fontSize="1.4rem" fontWeight="bold">
              {movieDetail.title}
            </Text>
            <Text>{movieDetail.detail}</Text>
          </Box>
        </CardBody>
      </Card>
    </>
  );
};
