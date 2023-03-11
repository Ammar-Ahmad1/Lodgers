import {
  AspectRatio,
  Box,
  Checkbox,
  Container,
  Divider,
  Heading,
  Hide,
  Input,
  Link,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
  Icon,
  Tooltip,
  VStack,
  HStack,
  InputGroup, InputLeftElement, InputRightElement, Button,
} from "@chakra-ui/react";
import axios from "axios";
import { ImSearch } from 'react-icons/im';
import { useContext, useEffect } from "react";
import { useState } from "react";
import PriceSlider from "../Components/PriceSlider";
import ProductCard from "../Components/ProductCard";
import SearchPanel from "../Components/SearchPanel";
import { SearchContext } from "../Contexts/SearchContextProvider";

export default function ProductsPage() {
//   const { search } = useContext(SearchContext);
  const [products, setproducts] = useState([]);
  const [hostels, setHostels] = useState([]);
  const [search, setSearch] = useState('')
  const [amenities, setAmenities] = useState({
    wifi: false,
    parking: false,
    security: false,
    tv: false,
    food: false,
    laundry: false,
    kitchen: false,
  });

  const [price, setPrice] = useState({
    price1: false,
    price2: false,
    price3: false,
    price4: false,
    price5: false,
});

  const [text, setText] = useState({
    title: ""
  });


  

  const getHostels = async () => {
    try {
      let res = await axios.get("http://localhost:5000/get-hostels");
      console.log(res);
      setproducts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const FtchData = async () => {
      try {
        let res = await axios({
          method: "get",
          url: `http://localhost:5000/get-hostels`,
        });
        console.log(res.data.hostels);
        setproducts(res.data.hostels);
        setHostels(res.data.hostels)
        // console.error(res.data.hostels);
      } catch (error) {
        console.error(error);
      }
    };
    FtchData();
  }, [search]);

  // const filterItem = (price) => {
  //     const updatedItems = products.filter(curElem) => {
  //         return curElem.price === price;
  //     });
  // }
  
  const toggleAmeneties = (amenity, value) => {

    let obj = amenities
    obj[amenity] = value
    setAmenities(obj)
    // filterHostelbyAmeneties(amenity)
    // console.log(filterByFeatures(products, amenities));
    setHostels(filterByFeatures(products, amenities)) 
  } 

  const toggleText = (name, value) => {
    let obj = text
    obj[name] = value
    setText(obj)
    // filterHostelbyAmeneties(amenity)
    // console.log(filterByFeatures(products, amenities));
    setHostels(filterByText(products, text)) 
  } 




  function filterByFeatures(arr, features) {
    return arr.filter(item => {
      for (let feature in features) {
        if (features[feature] == true &&  item.features[feature] != features[feature]) {
      
          return false;
        }
      }
      return true;
    });
  }

  function filterByText(arr, features) {
    return arr.filter(item => {
      for (let feature in features) {
        if (features[feature] == item.name &&  item.features[feature] != features[feature] ) {
          return true;
        }
      }
      return false;
    });
  }



//   const filterHostelbyAmeneties = (amenity) => {
//     // console.log(products.filter(hostel => hostel.features.wifi == false))

//     setHostels(hostels.filter(hostel => hostel.features[amenity] == true))
//   }

  return (
    <Box px={40}>
      <Stack direction="row" spacing={10} mt="50px">
        <Hide below="md">
          <VStack
            w={{ sm: "0%", md: "30%" }}
            border="0px solid grey"
            align="flex-start"
          >
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
                onChange={(e)=>{toggleText("title",e.target.value)}}
                
                
                />
                <InputRightElement  
                    />
                </InputGroup> 
                <Button colorScheme='teal' size='lg' >
                    Search
                </Button>

            <Heading size="md">Amenities</Heading>
            <Checkbox size="lg" onChange={(e)=> toggleAmeneties("wifi", e.target.checked)}>
              Wifi
            </Checkbox>


            <Checkbox size="lg" onChange={(e)=> toggleAmeneties("parking", e.target.checked)}>Parking</Checkbox>
            <Checkbox size="lg" onChange={(e)=> toggleAmeneties("security", e.target.checked)}>Security</Checkbox>
            <Checkbox size="lg" onChange={(e)=> toggleAmeneties("tv", e.target.checked)}>TV</Checkbox>
            <Checkbox size="lg" onChange={(e)=> toggleAmeneties("food", e.target.checked)}>Food and Mess</Checkbox>
            <Checkbox size="lg" onChange={(e)=> toggleAmeneties("laundry", e.target.checked)}>Laundry</Checkbox>
            <Checkbox size="lg" onChange={(e)=> toggleAmeneties("kitchen", e.target.checked)}>Kitchen</Checkbox>
            <Checkbox size="lg" >Prayer Room</Checkbox>
            <Checkbox size="lg" >Separate Study Room</Checkbox>
            <Checkbox size="lg" >Refridgerator</Checkbox>
            
            <Divider orientation="horizontal" />
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

        {products.length == 0 ? (
          <Box w="100%">
            <Box padding="6" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
            <Box padding="6" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
            <Box padding="6" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
            ``
          </Box>
        ) : (
          <VStack
            w={{ base: "100%", sm: "100%", md: "70%" }}
            border="0px solid"
          >
            {hostels.map((product) => (
              <ProductCard product={product} key={product.id} id={product.id} />
            ))}
          </VStack>
        )}
      </Stack>
    </Box>
  );
}