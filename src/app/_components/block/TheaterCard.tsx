import { Card, CardFooter, CardHeader } from "@yamada-ui/react";
import React from "react";

type theaterType = {
  key: number;
  theaterImage: string;
  theaterName: string;
};

const TheaterCard = (props: theaterType) => {
  return (
    <>
      <Card>
        <CardHeader>{props.theaterImage}</CardHeader>
        <CardFooter>{props.theaterName}</CardFooter>
      </Card>
    </>
  );
};

export default TheaterCard;
