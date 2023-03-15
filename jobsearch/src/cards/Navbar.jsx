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

const Navbar = () => {
  return (
    <Box>
      <Box>
        <Text>GOWORK</Text>
        <ButtonGroup>
          <Button>
            <ChatIcon/>
            <Input placeholder='Search for Job'/>
          </Button>
          <Button>
            <ChatIcon />
            <Input placeholder='Add country or city'/>
          </Button>
          <Button bg={'blue'}>Search</Button>
        </ButtonGroup>
        <ChatIcon />
        <Text>Messages</Text>
        <ChatIcon />
        <Text>Notification</Text>
        <ChatIcon />
        <Text>Me</Text>
      </Box>
      <Divider />
    </Box>
  );
};
export default Navbar;
