import React from 'react';
import {
  Box,
  Text,
  Image,
  Button,
  Badge,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

const HomeCard = ({content}) => {
  return (
      <Box
        maxW={'280px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={4}
        textAlign={'center'}
      >
        <Badge
          ml={200}
          bg={useColorModeValue('gray.50', 'gray.800')}
          fontWeight={'400'}
        >
          {content.job}
        </Badge>
        <VStack mr={180}>
        <Image
          boxSize="40px"
          borderRadius={25}
          objectFit="cover"
          src={content.image}
          alt="Dan Abramov"
        />
        <Text
fontSize='xl'
fontWeight={'bold'}
        >{
            content.title
        }</Text>
        </VStack>
        <Text
          fontSize="xs"
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          mt={2}
        >
          
         {content.description}
        </Text>
        <Button
          mt={2}
          textColor={'tomato'}
          size="sm"
          fontSize={'sm'}
          width={'150px'}
          bg="transparent"
          borderWidth={2}
          rounded={'full'}
          _focus={{
            bg: 'gray.200',
          }}
        >
          {content.msg}
        </Button>
      </Box>
  );
};

export default HomeCard;
