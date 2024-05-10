"use client";
import { Center, useBreakpoint } from "@yamada-ui/react";
import React from 'react';
import { Carousel, CarouselSlide } from "@yamada-ui/carousel";

export const TopSlider = () => {

    const breakpoint = useBreakpoint();

    return (
        <>
        <Carousel
            size={["sm", "md"].includes(breakpoint) ? "sm" : "md"}
            autoplay
        >
            <CarouselSlide as={Center} bg="primary">
                1
            </CarouselSlide>
            <CarouselSlide as={Center} bg="secondary">
                2
            </CarouselSlide>
            <CarouselSlide as={Center} bg="warning">
                3
            </CarouselSlide>
            <CarouselSlide as={Center} bg="danger">
                4
            </CarouselSlide>
        </Carousel>
        </>
    );
}