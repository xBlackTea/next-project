"use client";
import {
  Box,
  Text,
  Input,
  useBreakpoint,
  Center,
  Button,
} from "@yamada-ui/react";
import React from "react";

export const LoginForm = () => {
  const breakpoint = useBreakpoint();
  return (
    <>
      <Box
        w={breakpoint === "sm" ? "100%" : breakpoint === "md" ? "90%" : "70%"}
        m="40px"
      >
        <form action="">
          <Text textAlign="center" fontSize="1.5rem" fontWeight="bold">
            LOG IN
          </Text>

          <Box m="20px 0">
            <Text>MAIL</Text>
            <Input placeholder="メールアドレス" />
          </Box>

          <Box m="20px 0 ">
            <Text>PASSWORD</Text>
            <Input type="password" placeholder="パスワード" />
            {/* <Input mt="20px" type="password" placeholder="パスワード再入力" /> */}
          </Box>

          <Center>
            <Button w="100%" m="20px auto" colorScheme="secondary">
              登録
            </Button>
          </Center>
        </form>
      </Box>
    </>
  );
};
