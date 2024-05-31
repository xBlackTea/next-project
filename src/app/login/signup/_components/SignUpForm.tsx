import { DatePicker } from "@yamada-ui/calendar";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Input,
  Radio,
  RadioGroup,
  Text,
} from "@yamada-ui/react";
import React from "react";

export const SignUpForm = () => {
  return (
    <>
      <Box w="90%" m="40px">
        <Text textAlign="center" fontSize="1.5rem" fontWeight="bold">
          SIGN UP
        </Text>

        <form action="">
          <Box m="20px 0">
            <Text>NICKNAME</Text>
            <Input placeholder="ニックネーム" />
          </Box>

          <Box m="20px 0">
            <Text>MAIL</Text>
            <Input placeholder="メールアドレス" />
          </Box>

          <Box m="20px 0 ">
            <Text>PASSWORD</Text>
            <Input placeholder="パスワード" />
          </Box>

          <Box m="20px 0">
            <Text>BIRTHDAY</Text>
            <DatePicker placeholder="誕生日" defaultType="year" />
          </Box>

          <Box m="20px 0">
            <Text>GENDER</Text>
            <RadioGroup direction="row">
              <Radio value="男性">男性</Radio>
              <Radio value="女性">女性</Radio>
              <Radio value="その他">その他</Radio>
            </RadioGroup>
          </Box>

          <Box m="20px 0">
            <Text>STUDENT</Text>
            <Checkbox>学生</Checkbox>
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
