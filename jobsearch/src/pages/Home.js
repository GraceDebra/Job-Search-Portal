import React from 'react';
import {
  Box,
  SimpleGrid,
  Input,
  useColorModeValue,
  Spacer,
  InputRightAddon,
  InputGroup,
  Image,
  Heading,
  Button,
  Text,
  VStack,
  Flex,
  HStack,
  Link,
} from '@chakra-ui/react';
import HomeCard from '../cards/HomeCard';
import { data } from '../constants/Data';
import { images } from '../constants';
import { BiSearchAlt2 } from 'react-icons/bi';

const Home = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('pink.800', 'white');
  return (
    <Box bg={'transparent'}>
      <Flex minWidth="max-content" alignItems="center">
        <HStack p="2">
          <Image
            borderRadius="full"
            boxSize="50px"
            src={images.logo}
            alt="logo"
          />
          <Text fontSize={'2xl'}>Jobfy</Text>
        </HStack>
        <HStack gap="2" px={16}>
          <Link
            fontSize={'sm'}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
            }}
          >
            Find jobs
          </Link>
          <Link
            fontSize={'sm'}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
            }}
          >
            Browse Companies
          </Link>
          <Link
            fontSize={'sm'}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
            }}
          >
            Trending
          </Link>
        </HStack>
        <Spacer />
        <Button colorScheme="teal" pr={4}>
          Logout
        </Button>
      </Flex>
      <Box bg={'gray.300'} boxShadow={'sm'} p={10}>
        <VStack>
          <Heading fontSize="3xl" w={'400px'}>
            Find your dream Companies
          </Heading>
          <Text fontSize="xs">Find the dream Companies you dream work for</Text>
        </VStack>
        <Flex pt={6} width={600}>
          <InputGroup>
            <Input
              borderWidth="1.9px"
              placeholder="Search job by category, location or company name"
              w={420}
            />
            <InputRightAddon
              borderColor="#FFA90A"
              bg="#FFA90A"
              children={<BiSearchAlt2 color="#fff" />}
            />
          </InputGroup>
        </Flex>
        <Text fontSize="xs" pt={4}>
          Popular: Twitter, Microsoft, Apple, Facebook
        </Text>
      </Box>
      <Box px={55} py={50}>
        <Text
          fontSize="lg"
          fontWeight={'bold'}
          fontStyle={'normal'}
          fontFamily={'body'}
        >
          Recommended Companies
        </Text>
        <Text fontSize="xs">
          Based on your profile, company preferences and recent activity
        </Text>
        <Box pt={4}>
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="20px">
            {data.map(content => {
              return <HomeCard key={content.id} content={content} />;
            })}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
