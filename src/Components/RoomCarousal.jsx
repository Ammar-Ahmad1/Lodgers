import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'
import { useContext, useEffect } from "react";
import { useState } from "react";
import { SearchContext } from "../Contexts/SearchContextProvider";
import './Style.css'
import {  
    Heading,
    Box,
    Text,
    Badge,
    CardBody} from "@chakra-ui/react"

import { StarIcon } from "@chakra-ui/icons";

function Carousel({product,id}){

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

    const property = {
        imageUrl: "https://bit.ly/2Z4KKcF",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title: "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
      };
    
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return <Box width='100%' height='500px' bgColor='#d3d8e0'><div className='Carousel'>
        <Slider {...settings}> 
            {products.map((product) => (   
                <div className='card'>
                    <div className='card-top'><img src={product.image} alt={product.name}/></div>
                        
                    <Box p="6">
          <Box display="flex" alignItems="baseline" >
            <Badge rounded="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {property.beds} beds &bull; {property.baths} baths
            </Box>
          </Box>

          <Text
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {property.title}
          </Text>

          <Box>
            {property.formattedPrice}
            <Box as="span" color="gray.600" fontSize="sm">
              / wk
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.reviewCount} reviews
            </Box>
          </Box>
        </Box>
                </div>
                ))}
        </Slider>
    </div>

    </Box>



}

export default Carousel;
