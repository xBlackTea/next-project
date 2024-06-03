import React from "react";
import { Card, CardBody, Image, Text } from "@yamada-ui/react";

export const MovieInformation = () => {
  return (
    <>
      <Card>
        <Image src="public/コナン2.jpg" alt="movieImage" />
        <CardBody>
          <Text>名探偵コナンでございます</Text>
        </CardBody>
      </Card>
    </>
  );
};
