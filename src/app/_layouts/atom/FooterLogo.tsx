import { Link, Image, Center } from "@yamada-ui/react";
import React from "react";

const FooterLogo = () => {
  return (
    <>
      <Center>
        <Link textDecoration="none" href="/">
          <Image
            display="flex"
            justifyContent="center"
            alignItems="center"
            maxH="65px"
            maxW="90vw"
            src="/HAL_Cinema_Logo_White.svg"
            objectFit="cover"
            alt="HAL_Cinema_Logo_White"
          />
        </Link>
      </Center>
    </>
  );
};

export default FooterLogo;
