import React from 'react';
import { Box, Input, Button } from '@yamada-ui/react';

const Page = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="70vh">
      <Box p={4} w="100%" maxWidth={800} mx="auto" border="1px solid #ccc" borderRadius={8} boxShadow="0px 4px 8px rgba(0, 0, 0, 0.8)">

        <Box mb={3} textAlign="center" m={10}>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            name="email"
            w="100%"
            placeholder='Email'
            textAlign="left"
            required
            />
        </Box>

        <Box mb={3} textAlign="center" m={10}>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            id="password"
            name="password"
            w="100%"
            placeholder='Password'
            textAlign="left"
            required
            />
        </Box>

        <Box textAlign="center" m={5}>
          <Button
            type="submit"
            variant="primary"
            width={300} bg="blue.400"
            color="white"
            _hover={{ bg: "blue.800" }}
            >
              Login
          </Button>
        </Box>

      </Box>
    </Box>
  );
};

export default Page;
