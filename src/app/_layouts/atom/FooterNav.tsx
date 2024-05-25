import { Box, Link } from "@yamada-ui/react";
import { navList, footerNav } from "@/list/navList";
import React from "react";

const FooterNav = () => {
  return (
    <>
      <Box>
        {navList.map((data: footerNav) => (
          <Link
            key={data.id}
            href={data.navLink}
            textDecoration="none"
            m="20px"
            fontSize="1.3rem"
            color="#fff"
          >
            {data.navText}
          </Link>
        ))}
      </Box>
    </>
  );
};

export default FooterNav;
