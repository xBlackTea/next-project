// "use client";
// import { Box, Center, Image, Text, useBreakpoint, useColorMode } from "@yamada-ui/react";
// import React from 'react';
// import { Carousel, CarouselSlide } from "@yamada-ui/carousel";
// import { movieCard } from "@/mock/movie/mock";

// export const TopSlider = () => {

//   const breakpoint = useBreakpoint();
//   const { colorMode } = useColorMode();

//   return (
//   <Box
//     bgColor="carousel.bg"
//   >
//     <Carousel
//       slideSize={["sm"].includes(breakpoint) ? "100%" : ["md"].includes(breakpoint) ? "50%" : ["lg"].includes(breakpoint) ? "50%" : ["xl"].includes(breakpoint) ? "33.3333%" : "25%"}
//       size={["sm", "md"].includes(breakpoint) ? "sm" : "md"}
//       as="center"
//       m="0 auto"
//       pt="20px"
//       autoplay
//       dragFree
//     >
//       {movieCard.map((card, index) => (
//         <CarouselSlide
//           _hover={{".child": {opacity: "1"}}}
//           position="relative"
//           as={Center}
//           key={index}
//           h="90%"
//           bgColor="transparent"
//           overflow="hidden"
//           sx={{cursor: "pointer"}}
//         >
//           <Image
//             src={`/${card.movie_image}`}
//             h="full"
//             aspectRatio="5/3"
//             objectFit="cover"
//             sx={{
//               transform: "scale(1)",
//               transition: "transform 0.3s ease-in-out",
//               "&:hover": {
//                 transform: "scale(1.1)",
//                 transition: "transform 0.3s ease-in-out",
//               },
//               "&:not(:hover)": {
//                 transition: "transform 0.3s ease-in-out",
//               },
//             }}
//           />
//           <Text
//             className="child"
//             position="absolute"
//             bottom={0}
//             left={0}
//             opacity={0}
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             w="full"
//             backgroundColor="rgba(0, 0, 0, 0.7)"
//             color="#fff"
//             p="5px 10px"
//             sx={{transition: "opacity 0.3s ease"}}
//             isTruncated
//           >
//             {card.title}
//           </Text>
//         </CarouselSlide>
//       ))}
//       <Box
//         position="absolute"
//         top={0}
//         left={0}
//         w="full"
//         h="full"
//         pointerEvents="none"
//         boxShadow={
//           colorMode === "dark" ?
//             ["sm", "md"].includes(breakpoint) ?
//               "inset -50px 0 50px rgba(0, 0, 0, 0.7), inset 50px 0 50px rgba(0, 0, 0, 0.7)" :
//               "inset -150px 0 50px rgba(0, 0, 0, 0.7), inset 150px 0 50px rgba(0, 0, 0, 0.7)"
//             :
//             ""
//         }
//       />
//     </Carousel>
//   </Box>
//   );
// }





// "use client";
// import { Box, Center, Image, Text, useBreakpoint, useColorMode } from "@yamada-ui/react";
// import React from 'react';
// import { Carousel, CarouselSlide } from "@yamada-ui/carousel";
// import { movieCard } from "@/mock/movie/mock";

// export const TopSlider = () => {

//   const breakpoint = useBreakpoint();
//   const { colorMode } = useColorMode();

//   return (
//     <Box bgColor="carousel.bg">
//       <Carousel
//         slideSize={["sm", "md"].includes(breakpoint) ? "100%" : "20%"}
//         size={["sm", "md"].includes(breakpoint) ? "sm" : "md"}
//         as="center"
//         m="0 auto"
//         pt="20px"
//         autoplay
//         dragFree
//         gap="20px" // スライド間の間隔を設定
//       >
//         {movieCard.map((card, index) => (
//           <CarouselSlide
//             _hover={{ ".child": { opacity: "1" } }}
//             position="relative"
//             as={Center}
//             key={index}
//             h="90%"
//             bgColor="transparent"
//             overflow="hidden"
//             sx={{ cursor: "pointer" }}
//           >
//             <Image
//               src={`/${card.movie_image}`}
//               h="full"
//               aspectRatio="5/3"
//               objectFit="cover"
//               sx={{
//                 transform: "scale(1)",
//                 transition: "transform 0.3s ease-in-out",
//                 "&:hover": {
//                   transform: "scale(1.1)",
//                   transition: "transform 0.3s ease-in-out",
//                 },
//                 "&:not(:hover)": {
//                   transition: "transform 0.3s ease-in-out",
//                 },
//               }}
//             />
//             <Text
//               className="child"
//               position="absolute"
//               bottom={0}
//               left={0}
//               opacity={0}
//               display="flex"
//               justifyContent="center"
//               alignItems="center"
//               w="full"
//               backgroundColor="rgba(0, 0, 0, 0.7)"
//               color="#fff"
//               p="5px 10px"
//               sx={{ transition: "opacity 0.3s ease" }}
//               isTruncated
//             >
//               {card.title}
//             </Text>
//           </CarouselSlide>
//         ))}
//         <Box
//           position="absolute"
//           top={0}
//           left={0}
//           w="full"
//           h="full"
//           pointerEvents="none"
//           boxShadow={
//             colorMode === "dark" ?
//               ["sm", "md"].includes(breakpoint) ?
//                 "inset -50px 0 50px rgba(0, 0, 0, 0.7), inset 50px 0 50px rgba(0, 0, 0, 0.7)" :
//                 "inset -150px 0 50px rgba(0, 0, 0, 0.7), inset 150px 0 50px rgba(0, 0, 0, 0.7)"
//               :
//               ""
//           }
//         />
//       </Carousel>
//     </Box>
//   );
// }




