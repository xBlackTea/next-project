import { Box, Card, Text } from "@yamada-ui/react";
import React from "react";

type scheduleType = {
  key: number;
  screening_time: string;
  screen_number: string;
  reservation: boolean;
};

export const ScheduleList = (props: scheduleType) => {
  return (
    <>
      <Card w="200px" m="5px" p="5px">
        <Text>{props.screening_time}</Text>
        <Text>{props.screen_number}</Text>
      </Card>
    </>
  );
};
