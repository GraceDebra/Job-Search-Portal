import {useState }  from 'react';
import {
  Button,
  useColorModeValue,
  Flex,
  HStack,
  Box,
  Text,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from '@chakra-ui/react';
import { images } from '../../constants';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate  } from 'react-router-dom';
import {auth} from '../../firebase'
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import{signInWithGoogle} from '../../firebase'
import {useAuthValue} from '../../utils/AuthContext'


const SignUp = () => {

    const navigate= useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showCPassword, setShowCPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('')
  const {setTimeActive} = useAuthValue()

  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== ''){
      if (password !== confirmPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }

  const register = e => {
    e.preventDefault()
    setError('')
    if(validatePassword()) {
      // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)   
          .then(() => {
            //setTimeActive(true)
            navigate('/verifyemail')
          }).catch((err) => alert(err.message))
        })
        .catch(err => setError(err.message))
    }
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }
  return (
    <Box p={2} bg={'gray.50'}>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} >
      <Flex flex={1}>
          <Image
            borderRightRadius={15}
            alt={'Login Image'}
            objectFit={'cover'}
            src={images.login}
          />
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
        <Text>{error}</Text>  
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
              {/*
                <FormControl id="firstName" isRequired>
                  <FormLabel>Full Name</FormLabel>
                  <Input type="text" value={fname}
          onChange={(e) => setFname(e.target.value)} />
                </FormControl>*/}
              </Box>
              <Box>
              </Box>
            </HStack>
            <form id="login-form"></form>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email}
          onChange={(e) => setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} value={password}
          onChange={(e) => setPassword(e.target.value)}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input type={showCPassword ? 'text' : 'password'} value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowCPassword((showCPassword) => !showCPassword)
                    }>
                    {showCPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                onClick={register}
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',

                }}
                >
                Sign up
              </Button>
              <Text> Or continue with</Text>
              <Button size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',

                }}  onClick={signInWithGoogle}>SignUp with google</Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'} onClick={() => navigate("/login")}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
        </Flex>
        
      </Stack>
    </Box>
  );
};
export default SignUp;
