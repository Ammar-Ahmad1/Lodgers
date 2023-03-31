import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin, SiMessenger } from 'react-icons/si';
import { VStack ,HStack,Box, Button, Center, Stack, Text,Card,Image,CardBody,Heading,CardFooter } from '@chakra-ui/react';
import axios from 'axios'
import { useContext, useEffect } from "react";
import { useState } from "react";
import Axios from 'axios'

import { SearchContext } from "../Contexts/SearchContextProvider";
import { useNavigate } from 'react-router-dom';
export default function All() {

    const { search } = useContext(SearchContext)
    const [bookings, setBookings] = useState([])
    const [checkBooking, setCheckBooking] = useState([])
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);


    let user=JSON.parse(localStorage.getItem("user"))
    const id = user._id
    console.log(id);
    
   


    // useEffect(() => {
    //     const FtchData = async () => {
    //         try {
    //             let res = await axios({
    //                 method: 'get',
    //                 url: `http://localhost:5000/get-bookings-by-users/${id}`,
    //             })
    //             setBookings(res.data.booking)
    //             setCheckBooking(res.data.booking)          
    //             console.log(res.data.booking)
    //             console.log(bookings)
    //         } 
    //         catch (error) {
    //             console.error(error)
    //         }
    //     }
    //     FtchData()
    // }, [search])

    useEffect(() => {
        const FtchData = async () => {
            try {
                let res = await axios({
                    method: 'get',
                    url: `http://localhost:5000/get-bookings-by-owner/${id}`,
                })
                setBookings(res.data.booking)
                setCheckBooking(res.data.booking)          
                console.log(res.data.booking)
                console.log(bookings)
                //filter out the booking where status is true
                let filteredBookings=res.data.booking.filter((booking)=>booking.status===true)
                console.log(filteredBookings)
                setBookings(filteredBookings)

            } 
            catch (error) {
                console.error(error)
            }
        }
        FtchData()
    }, [search])

return (
    <div style={{margin: '100px'}}>
    <Heading 
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'200%'}
            textAlign='left'
            >
            <Text as={'span'} color={'black'} fontWeight='bold' opacity='0.7'>
              Your Bookings
            </Text>
    </Heading>
    {bookings?bookings.map((booking,i)=>(
        <Card 
        width='100%'
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
    >
    <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={booking.roomImage}
        alt='Caffe Latte'
    />
        <VStack ml='135px'>
            <Heading size='md' textAlign='left' mb='25px' >Hostel</Heading>
            <Text size='md' textAlign='left'>{booking.hostelName}</Text>
        </VStack>

        <VStack ml='135px'>
            <Heading size='md' textAlign='left' mb='25px'>Room Type</Heading>
            <Text size='md' textAlign='left'>{booking.roomType}</Text>
        </VStack>

        <VStack ml='135px'>
            <Heading size='md' textAlign='left' mb='25px'>Check-in</Heading>
            <Text size='md' textAlign='left' >{booking.checkIn}</Text>
        </VStack>

        <VStack ml='135px'>
            <Heading size='md' textAlign='left' mb='25px'>Price</Heading>
            <Text size='md' textAlign='left' >{booking.price}</Text>
        </VStack>

        <VStack ml='135px'>
            <Heading size='md' textAlign='left' mb='25px'>Status</Heading> 
            <Box bgColor='red.400' width='100px' textAlign='center' border='2px' borderRadius='md'>
                <Text size='md' textAlign='center' >Status</Text>
            </Box>
        </VStack>
         
    </Card>

    )):(
        <Text>No Bookings</Text>
    )

    }

        </div>

    
  
  );
}