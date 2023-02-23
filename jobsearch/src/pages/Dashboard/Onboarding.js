import {React} from 'react';
import{Box, SimpleGrid } from '@chakra-ui/react';
import OnboardingCard from '../../cards/OnboardingCard';
import {List} from '../../constants/OnboardingCardList';


const Onboarding =()=>{
return(
<Box m={4}>
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="20px">
            {List.map(list => {
              return <OnboardingCard key={list.id} list={list} />;
            })}
          </SimpleGrid>
        </Box>
);
}
export default Onboarding;
