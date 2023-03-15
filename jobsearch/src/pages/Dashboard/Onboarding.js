import {React} from 'react';
import{Box, SimpleGrid } from '@chakra-ui/react';
import OnboardingCard from '../../cards/OnboardingCard';
import {List} from '../../constants/OnboardingCardList';
import Navbar from '../../cards/Navbar';


const Onboarding =()=>{
return(
  <Box>
    <Navbar/>
<Box m={4}>
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="20px">
            {List.map(list => {
              return <OnboardingCard key={list.id} list={list} />;
            })}
          </SimpleGrid>
        </Box>
        </Box>
);
};
export default Onboarding;
