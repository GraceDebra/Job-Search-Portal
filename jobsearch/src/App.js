import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import LandingPage from './components/Landing/LandingPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LandingPage/>
    </ChakraProvider>
  );
}

export default App;
