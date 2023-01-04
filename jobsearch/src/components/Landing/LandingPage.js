import React from 'react';
import { Box, Flex, Button, HStack, Image, VStack, Heading, Text } from '@chakra-ui/react';
import logo from './assets/landing.jpg'
const LandingPage = () => {
  return (
    <>
      <Box bg={'gray.100'} p={12}>
        <Box bg={'gray.50'} borderRadius={25} height="100vh">
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <HStack alignItems={'center'}
              paddingLeft={4}
              paddingTop={4}
                >
              <Image
                borderRadius="full"
                boxSize="50px"
               
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
            </HStack>
            <Flex alignItems={'center'}>
              <Button variant={'solid'} colorScheme={'teal'} size={'sm'} mr={4}>
                Login
              </Button>
            </Flex>
          </Flex>
          <Flex>
          <VStack>
          <Heading>
            Get hired by the popular teams
          </Heading>
          <Text>Find job to your interest simply click on serach and choose category according to your skills</Text>
          </VStack>
          <Image
           boxSize='200px'
           src={logo}
            alt='Dan Abramov'
             />

          </Flex>
        </Box>
      </Box>
    </>
  );
};
export default LandingPage;
