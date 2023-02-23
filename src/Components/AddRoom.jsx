

import OwnerCarousel from '../Components/OwnerCarousal';
import React, { useState } from "react";
import {
    Flex,
    Avatar,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Image,
    Divider,
    Select,
    InputGroup,
    InputRightElement,
    useColorModeValue,
  } from '@chakra-ui/react';


  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  
  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  

  
  export default function OwnerPortal() {

    const [name, setName] = useState({ value: '', error: '' })
    const [description, setDescription] = useState({ value: '', error: '' })
    const [price, setPrice] = useState({ value: '', error: '' })


    const [image, setImage] = useState(null);  
    //hostel features modal

    //hostel features


    const handleAdd=()=>{
        let user=JSON.parse(localStorage.getItem("user"))
        const formData = new FormData();
        //    console.log(featuress.wifi)
            formData.append('name', name.value);
            formData.append('description', description.value);
            formData.append('price', price.value);      
            formData.append('image', file);

            fetch("http://localhost:5000/add-hostel", {
        body: formData,
        method: "post",
        headers: {
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.errors) {
            console.log(result.errors)
          } else {
            // navigation.navigate('OwnerHome')
            console.log(result)
        }
        })
        .catch((err) => {
          console.log(err);
        });


    };

    const [file, setFile] = useState();

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0])
    }
  

  // else
return (<>


    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
            <Stack align={'center'}>
            <Heading fontSize={'4xl'} mb='50px'>Add Room Details
                <Divider orientation='horizontal' />
            </Heading>

            

            </Stack> 
            <FormControl>
                <div className="App">
                    <input type="file" onChange={handleChange} />
                    <Avatar size='xl' src={file} />
                </div>
            </FormControl>         
            <FormControl id="hostel-name">
                <FormLabel>Room Type</FormLabel>
                {/* <Input type="text" name='name'
                onChangeText={(text) => setName({ value: text, error: '' })}
                /> */}

                <Select placeholder='Select option'>
                    <option value='option1'>One Seater</option>
                    <option value='option2'>Two Seater</option>
                    <option value='option3'>Three Seater</option>
                    <option value='option3'>Four Seater</option>
                </Select>
            </FormControl>

            <FormControl id="description">
                <FormLabel> Room Description</FormLabel>
                <Input type="text" height='100px' name='description'
                        onChangeText={(text) => setDescription({ value: text, error: '' })}
                />
            </FormControl>

            <FormControl id="price">
                <FormLabel>Price</FormLabel>
                <InputGroup>
                <InputRightElement mr='20px' opacity='0.6'>-/month</InputRightElement>
                <Input type="text" name='price'
                        onChangeText={(text) => setPrice({ value: text, error: '' })}
                />
                </InputGroup>
            </FormControl>
            
            <Stack spacing={6}>
                <Button colorScheme={'blue'} variant={'solid'} onClick={handleAdd}>
                Add Room
                </Button>
            </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>


    </>
    );
  }



  ///////////////////////////




