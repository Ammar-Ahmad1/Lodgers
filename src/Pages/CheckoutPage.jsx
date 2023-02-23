import { Box, Button, Center,InputLeftAddon,InputGroup, Divider, Heading, HStack, Input, Stack, Text, useToast, VStack } from "@chakra-ui/react";
import { useNavigate,useParams } from "react-router-dom";
import React from 'react'
import Alert from "../Components/Alert";

export default function CheckoutPage(){
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
    const navigate=useNavigate();

    const handlebooking=()=>{
        if(detail.contactnumber==null||detail.message==null||detail.checkin==null) toast(Alert(alertdata))
        else navigate('/payment')
    }

    const handleChange=(el)=>{
        //console.log(el.target.name,el.target.value)
        setdetail({...detail,[el.target.name]:el.target.value})
    }

  let bookdata=JSON.parse(localStorage.getItem('booking'))
  let totalprice=100;
  let discount=totalprice*(5/100);
  let couponadd=0;
  let payableamount=totalprice-discount-couponadd;
  
  
    
    return<div>
        
        <Heading size='lg' mt='50px'>Booking Summary</Heading>

        <Stack direction={{base:'column',md:'row'}} w='80%' border='0px solid' margin='auto'marginTop='5%' marginBottom='5%'>
            <VStack border='1px solid grey' w={{base:'100%',md:'60%'}} p={3} spacing={3}>
                <Box textAlign='start'>
                    <Heading size='md'>Who's checking in?</Heading>
                    <Text>We will use these details to share your booking information</Text>
                    <Stack >
                        <InputGroup>
                            <InputLeftAddon>Check In</InputLeftAddon>
                            <Input
                                onChange={handleChange}
                                size="md"
                                type="date"
                                name="checkin"
                        
                            // onChange={handletraveller}
                            //onFocus={(el) => el.target.type = 'date'}
                            />
                        </InputGroup>
                    </Stack>
                    <Stack direction='row' marginTop= '30px'>
                        <Input type='number' placeholder="Contact Number" name='contactnumber' size="md" onChange={handleChange}/>
                        {/* <Input type='email' placeholder="Email" name='email' onChange={handleChange}/> */}
                    </Stack>
                    <Stack  marginTop= '30px'>
                        <Input type='text' placeholder="Any Message" name='message' size="md" onChange={handleChange}/>
                        {/* <Input type='email' placeholder="Email" name='email' onChange={handleChange}/> */}
                    </Stack>
                </Box>
                <Button bg='teal.400'onClick={handlebooking} marginTop='30px'>Proceed to Payment</Button>
            </VStack>
    
            <Box border='1px solid grey' w={{base:'100%',md:'40%'}} p={3}>
               {/* <Heading size='md' textAlign='start'>{bookdata.hotel}</Heading> */}
               <HStack justifyContent='space-between'>
               <Text>{'Double Bed'} Room |  Guests : {'2'}</Text>
               </HStack>
               <Divider />
               <Box>
                    <HStack justifyContent='space-around'>
                        <Text>Total Amount</Text>
                        <Heading size='md'>{totalprice}</Heading>
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