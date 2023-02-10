import { AspectRatio, Box, Checkbox, Container, Divider, Heading, Hide, Input, Link, SkeletonCircle, SkeletonText, Stack, Text, Tooltip, VStack, HStack } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import PriceSlider from "../Components/PriceSlider";
import ProductCard from "../Components/ProductCard";
import SearchPanel from "../Components/SearchPanel";
import { SearchContext } from "../Contexts/SearchContextProvider";


export default function ProductsPage() {
    const { search } = useContext(SearchContext)
    const [products, setproducts] = useState([])

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



    return <Box px={40}>
        
        <Stack direction='row' spacing={10} mt='50px'>
            <Hide below='md'>
                <VStack w={{ sm: '0%', md: '30%' }} border='0px solid grey' align='flex-start'>
                    <SearchPanel/>
                    <Heading size='md'>Price</Heading>
                    <Container direction='row'><PriceSlider /></Container>
                    <Heading size='md'>Amenities</Heading>
                    <Checkbox size='lg'>
                        Attached Washroom
                    </Checkbox>
                   

                    <Checkbox size='lg'>
                        Air Conditioned
                    </Checkbox>

                    <Checkbox size='lg'>
                        Study Table
                    </Checkbox>
                    <Checkbox size='lg'>
                        Wifi
                    </Checkbox>
                    <Checkbox size='lg'>
                        Food and Mess 
                    </Checkbox>
                    <Checkbox size='lg'>
                        Transport
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
                        Attach Bath
                    </Checkbox>
                    <Checkbox size='lg'>
                        Air Condition Room
                    </Checkbox>
                    <Divider orientation='horizontal' />
                    <br />


{/* Distance */}
                    <Heading size='md'>Distance</Heading>
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
                    <br />

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