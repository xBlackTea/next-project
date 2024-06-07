import React from "react";
import { Center } from "@yamada-ui/react";
import { LoginForm } from "./_components/LoginForm";

const Page = () => {
  return (
    <>
      <Center w="95%" maxW="1500px" m="auto">
        <LoginForm />
      </Center>
    </>
  );
};

export default Page;
