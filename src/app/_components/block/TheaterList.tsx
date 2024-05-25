import { Box, Center } from "@yamada-ui/react";
import React from "react";
import TheaterCard from "./TheaterCard";

const theater = [
  {
    id: 1,
    theaterImage: "hal_tokyo.jpg",
    theaterName: "HAL東京",
  },
  {
    id: 2,
    theaterImage: "hal_nagoya.jpg",
    theaterName: "HAL名古屋",
  },
  {
    id: 3,
    theaterImage: "hal_osaka.jpg",
    theaterName: "HAL大阪",
  },
];

const TheaterList = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        gap="20px"
        as={Center}>
        {theater.map((data, index) => (
          <TheaterCard
            key={index}
            theaterImage={data.theaterImage}
            theaterName={data.theaterName}
          />
        ))}
      </Box>
    </>
  );
};

export default TheaterList;
