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
            <CarouselSlide as={Center}  color="#fff" bg="primary">
                1
            </CarouselSlide>
            <CarouselSlide as={Center} color="#fff" bg="secondary">
                2
            </CarouselSlide>
            <CarouselSlide as={Center} color="#fff" bg="warning">
                3
            </CarouselSlide>
            <CarouselSlide as={Center} color="#fff" bg="danger">
                4
            </CarouselSlide>
        </Carousel>
        </>
    );
}