// "use client";
// import { Box, Center, Image, Text, useBreakpoint, useColorMode } from "@yamada-ui/react";
// import React from 'react';
// import { Carousel, CarouselSlide } from "@yamada-ui/carousel";
// import { movieCard } from "@/mock/movie/mock";

// export const TopSlider = () => {

//   const breakpoint = useBreakpoint();
//   const { colorMode } = useColorMode();

//   const slideSize = () => {
//     if (["sm"].includes(breakpoint)) return "100%";
//     if (["md"].includes(breakpoint)) return "50%";
//     if (["lg"].includes(breakpoint)) return "33.3333%";
//     if (["xl"].includes(breakpoint)) return "20%";
//     return "16.6667%"; // 3440x1440のような大画面では一度に6つ表示
//   };

//   return (
//     <Box bgColor="carousel.bg">
//       <Carousel
//         slideSize={slideSize()}
//         size={["sm", "md"].includes(breakpoint) ? "sm" : "md"}
//         as="center"
//         m="0 auto"
//         pt="20px"
//         autoplay
//         dragFree
//         gap="20px" // スライド間の間隔を設定
//       >
//         {movieCard.map((card, index) => (
//           <CarouselSlide
//             _hover={{ ".child": { opacity: "1" } }}
//             position="relative"
//             as={Center}
//             key={index}
//             h="90%"
//             bgColor="transparent"
//             overflow="hidden"
//             sx={{ cursor: "pointer" }}
//           >
//             <Image
//               src={`/${card.movie_image}`}
//               h="full"
//               aspectRatio="5/3"
//               objectFit="cover"
//               sx={{
//                 transform: "scale(1)",
//                 transition: "transform 0.3s ease-in-out",
//                 "&:hover": {
//                   transform: "scale(1.1)",
//                   transition: "transform 0.3s ease-in-out",
//                 },
//                 "&:not(:hover)": {
//                   transition: "transform 0.3s ease-in-out",
//                 },
//               }}
//             />
//             <Text
//               className="child"
//               position="absolute"
//               bottom={0}
//               left={0}
//               opacity={0}
//               display="flex"
//               justifyContent="center"
//               alignItems="center"
//               w="full"
//               backgroundColor="rgba(0, 0, 0, 0.7)"
//               color="#fff"
//               p="5px 10px"
//               sx={{ transition: "opacity 0.3s ease" }}
//               isTruncated
//             >
//               {card.title}
//             </Text>
//           </CarouselSlide>
//         ))}
//         <Box
//           position="absolute"
//           top={0}
//           left={0}
//           w="full"
//           h="full"
//           pointerEvents="none"
//           boxShadow={
//             colorMode === "dark" ?
//               ["sm", "md"].includes(breakpoint) ?
//                 "inset -50px 0 50px rgba(0, 0, 0, 0.7), inset 50px 0 50px rgba(0, 0, 0, 0.7)" :
//                 "inset -150px 0 50px rgba(0, 0, 0, 0.7), inset 150px 0 50px rgba(0, 0, 0, 0.7)"
//               :
//               ""
//           }
//         />
//       </Carousel>
//     </Box>
//   );
// }





// "use client";
// import { Box, Center, Image, Text, useBreakpoint, useColorMode } from "@yamada-ui/react";
// import React from 'react';
// import { Carousel, CarouselSlide } from "@yamada-ui/carousel";
// import { movieCard } from "@/mock/movie/mock";

