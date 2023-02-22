import React from 'react';
import { ChatIcon } from '@chakra-ui/icons';
import {Box, HStack, Image, VStack, Badge, Text, Flex, BadgeGroup, Divider} from '@chakra-ui/react'


const OnboardingCard = ({list}) => {

    return(
        <Box>
            <HStack>
            <Image src={list.image}
            h={'40px'}
            w={'40px'}
            borderRadius={25}/>
            <VStack>
            <Text>
                {list.post}

            </Text>
            <HStack>
            <Text>
                {list.title}
            </Text>
            <Text>
                {list.location}

            </Text>
            </HStack>
            </VStack>
            </HStack>
            <Flex direction={'row'}>
            
                <Badge>
                    {list.type}
                </Badge>
                <Badge>
                    {list.type}
                </Badge><Badge>
                    {list.type}
                </Badge>
        
            </Flex>
            <Text>
                {list.msg}
            </Text>
            <Divider/>
            <HStack>
                <Text>
                    {list.time}
                </Text>
                <Text>
                    {list.applications}
                </Text>
                <ChatIcon/>
            </HStack>

        </Box>


    )
}
export default OnboardingCard;
