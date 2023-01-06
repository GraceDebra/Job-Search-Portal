import React from 'react'
import { Box, SimpleGrid ,Heading,Text} from '@chakra-ui/react'
import HomeCard from '../cards/HomeCard'
import { data } from '../constants/Data'
const Home = () => {
  return (
    <Box>
    <Heading>
        Recommended Companies
    </Heading>
    <Text>Based on your profile, company preferences and recent activity</Text>
    <Box px="5vw">
    <SimpleGrid columns={[1, 2, 3, 4]} spacing="auto"  >
      {data.map(content => {
        return <HomeCard key={content.id} content={content} />;
      })}
    </SimpleGrid>
  </Box>
  </Box>
  )
}

export default Home
