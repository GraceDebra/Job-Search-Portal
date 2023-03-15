import React from 'react';
import { ChatIcon } from '@chakra-ui/icons';
import {
  Box,
  HStack,
  Image,
  VStack,
  Badge,
  Text,
  Flex,
  Divider,
  Spacer,
  ButtonGroup,
  Button,
  Input,
} from '@chakra-ui/react';


const OnboardingCard = ({ list }) => {
  return (
    
    <Box p={4} borderWidth={1} boxShadow={'sm'}>
      <HStack align={'center'}>
        <Image src={list.image} h={'80px'} w={'80px'} borderRadius={5} />
        <VStack>
          <Text color={'black'}>{list.post}</Text>
          <HStack pb={2}>
            <Text>{list.title}</Text>
            <Spacer/>
            <Text>{list.location}</Text>
        
         </HStack>
        </VStack>
      </HStack>
      <Flex  pb={2} >
        <Badge textColor={'blue'} fontSize={'2xs'}>{list.type}</Badge>
        <Spacer/>
        <Badge textColor={'blue'} fontSize={'2xs'}>{list.type}</Badge>
        <Spacer/>
        <Badge textColor={'blue'} fontSize={'2xs'}>{list.type}</Badge>
      </Flex>
      <Text pb={2}>{list.msg}</Text>
      <Divider pb={2}/>
      <HStack pb={2}>
        <Text>{list.time}</Text>
        <Text>.</Text>
        <Text>{list.application}</Text>
        <Spacer/>
        <ChatIcon />
      </HStack>
    </Box>
  
  );
};
export default OnboardingCard;
