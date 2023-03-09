import { AspectRatio, Box, Checkbox, Container, Divider, Heading, Hide, Input, Link, SkeletonCircle, SkeletonText, Stack, Text, Tooltip, VStack, HStack,
    Button, Icon, InputGroup, InputLeftElement, InputRightElement, useToast,IconButton
    } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import PriceSlider from "../Components/PriceSlider";
import ProductCard from "../Components/ProductCard";
import SearchPanel from "../Components/SearchPanel";
import { SearchContext } from "../Contexts/SearchContextProvider";
import { ImSearch,ImLocation2, ImCalendar } from 'react-icons/im';

export default function ProductsPage() {
    const { search } = useContext(SearchContext)
    const [products, setproducts] = useState([])
    const [hostel, setHostel] = useState([]);
    const [searchValue, setSearchValue] = useState("")
    const getHostels = async () => {
        try {
            let res = await axios.get("http://localhost:5000/get-hostels")
            console.log(res)
            setproducts(res.data)
        } catch (error) {
            console.error(error)
        }
    }
    
    useEffect(() => {
        const FtchData = async () => {
            try {
                let res = await axios({
                    method: 'get',
                    url: `http://localhost:5000/get-hostels`,
                })
                console.log(res.data.hostels)
                setproducts(res.data.hostels)
                
            } catch (error) {
                console.error(error)
            }
        }
        FtchData()
    }, [search])

    const handleChange = (e)=>{
        const results = ProductCard.filter()
    }
    // const filterItem = (price) => {
    //     const updatedItems = products.filter(curElem) => {
    //         return curElem.price === price;
    //     });
    // }

    
    return <Box px={40}>
        
        <Stack direction='row' spacing={10} mt='50px'>
            <Hide below='md'>
                <VStack w={{ sm: '0%', md: '30%' }} border='0px solid grey' align='flex-start'>
                <InputGroup>
                <InputLeftElement
                    color='black.400'
                    fontSize='1.2em'
                    marginTop={'5px'}
                    children={<Icon as={ImSearch} />}
                />              
                <Input focusBorderColor="white" textColor="white" placeholder="Enter name/location or choose location on map "
                size='lg'
                variant='filled'
                opacity={'0.6'}
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                />
                <InputRightElement  
                    />
                </InputGroup> 
                <Link to='/products'><Button colorScheme='teal' size='lg' >
                    Search
                </Button></Link>

                    <Heading size='md'>Price</Heading>
                    <Container direction='row'><PriceSlider /></Container>
                    <Heading size='md'>Amenities</Heading>
                    <Checkbox size='lg'>
                        Wifi
                    </Checkbox>        

                    <Checkbox size='lg'>
                        Parking
                    </Checkbox>

                    <Checkbox size='lg'>
                        Security
                    </Checkbox>
                    <Checkbox size='lg'>
                        TV
                    </Checkbox>
                    <Checkbox size='lg'>
                        Food and Mess 
                    </Checkbox>
                    <Checkbox size='lg'>
                        Laundry
                    </Checkbox>
                    <Checkbox size='lg'>
                        Kitchen
                    </Checkbox>
                    <Divider orientation='horizontal' />
                    <br />

                    <Heading size='md'>Price</Heading>

                    <Checkbox size='lg' >
                    5000-6000
                    </Checkbox>
                    <Checkbox size='lg'>
                    6000-7000
                    </Checkbox>
                    <Checkbox size='lg'>
                    7000-8000
                    </Checkbox>
                    <Checkbox size='lg'>
                    8000-9000
                    </Checkbox>
                    <Checkbox size='lg'>
                    9000-10000
                    </Checkbox>

                    <Divider orientation='horizontal' />
                    <br />


                    <Heading size='md'>Rating</Heading>
                    <Checkbox size='lg'>
                    ⭐
                    </Checkbox>

                    <Checkbox size='lg'>
                    ⭐⭐
                    </Checkbox>

                    <Checkbox size='lg'>
                    ⭐⭐⭐
                    </Checkbox>
                    <Checkbox size='lg'>
                    ⭐⭐⭐⭐
                    </Checkbox>
                    <Checkbox size='lg'>
                    ⭐⭐⭐⭐⭐
                    </Checkbox>
                    <Divider orientation='horizontal' />
                    <br />



                    <Heading size='md'>Room Type</Heading>
                    <Checkbox size='lg'>
                        Single Room
                    </Checkbox>

                    <Checkbox size='lg'>
                       2 Bed Room
                    </Checkbox>

                    <Checkbox size='lg'>
                        3 Bed Room
                    </Checkbox>
                    <Checkbox size='lg'>
                        4 Bed Room
                    </Checkbox>

                    <Divider orientation='horizontal' />
                    <br />


{/* Distance */}
                    {/* <Heading size='md'>Distance</Heading>
                    <Checkbox size='lg'>
                        0-5 km
                    </Checkbox>

                    <Checkbox size='lg'>
                       0-10 km
                    </Checkbox>

                    <Checkbox size='lg'>
                        0-15 km
                    </Checkbox>
                    <Checkbox size='lg'>
                        0-20 km
                    </Checkbox>
                    <Checkbox size='lg'>
                        0-25 km
                    </Checkbox>
                    <Divider orientation='horizontal' />
                    <br /> */}

                </VStack>
                
            </Hide>
            
            
                {products.length == 0 ? <Box w='100%'><Box padding='6' boxShadow='lg' bg='white'>
                    <SkeletonCircle size='10' />
                    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                </Box>
                    <Box padding='6' boxShadow='lg' bg='white'>
                        <SkeletonCircle size='10' />
                        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                    </Box>
                    <Box padding='6' boxShadow='lg' bg='white'>
                        <SkeletonCircle size='10' />
                        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                    </Box>``
                </Box>
                    :

                    <VStack w={{ base: '100%', sm: '100%', md: '70%' }} border='0px solid'>
                        
                        {products.map((product) => <ProductCard product={product} key={product.id} id={product.id} />)}

                    </VStack>
                
                }
        
        </Stack>


    </Box>

}