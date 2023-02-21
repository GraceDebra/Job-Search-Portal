import React from 'react';
import {
  Box,
  Flex,
  Button,
  HStack,
  Image,
  VStack,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { images } from '../../constants';
import SearchBar from '../SearchBar';


const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box bg={'gray.300'} p={16}>
        <Box bg={'gray.50'} borderRadius={25} height="100vh" p={8}>
          <Flex alignItems={'center'} justifyContent={'space-between'}>
            <HStack>
              <Image
                borderRadius="full"
                boxSize="50px"
                src={images.logo}
                alt="logo"
              />
              <Text fontSize={'2xl'}>Jobfy</Text>
            </HStack>
            <Button variant={'solid'} colorScheme={'teal'} size={'sm'}  onClick={() => navigate("/login")}>
              uuuu
            </Button>
          </Flex>
          <Flex>
            <VStack pt={8}>
              <Heading maxWidth={'350px'} noOfLines={[1, 2, 3]}>
                Get hired by the popular teams
              </Heading>
              <Text maxWidth={'350px'} noOfLines={[1, 2]} pt={6}>
                Find job to your interest simply click on search and choose
                category according to your skills
              </Text>
            </VStack>
            <Image
              ml={40}
              h={350}
              w={600}
              src={images.landingimage}
              alt="landing image"
            />
          </Flex>
          <Box>
            <SearchBar/>
            
          </Box>
          <Box>
            <Text fontSize="xl" color={'black'} pt={10}>
              Recent Job Openings Posted
            </Text>
            <HStack spacing={8} pt={4}>
              <Link>
                <Image src={images.facebook} boxSize="40px" objectFit="cover" />
              </Link>
              <Link>
                <Image src={images.twitter} boxSize="40px" objectFit="cover" />
              </Link>
              <Link>
                <Image
                  src={images.microsoft}
                  boxSize="40px"
                  objectFit="cover"
                />
              </Link>
              <Link>
                <Image src={images.google} boxSize="40px" objectFit="cover" />
              </Link>
            </HStack>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default LandingPage;
