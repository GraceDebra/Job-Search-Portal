import React from 'react'
import {Flex,InputGroup,Input, InputLeftAddon} from '@chakra-ui/react';
import { BiSearchAlt2 } from 'react-icons/bi';
const SearchBar = () => {
  return (
    <Flex flexDir="row">
   <InputGroup>
   <InputLeftAddon
        borderColor="#FFA90A"
        bg="#FFA90A"
        children={<BiSearchAlt2 color="#fff" />}
      />
      <Input
        borderWidth="1.9px"
        w={250}
        placeholder="Company name or keyword"
      />
      
    </InputGroup>
    <InputGroup>
    <InputLeftAddon
        borderColor="#FFA90A"
        children={<BiSearchAlt2 color="#fff" />}
      />
      <Input
        borderWidth="1.9px"
        placeholder="location"
        w={250}
      />
      
    </InputGroup>
  </Flex>
  )
}

export default SearchBar
