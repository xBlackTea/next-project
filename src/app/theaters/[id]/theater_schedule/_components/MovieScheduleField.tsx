import { Box, Card, Image, Text } from "@yamada-ui/react";
import React from "react";
import { scheduleData } from "@/mock/schedule/mock";
import { fetchScheduleInterface } from "@/mock/schedule/scheduleInterface";
import { TheaterSchedule } from "./TheaterSchedule";

type propsType = {
  key: number;
  id: number;
  title: string;
  image: string;
};

export const MovieScheduleField = (props: propsType) => {
  return (
    <>
      <Card
        key={props.id}
        w="80%"
        m="20px auto"
        variant="outline"
        borderRadius="none"
      >
        <Box display="flex" alignItems="center" w="100%" h="75px" pl="20px">
          <Text>{props.title}</Text>
        </Box>

        <Box display="flex">
          <Image
            className="img"
            src={props.image}
            w="250px"
            p="0 20px 20px 20px"
            aspectRatio="9\16"
            objectFit="cover"
            borderRadius="2px"
            alt={props.title}
          />

          <Box display="flex" flexWrap="wrap">
            {scheduleData.map((data: fetchScheduleInterface) => (
              <TheaterSchedule
                key={data.id}
                id={data.id}
                screening_time={data.screening_time}
                screen_number={data.screen_number}
                reservation={data.reservation}
              />
            ))}
          </Box>
        </Box>
      </Card>
    </>
  );
};
