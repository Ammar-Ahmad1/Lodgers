import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup, 
  InputRightElement,
  Stack,
  Button,
  Heading,
  useToast,
  Text,
  useColorModeValue,
  Avatar,
} from '@chakra-ui/react';

import { useEffect, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'


export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');
  const [isError, setIsError] = useState('');
  const [file, setFile] = useState('');
 const navigate=useNavigate()
  let initial={
    mobile:null,
    email:null,
    password:null,
  }
  const [showPassword, setShowPassword] = useState(false);
  const [signup, setsignup] = useState(initial)
  

  const toast = useToast()

    const handleSignup=()=>{
      if(name===""||email===""||password===""||file===""){
        toast({
          title: "Error",
          description: "Please Provide all the information",
          status: "error",
          duration: 1000,
          isClosable: true,
        })
        
        console.log("error")
        return
      }

      if(password != cpassword){
        toast({
          title: "Error",
          description: "Password and Confirm password do not match",
          status: "error",
          duration: 1000,
          isClosable: true,
        })
        
        console.log("error")
        return
      }

      const formdata=new FormData()
      formdata.append('name',name)
      formdata.append('email',email)
      formdata.append('password',password)
      formdata.append('image',file)
      console.log(file)
      console.log(formdata)
      fetch('http://localhost:5000/register-user',{
        method:'POST',
        body:formdata
      }).then(res=>res.json())
      .then(data=>{
        console.log(data)
        //go to login page
        navigate('/login')
      }
      )



    };

    const checkValidation = (e) => {
      setcPassword(e.target.value);
      if(password != cpassword){
        setIsError("Confirm and password do not match !");
      } else {
        setIsError("");
      }
      
    };


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Join the Lodgers
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            You are amazing as you are ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
         
            <FormControl id="image" isRequired>
              <Avatar
              borderColor="black"
              borderWidth="2px"
              whileHover="hover"          
              transition="all 200ms ease-in-out"
              _hover={{
                shadow: "xl"
              }}

              position="relative" height="100px" width="100px">
                <Input
                  type="file"
                  height="100%"
                  width="100%"
                  position="absolute"
                  top="0"
                  left="0"
                  opacity="0"
                  aria-hidden="true"
                  accept="image/*"
                  onChange={(e)=>{setFile(e.target.files[0])}}

                />
              </Avatar>
              <Text fontSize="xs" fontWeight="light" color="gray.700">click to upload</Text>
            </FormControl>
            <FormControl id="name" isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input type="name" name='name' onChange={(e)=>{setName(e.target.value)}}/>
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name='email' onChange={(e)=>{setEmail(e.target.value)}}/>
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} name='password' onChange={(e)=>{setPassword(e.target.value)}}/>
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

            <FormControl id="cpassword" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} name='cpassword' onChange={(e) =>checkValidation(e)}/>
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

            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSignup}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a member? <Link to='/login'><Text as='u'>Login</Text></Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}