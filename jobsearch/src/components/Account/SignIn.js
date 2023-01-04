import { useState } from 'react';
import {
  Button,
  Checkbox,
  Flex,
  Box,
  Text,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from '@chakra-ui/react';
import { images } from '../../constants';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate= useNavigate();
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
  return (
    <Box p={2} bg={'gray.50'}>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Sign in to your account</Heading>
            <FormControl id="email" pt={8}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder='Enter your email' />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'}onClick={() => navigate("/forgotpassword")}>Forgot password?</Link>
              </Stack>
              <Button colorScheme={'blue'} variant={'solid'}>
                Sign in
              </Button>
              <Flex>
                <Text spacing={4}>Don't have an account?</Text>
                <Link color={'blue.500'} onClick={() => navigate("/register")}>Create one</Link>
              </Flex>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            borderRightRadius={15}
            alt={'Login Image'}
            objectFit={'cover'}
            src={images.login}
          />
        </Flex>
      </Stack>
    </Box>
  );
};
export default SignIn;
