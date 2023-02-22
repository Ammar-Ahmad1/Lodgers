import {
    Flex,
    Box,
    HStack,
    PinInput,
    PinInputField,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
  export default function SimpleCard() {
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Setting Up New Password</Heading>
            
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
            
            <FormControl id="otp">
                <FormLabel>Enter OTP</FormLabel>
                <HStack>
                    <PinInput>
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                    </PinInput>
                </HStack>
              </FormControl>
              
              <FormControl id="newpassword">
                <FormLabel>New Password</FormLabel>
                <Input type="newpassword" />
              </FormControl>
              <FormControl id="confirmpassword">
                <FormLabel>Confirm Password</FormLabel>
                <Input type="confirmpassword" />
              </FormControl>

              <Stack spacing={10}>
               
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                    
                <Link to='/login'>Confirm</Link>
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }