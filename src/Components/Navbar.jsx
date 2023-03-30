import { ReactNode } from 'react';
import Logo from "../Assets/Logo.png"
import {
  Box,
  Flex,
  Avatar,
  Linki,
  Button,
  Menu,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  ButtonGroup,
  Image,
  Card,
  Divider,
  IconButton,
  Heading,
  HStack,
  VStack,
  Grid,
  GridItem,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react';
import {BellIcon,RepeatClockIcon, InfoIcon, QuestionIcon } from '@chakra-ui/icons'

import { AddIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContextProvider';

import React, { useState } from 'react';



const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);



  

 





export default function Navbar() {
  const navigate=useNavigate();
  const [loginbuttonColor, setLoginButtonColor] = useState('');
  const [signupButtonColor, setSignupButtonColor] = useState('');
  
  const { isOpen, onToggle, onClose } = useDisclosure()

  const handleClick1 = () => {
    if (loginbuttonColor === '') {
      setLoginButtonColor('black');
      setSignupButtonColor('');
    }
  };

  const handleClick2 = () => {
    if (signupButtonColor === '') {
      setSignupButtonColor('black');
      setLoginButtonColor('');
    }
  };
  const { colorMode, toggleColorMode } = useColorMode();
 // const { isOpen, onOpen, onClose } = useDisclosure();
 const {isAuth,Logout}=useContext(AuthContext)
 let userdata=JSON.parse(localStorage.getItem('booking'))
let user=JSON.parse(localStorage.getItem("user"))
 const handleLogout=()=>{
  setLoginButtonColor('');
  setSignupButtonColor('');
  Logout();
  localStorage.clear()
  navigate(`/`)
}

  return (
    <div style={{ position: 'sticky', top: '0px', zIndex:'1' }}>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Link to='/'><Box><Image src={Logo} width='8em' alt='logo' /></Box></Link>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={4}>

              <Link to='/userbookings'>
                <Button colorScheme='teal' variant='ghost'>
                  <Icon as={RepeatClockIcon}  paddingRight='4px'/>My Bookings
                </Button>
              </Link> 


                <Popover
                  returnFocusOnClose={false}
                  isOpen={isOpen}
                  onClose={onClose}
                  placement='bottom'
                  closeOnBlur={false}
                >
                  <PopoverTrigger>
                  <Button colorScheme='teal' variant='ghost' onClick={onToggle}>
                    <Icon as={BellIcon}  paddingRight='4px'/>Notifications
                  </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverHeader fontWeight='semibold'>Booking Requests</PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />


                    {/* apply .map on below code  */}
 

                    <Divider />
                    <PopoverBody>
                      <Grid templateColumns='repeat(2, 1fr)'>
                          <GridItem>
                            <Heading size='sm' textAlign='left'>Shaheen Hostel</Heading>
                            <Text textAlign='start'>Double Seater</Text>
                            <Text fontSize='xs' textAlign='start'>12-11-2023</Text>
                          </GridItem>
                          <GridItem>
                            <Text textAlign='end' fontSize='sm'>Rs. 12000/mo</Text>
                            
                          </GridItem> 
                      </Grid>
                    </PopoverBody>

                    <PopoverFooter display='flex' justifyContent='flex-end'>
                      <ButtonGroup size='sm'>
                        <Button variant='outline'>Accept</Button>
                        <Button colorScheme='red'>Reject</Button>
                      </ButtonGroup>
                    </PopoverFooter>

    
                    <PopoverBody>
                      <Grid templateColumns='repeat(2, 1fr)'>
                          <GridItem>
                            <Stat textAlign='left'>
                              <StatLabel >Ghazali Hostel</StatLabel>
                              <StatNumber fontSize='lg'>Double Seater</StatNumber>
                              <StatHelpText>09-30-2023</StatHelpText>
                            </Stat>
                          </GridItem>
                          <GridItem>
                            <Text textAlign='end' fontSize='sm'>Rs. 12000/mo</Text>
                            
                          </GridItem> 
                      </Grid>
                    </PopoverBody>

                    <PopoverFooter display='flex' justifyContent='flex-end'>
                      <ButtonGroup size='sm'>
                        <Button variant='outline'>Accept</Button>
                        <Button colorScheme='red'>Reject</Button>
                      </ButtonGroup>
                    </PopoverFooter>

                  </PopoverContent>
                </Popover>

              <Link to='/about'>
                <Button colorScheme='teal' variant='ghost'>
                  <Icon as={InfoIcon}  paddingRight='4px'/>About
                </Button>
              </Link>       
                
              <Link to='/help'>
                <Button colorScheme='teal' variant='ghost'>
                  <Icon as={QuestionIcon}  paddingRight='4px'/>Help
                </Button>
              </Link>       
              

              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Link to='/owner'>
                <Button
                disabled={isAuth?true:false}
                  variant={'outline'}
                  colorScheme={'teal'}
                  size={'md'}
                  mr={4}>
                  List your property
                </Button>
              </Link>
{!user?
              <Link to='/login'>
                <Button
                disabled={isAuth?true:false}
                  variant={'outline'}
                  colorScheme={'teal'}
                  size={'md'}
                  mr={4}
                  style={{ color: loginbuttonColor }} onClick={handleClick1}>
                  Login
                </Button>

              </Link>
              :null}
              {!user?
              <Link to='/signup'>
                <Button
                disabled={isAuth?true:false}
                  variant={'outline'}
                  colorScheme={'teal'}
                  size={'md'}
                  mr={4}
                  style={{ color: signupButtonColor }} onClick={handleClick2}>
                  Signup
                </Button>
              </Link>
:null}
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://wallpaperaccess.com/full/226302.jpg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://wallpaperaccess.com/full/226302.jpg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{userdata?.mobile}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <Link to='/admin'><MenuItem>Admin User</MenuItem></Link>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}