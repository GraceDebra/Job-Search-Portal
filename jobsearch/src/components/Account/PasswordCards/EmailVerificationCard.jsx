import { Center, Heading } from '@chakra-ui/react';
import {
  Button,
  Text,
  Flex,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {useAuthValue} from '../../../utils/AuthContext'
import {useState, useEffect} from 'react'
import {auth} from '../../../firebase'
import {sendEmailVerification} from 'firebase/auth';


const VerifyEmailForm=()=>{

    
  const {currentUser} = useAuthValue()
  const [time, setTime] = useState(60)
  const {timeActive, setTimeActive} = useAuthValue()
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      currentUser?.reload()
      .then(() => {
        if(currentUser?.emailVerified){
          clearInterval(interval)
          navigate('/login')
        }
      })
      .catch((err) => {
        alert(err.message)
      })
    }, 1000)
  }, [navigate, currentUser])

  useEffect(() => {
    let interval = null
    if(timeActive && time !== 0 ){
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    }else if(time === 0){
      setTimeActive(false)
      setTime(60)
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [timeActive, time, setTimeActive])

  const resendEmailVerification = () => {
    sendEmailVerification(auth.currentUser)
    .then(() => {
      setTimeActive(true)
    }).catch((err) => {
      alert(err.message)
    })
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'sm'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={10}>
        <Center>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Verify your Email Address
          </Heading>
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}>
          A Verification email has been sent to
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          fontWeight="bold"
          color={useColorModeValue('gray.800', 'gray.400')}>
         {currentUser?.email}
        </Center>
        <Text>Follow the instruction in the email to verify your account</Text>
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            onClick={resendEmailVerification}
          disabled={timeActive}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
           Resend Email {timeActive && time}
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
export default VerifyEmailForm