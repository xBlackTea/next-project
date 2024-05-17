"use client";
import { Box, Center, Image, useBreakpoint } from "@yamada-ui/react";
import React from 'react';
import { Carousel, CarouselSlide } from "@yamada-ui/carousel";
import { movieCard } from "@/mock/movie/mock";

export const TopSlider = () => {

    const breakpoint = useBreakpoint();

    return (
        <>
        <Carousel
            slideSize={["sm"].includes(breakpoint) ? "100%" : ["md"].includes(breakpoint) ? "50%" : ["lg"].includes(breakpoint) ? "50%" : ["xl"].includes(breakpoint) ? "33.3333%" : "25%"}
            size={["sm", "md"].includes(breakpoint) ? "sm" : "md"}
            as="center"
            m="20px auto"
            maxW="2100px"
            autoplay
            dragFree
        >
            {movieCard.map((card, index) => (
                <CarouselSlide
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
                        _hover={{
                            transform: "scale(1.1)",
                            transition: "transform 0.3s ease-in-out"
                        }}
                    />
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
                    ["sm", "md"].includes(breakpoint) ?
                    "inset -50px 0 50px rgba(0, 0, 0, 0.7), inset 50px 0 50px rgba(0, 0, 0, 0.7)" :
                    "inset -150px 0 50px rgba(0, 0, 0, 0.7), inset 150px 0 50px rgba(0, 0, 0, 0.7)"
                }
            />
        </Carousel>
        </>
    );
}