import { Box, Button, Center,InputLeftAddon,InputGroup, Divider, Heading, HStack, Input, Stack, Text, useToast, VStack } from "@chakra-ui/react";
import { useNavigate,useParams } from "react-router-dom";
import React, { useState } from 'react'
import Alert from "../Components/Alert";
import axios from "axios";
import { useLocation } from 'react-router-dom'
import { useContext,useEffect } from 'react';
import { SearchContext } from "../Contexts/SearchContextProvider";
import { AuthContext } from '../Contexts/AuthContextProvider';

export default function CheckoutPage(){

    const [name,setName] = useState('')
    const [checkin,setCheckin] = useState('')
    const [message,setMessage] = useState('')
    const [contact,setContact] = useState('')


    let {isAuth, setpage}=useContext(AuthContext)
    const { search } = useContext(SearchContext)
    const navigate = useNavigate();
    //let isAuth = true;
    const location= useLocation();
    const {hostel}= location.state


    console.log(hostel.roomPrice)
    console.log(hostel.hostel)
    console.log(hostel._id)
    console.log(hostel.roomType)

    const { id } = useParams()
    setpage(id)
    const [products, setproducts] = React.useState([])
    const [room, setRoom] = useState("");

    console.log(hostel)

    React.useEffect(() => {
        const FtchData = async () => {
          try {
            let res = await axios({
              method: 'get',
              url: `https://real-rose-tortoise-tutu.cyclic.app/products?id=${id}`,
            })
            //console.log(res)
            setproducts(res.data[0])
          } catch (error) {
            console.error(error)
          }
        }
        FtchData()
      }, [])



    
    let initialdetails={
        contactnumber:null,
        message:null,
        checkin:null
    }
    const toast = useToast()
    let alertdata={
        title: ' Invalid Input',
        description: "Please enter the input fields",
        status: 'warning',
      }

    const [detail,setdetail]=React.useState(initialdetails)
    //console.log(detail)

    const handlebooking=()=>{
        if(detail.contactnumber==null||detail.message==null||detail.checkin==null) toast(Alert(alertdata))
        else navigate('/payment')
    }

    const handleChange=(el)=>{
        //console.log(el.target.name,el.target.value)
        setdetail({...detail,[el.target.name]:el.target.value})
    }

  let bookdata=JSON.parse(localStorage.getItem('booking'))
  let discount=0;
  let couponadd=0;
  let payableamount=hostel.roomPrice-discount-couponadd;
  
  
    
    return<div>
        
        <Heading size='lg' mt='50px'>Booking Summary</Heading>

        <Stack direction={{base:'column',md:'row'}} w='80%' border='0px solid' margin='auto'marginTop='5%' marginBottom='5%'>
            <VStack border='1px solid grey' w={{base:'100%',md:'60%'}} p={3} spacing={3}>
                <Box textAlign='start'>
                    <Heading size='md'>Who's checking in?</Heading>
                    <Text>We will use these details to share your booking information</Text>

                    <Stack direction='row' marginTop= '30px' mb='30px'>
                        <Input type='text' placeholder="Enter Your Name" name='contactnumber' size="md" onChange={(e)=>{setName(e.target.value)}}/>
                        {/* <Input type='email' placeholder="Email" name='email' onChange={handleChange}/> */}
                    </Stack>

                    <Stack >
                        <InputGroup>
                            <InputLeftAddon>Check In</InputLeftAddon>
                            <Input
                                size="md"
                                type="date"
                                name="checkin"
                                onChange={(e)=>{setCheckin(e.target.value)}}
                            // onChange={handletraveller}
                            //onFocus={(el) => el.target.type = 'date'}
                            />
                        </InputGroup>
                    </Stack>

                    <Stack direction='row' marginTop= '30px'>
                        <Input type='number' placeholder="Contact Number" name='contactnumber' size="md" onChange={(e)=>{setContact(e.target.value)}}/>
                        {/* <Input type='email' placeholder="Email" name='email' onChange={handleChange}/> */}
                    </Stack>

                    <Stack  marginTop= '30px'>
                        <Input type='text' placeholder="Any Message" name='message' size="md" onChange={(e)=>{setMessage(e.target.value)}}/>
                        {/* <Input type='email' placeholder="Email" name='email' onChange={handleChange}/> */}
                    </Stack>

                </Box>

                <Button bg='teal.400'onClick={handlebooking} marginTop='30px'>Proceed to Payment</Button>
            </VStack>
    
            <Box border='1px solid grey' w={{base:'100%',md:'40%'}} p={3}>
               {/* <Heading size='md' textAlign='start'>{bookdata.hotel}</Heading> */}
               <HStack justifyContent='space-between'>
               <Text>Room Category: <b>{hostel.roomType}</b></Text>
               </HStack>
               <Divider />
               <Box>
                    <HStack justifyContent='space-around'>
                        <Text>Total Amount</Text>
                        <Heading size='md'>{hostel.roomPrice}</Heading>
                    </HStack>
                    <HStack justifyContent='space-around'>
                        <Text>Price Drop</Text>
                        <Heading size='md'>-{discount}</Heading>
                    </HStack>
                    <HStack justifyContent='space-around'>
                        <Text>Discount  </Text>
                        <Heading size='md'>-{couponadd}</Heading>
                    </HStack>
                </Box>    
                <Divider></Divider>
                <HStack justifyContent='space-around'>
                    <Text>Payable Amount</Text>
                    <Heading size='md'>{payableamount}</Heading>
                </HStack>
                
            </Box>
        </Stack>
    </div>
}