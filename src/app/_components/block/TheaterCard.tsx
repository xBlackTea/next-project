import { Card, CardFooter, CardHeader, Image, Text } from "@yamada-ui/react";
import React from "react";

type theaterType = {
  key: number;
  theaterImage: string;
  theaterName: string;
};

const TheaterCard = (props: theaterType) => {
  return (
    <>
      <Card w="390px" m="5px">
        <CardHeader display="flex" justifyContent="center">
          <Image
            src={props.theaterImage}
            alt={props.theaterImage}
            w="370px"
          ></Image>
        </CardHeader>
        <CardFooter justifyContent="center">
          <Text fontSize="3xl">{props.theaterName}</Text>
        </CardFooter>
      </Card>
    </>
  );
};

export default TheaterCard;
