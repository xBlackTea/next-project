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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      e_mail: formData.get("e_mail"),
      password: formData.get("password"),
    };
    try {
      const res = await fetch("/server/route/user/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        const json = await res.json();
        console.log(json);
      } else {
        console.error("HTTP-Error: " + res.status);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Box
        w={breakpoint === "sm" ? "100%" : breakpoint === "md" ? "90%" : "70%"}
        m="40px">
        <form onSubmit={handleSubmit}>
          <Text textAlign="center" fontSize="1.5rem" fontWeight="bold">
            LOG IN
          </Text>

          <Box m="20px 0">
            <Text>MAIL</Text>
            <Input name="e_mail" placeholder="メールアドレス" />
          </Box>

          <Box m="20px 0 ">
            <Text>PASSWORD</Text>
            <Input name="password" type="password" placeholder="パスワード" />
            {/* <Input mt="20px" type="password" placeholder="パスワード再入力" /> */}
          </Box>

          <Center>
            <Button
              w="100%"
              m="20px auto"
              colorScheme="secondary"
              type="submit">
              登録
            </Button>
          </Center>
        </form>
      </Box>
    </>
  );
};
