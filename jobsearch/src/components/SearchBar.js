import React from "react"
import{HStack, InputGroup,InputLeftElement,Input,Box, Button} from "@chakra-ui/react";
import{SearchIcon} from "@chakra-ui/icons"
import { CiLocationOn } from "react-icons/ci";

const SearchBar=()=>{
  return(
<Box borderRadius={25} bgColor='white' m={4} padding={2} w={700} boxShadow={'sm'}>
<HStack alignItems={"center"}>
  <InputGroup pl={2}>
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input type='search' placeholder='Job Title or keyword' w={280} Variant={"none"} />
  </InputGroup>

  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      color='gray.300'
      fontSize='1.2em'
      children={<CiLocationOn />}
    />
    <Input type={'search'} placeholder='Location' w={280} />
  </InputGroup>
  <Button bgColor={'teal.300'} w={200} borderRadius={25} textColor={'white'} >
    Search
  </Button>
</HStack>
</Box>
);
}
export default SearchBar;