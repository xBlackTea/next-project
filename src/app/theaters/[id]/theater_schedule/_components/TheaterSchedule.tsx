import { Box, Card, Text } from "@yamada-ui/react";
import React from "react";

type propsType = {
  key: number;
  id: number;
  screening_time: string;
  screen_number: string;
  reservation: boolean;
};

export const TheaterSchedule = (props: propsType) => {
  return (
    <>
      {props.reservation === true ? (
        <Card
          key={props.id}
          w="175px"
          h="45%"
          m="0 5px"
          p="5px"
          variant="outline"
          borderRadius="none"
        >
          <Text h="25%">{props.screening_time}</Text>
          <Text h="25%">{props.screen_number}</Text>
          <Text h="25%">指</Text>
          <Text h="25%">予約可能</Text>
        </Card>
      ) : (
        <Card
          key={props.key}
          w="175px"
          h="45%"
          m="0 5px"
          p="5px"
          opacity="0.5"
          variant="outline"
          borderRadius="none"
        >
          <Text h="25%">{props.screening_time}</Text>
          <Text h="25%">{props.screen_number}</Text>
          <Text h="25%">指</Text>
          <Text h="25%">予約不可</Text>
        </Card>
      )}
    </>
  );
};
