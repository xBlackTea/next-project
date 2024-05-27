"use client";
import { Box, Center, Image, Text, useBreakpoint, useColorMode } from "@yamada-ui/react";
import React from 'react';
import { Carousel, CarouselSlide } from "@yamada-ui/carousel";
import { movieCard } from "@/mock/movie/mock";

export const TopSlider = () => {

    const breakpoint = useBreakpoint();
    const { colorMode } = useColorMode();

    return (
        <Box
            bgColor="carousel.bg"
        >
            <Carousel
                slideSize={["sm"].includes(breakpoint) ? "100%" : ["md"].includes(breakpoint) ? "50%" : ["lg"].includes(breakpoint) ? "50%" : ["xl"].includes(breakpoint) ? "33.3333%" : "25%"}
                size={["sm", "md"].includes(breakpoint) ? "sm" : "md"}
                as="center"
                m="0 auto"
                pt="20px"
                autoplay
                dragFree
            >
                {movieCard.map((card, index) => (
                    <CarouselSlide
                        _hover={{
                            ".child": {
                                opacity: "1",
                            }
                        }}
                        position="relative"
                        as={Center}
                        key={index}
                        h="90%"
                        bgColor="transparent"
                        overflow="hidden"
                        sx={{
                            cursor: "pointer",
                        }}
                    >
                        <Image
                            src={`/${card.movie_image}`}
                            h="full"
                            aspectRatio="5/3"
                            objectFit="cover"
                            sx={{
                                transform: "scale(1)",
                                transition: "transform 0.3s ease-in-out",
                                "&:hover": {
                                    transform: "scale(1.1)",
                                    transition: "transform 0.3s ease-in-out",
                                },
                                "&:not(:hover)": {
                                    transition: "transform 0.3s ease-in-out",
                                },
                            }}
                        />
                        <Text
                            className="child"
                            position="absolute"
                            bottom={0}
                            left={0}
                            opacity={0}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            w="full"
                            backgroundColor="rgba(0, 0, 0, 0.7)"
                            color="#fff"
                            p="5px 10px"
                            sx={{
                                transition: "opacity 0.3s ease"
                            }}
                            isTruncated
                        >
                            {card.title}
                        </Text>
                    </CarouselSlide>
                ))}
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    w="full"
                    h="full"
                    pointerEvents="none"
                    boxShadow={
                        colorMode === "dark" ?
                            ["sm", "md"].includes(breakpoint) ?
                            "inset -50px 0 50px rgba(0, 0, 0, 0.7), inset 50px 0 50px rgba(0, 0, 0, 0.7)" :
                            "inset -150px 0 50px rgba(0, 0, 0, 0.7), inset 150px 0 50px rgba(0, 0, 0, 0.7)"
                        :
                            ""
                    }
                />
            </Carousel>
        </Box>
    );
}