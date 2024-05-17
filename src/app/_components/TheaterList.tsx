import { Box, Center } from "@yamada-ui/react";
import React from "react";
import TheaterCard from "./block/TheaterCard";

const theater = [
  {
    id: 1,
    theaterImage: "hal_tokyo.jpg",
    theaterName: "HAL東京",
  },
  {
    id: 2,
    theaterImage: "hal_nagoya.jpg",
    theaterName: "HAL東京",
  },
  {
    id: 3,
    theaterImage: "hal_osaka.jpg",
    theaterName: "HAL東京",
  },
];

const TheaterList = () => {
  return (
    <>
      <Box display="flex" as={Center}>
        {theater.map((data) => (
          <TheaterCard
            key={data.id}
            theaterImage={data.theaterImage}
            theaterName={data.theaterName}
          />
        ))}
      </Box>
    </>
  );
};

export default TheaterList;
