import React from 'react';
import {
  Box,
  Text,
  Image,
  Button,
  Badge,
  useColorModeValue,
  VStack,
  ButtonGroup,
} from '@chakra-ui/react';

const HomeCard = ({ content }) => {
  return (
    <Box
      p={2}
      maxW={'280px'}
      w={'full'}
      borderWidth="2px"
      bg={useColorModeValue('white', 'gray.900')}
      rounded={'lg'}
      textAlign={'center'}
    >
      <Badge
        ml={160}
        bg={useColorModeValue('gray.50', 'gray.800')}
        fontWeight={'400'}
      >
        {content.job}
      </Badge>
      <VStack mr={180}>
        <Image
          h={'40px'}
          w={'40px'}
          borderRadius={25}
          src={content.image}
          alt="Dan Abramov"
        />
        <Text pl={4} fontSize="xl" fontWeight={'bold'}>
          {content.title}
        </Text>
      </VStack>
      <Text
        fontSize="xs"
        textAlign={'center'}
        color={useColorModeValue('gray.700', 'gray.400')}
        mt={2}
        maxW={'200px'}
      >
        {content.description}
      </Text>
      <ButtonGroup mt={4}>
        <Button
          textColor={'tomato'}
          size="sm"
          fontSize={'sm'}
          width={'100px'}
          bg="transparent"
          borderWidth={2}
          rounded={'full'}
          _focus={{
            bg: 'gray.200',
          }}
        >
          {content.msg}
        </Button>
        <Button
          fontSize={'sm'}
          rounded={'full'}
          size="sm"
          width={'100px'}
          borderWidth={2}
          _focus={{
            bg: 'gray.200',
          }}
        >
          DETAILS
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default HomeCard;
