import * as React from 'react';
import { Box, Button, chakra, Flex, FormControl, FormLabel, Heading, Input, Stack, useColorModeValue } from '@chakra-ui/react';
import PasswordField from './PasswordField';

export default function Login() {
  return (
    <Flex
      bg={useColorModeValue('gray.50', 'inherit')}
      minH='100vh'
      py='12'
      px={{ base: '4', lg: '8' }}
      alignItems='center'
      justifyContent='center'
    >
      <Flex minW={{ base: 'auto', lg: 'xl' }} direction='column'>
        <Heading size='4xl' textAlign='center' mb={{ base: '8', lg: '16' }}>
          Todo App
        </Heading>
        <Heading textAlign='center' mb='8' size='xl' fontWeight='medium'>
          Log in to your account
        </Heading>
        <Box bg={useColorModeValue('white', 'gray.700')} py='8' px={{ base: '4', md: '10' }} shadow='base' rounded={{ sm: 'lg' }}>
          <chakra.form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Stack spacing='6'>
              <FormControl id='email'>
                <FormLabel>Email address</FormLabel>
                <Input name='email' type='email' autoComplete='email' required />
              </FormControl>
              <PasswordField />
              <Button type='submit' colorScheme='blue' size='lg' fontSize='md'>
                Sign in
              </Button>
            </Stack>
          </chakra.form>
        </Box>
      </Flex>
    </Flex>
  );
}
