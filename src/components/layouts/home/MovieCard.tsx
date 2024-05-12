import React from "react";
import { Card, CardFooter, CardHeader, Image, Text } from "@yamada-ui/react";

type issueMovieProps = {
  key: number;
  movie_image: string;
  title: string;
};

export default function MovieCard(props: issueMovieProps) {
  return (
    <>
      <Card w="390px" h="590px" m="5px">
        <CardHeader display="flex" justifyContent="center">
          <Image src={props.movie_image} h="520px" alt={props.title} />
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
