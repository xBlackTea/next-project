import React from "react";
import { Card, CardFooter, CardHeader, Image } from "@yamada-ui/react";

type issueMovieProps = {
  key: number;
  movie_image: string;
  title: string;
};

export default function MovieCard(props: issueMovieProps) {
  return (
    <>
      <Card w="390px" h="590px">
        <CardHeader>
          <Image src={props.movie_image} h="520px" alt="aaaa" />
        </CardHeader>
        <CardFooter>{props.title}</CardFooter>
      </Card>
    </>
  );
}