// export const TopSlider = () => {

//   const breakpoint = useBreakpoint();
//   const { colorMode } = useColorMode();

//   const slideSize = () => {
//     if (["sm"].includes(breakpoint)) return "100%";
//     if (["md"].includes(breakpoint)) return "50%";
//     if (["lg"].includes(breakpoint)) return "33.3333%";
//     if (["xl"].includes(breakpoint)) return "20%";
//     return "16.6667%"; // 3440x1440のような大画面では一度に6つ表示
//   };

//   const enhancedMovieCard = [...movieCard, ...movieCard]; // スライドを複製してループを強化

//   return (
//     <Box bgColor="carousel.bg">
//       <Carousel
//         slideSize={slideSize()}
//         size={["sm", "md"].includes(breakpoint) ? "sm" : "md"}
//         as="center"
//         m="0 auto"
//         pt="20px"
//         autoplay
//         dragFree
//         loop // ループを有効にする
//         gap="20px" // スライド間の間隔を設定
//       >
//         {enhancedMovieCard.map((card, index) => (
//           <CarouselSlide
//             _hover={{ ".child": { opacity: "1" } }}
//             position="relative"
//             as={Center}
//             key={index}
//             h="90%"
//             bgColor="transparent"
//             overflow="hidden"
//             sx={{ cursor: "pointer" }}
//           >
//             <Image
//               src={`/${card.movie_image}`}
//               h="full"
//               aspectRatio="5/3"
//               objectFit="cover"
//               sx={{
//                 transform: "scale(1)",
//                 transition: "transform 0.3s ease-in-out",
//                 "&:hover": {
//                   transform: "scale(1.1)",
//                   transition: "transform 0.3s ease-in-out",
//                 },
//                 "&:not(:hover)": {
//                   transition: "transform 0.3s ease-in-out",
//                 },
//               }}
//             />
//             <Text
//               className="child"
//               position="absolute"
//               bottom={0}
//               left={0}
//               opacity={0}
//               display="flex"
//               justifyContent="center"
//               alignItems="center"
//               w="full"
//               backgroundColor="rgba(0, 0, 0, 0.7)"
//               color="#fff"
//               p="5px 10px"
//               sx={{ transition: "opacity 0.3s ease" }}
//               isTruncated
//             >
//               {card.title}
//             </Text>
//           </CarouselSlide>
//         ))}
//         <Box
//           position="absolute"
//           top={0}
//           left={0}
//           w="full"
//           h="full"
//           pointerEvents="none"
//           boxShadow={
//             colorMode === "dark" ?
//               ["sm", "md"].includes(breakpoint) ?
//                 "inset -50px 0 50px rgba(0, 0, 0, 0.7), inset 50px 0 50px rgba(0, 0, 0, 0.7)" :
//                 "inset -150px 0 50px rgba(0, 0, 0, 0.7), inset 150px 0 50px rgba(0, 0, 0, 0.7)"
//               :
//               ""
//           }
//         />
//       </Carousel>
//     </Box>
//   );
// }







"use client";
import { Box, Center, Image, Text, useBreakpoint, useColorMode } from "@yamada-ui/react";
import React from 'react';
import { Carousel, CarouselSlide } from "@yamada-ui/carousel";
import { movieCard } from "@/mock/movie/mock";

export const TopSlider = () => {

  const breakpoint = useBreakpoint();
  const { colorMode } = useColorMode();

  const slideSize = () => {
    if (["sm"].includes(breakpoint)) return "100%";
    if (["md"].includes(breakpoint)) return "50%";
    if (["lg"].includes(breakpoint)) return "33.3333%";
    if (["xl"].includes(breakpoint)) return "25%";
    return "16.6667%"; // 3440x1440のような大画面では一度に6つ表示
  };

  const enhancedMovieCard = [...movieCard, ...movieCard, ...movieCard];

  return (
    <Box bgColor="carousel.bg" w="full">
      <Carousel
        slideSize="5%"
        size={["sm", "md"].includes(breakpoint) ? "sm" : "md"}
        as="center"
        m="0 auto"
        pt="10px"
        autoplay
        dragFree
        loop
        gap="20px"
      >
        {enhancedMovieCard.map((card, index) => (
          <CarouselSlide
            _hover={{ ".child": { opacity: "1" } }}
            position="relative"
            as={Center}
            key={index}
            h="90%"
            bgColor="transparent"
            overflow="hidden"
            sx={{ cursor: "pointer" }}
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
              sx={{ transition: "opacity 0.3s ease" }}
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