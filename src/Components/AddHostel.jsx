

  import OwnerCarousel from '../Components/OwnerCarousal';
import React, { useState } from "react";
import {
    Flex,
    Box,
    Avatar,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Image,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

  import { MdLocationPin } from "react-icons/md";

  
  export default function OwnerPortal() {

    const [name, setName] = useState({ value: '', error: '' })
    const [description, setDescription] = useState({ value: '', error: '' })
    const [location, setLocation] = useState({ value: '', error: '' })
    const [longitude, setLongitude] = useState({ value: '', error: '' })
    const [latitude, setLatitude] = useState({ value: '', error: '' })

    const [image, setImage] = useState(null);  
    //hostel features modal
    const [modalVisible, setModalVisible] = useState(false);

    //hostel features
    const [featuress, setFeatures] = useState([]);
    const [wifi, setWifi] = useState(false);
    const [parking, setParking] = useState(false);
    const [security, setSecurity] = useState(false);
    const [laundry, setLaundry] = useState(false);
    const [kitchen, setKitchen] = useState(false);
    const [tv, setTv] = useState(false);
    const [ac, setAc] = useState(false);
    const [heater, setHeater] = useState(false);
    const [gym, setGym] = useState(false);


    const handleAdd=()=>{
        const formData = new FormData();
        //    console.log(featuress.wifi)
            formData.append('name', name.value);
            formData.append('description', description.value);
            formData.append('longitude', longitude);
            formData.append('latitude', latitude);
            // formData.append('owner', owner);
            formData.append('tv', tv);
            formData.append('wifi', wifi);
            formData.append('parking', parking);
            formData.append('security', security);
            formData.append('laundry', laundry);
            formData.append('kitchen', kitchen);
            // formData.append('city', city);
        
            formData.append('image', {
              uri: image,
              type: 'image/jpeg',
              name: 'image.jpg',
            });

    };

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  

  // else
return (<>


        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
            <Stack align={'center'}>
            <Heading fontSize={'4xl'} mb='50px'>Add Hostel Details</Heading>

            </Stack> 
            <FormControl>
                <div className="App">
                    <input type="file" onChange={handleChange} />
                    <Avatar size='xl' src={file} />
                </div>
            </FormControl>         
            <FormControl id="hostel-name">
                <FormLabel>Hostel Name</FormLabel>
                <Input type="text" name='name'/>
            </FormControl>

            <FormControl id="description">
                <FormLabel> Short Description</FormLabel>
                <Input type="text" height='100px' name='description'/>
            </FormControl>

            <FormControl id="location">
                <FormLabel>Get Current Location</FormLabel>
                <Text>
                    <Button leftIcon={<MdLocationPin/>} color='teal.500' href='#'>
                        Maps
                    </Button>
                </Text>
            </FormControl>

            <FormControl id="features">
                <FormLabel> Select Features</FormLabel>

                <Stack ml='20px' spacing={[20]} direction={['column', 'row']}>
                    <Checkbox size='md' colorScheme='green' defaultChecked>
                    Wifi
                    </Checkbox>
                    <Checkbox size='md' colorScheme='green' defaultChecked>
                    Parking
                    </Checkbox>
                    <Checkbox size='md' colorScheme='green' defaultChecked>
                    Security
                    </Checkbox>
                </Stack>

                <Stack ml='20px' mt='20px' spacing={[14]} direction={['column', 'row']}>
                    <Checkbox size='md' colorScheme='green' defaultChecked>
                    Laundry
                    </Checkbox>
                    <Checkbox size='md' colorScheme='green' defaultChecked>
                    Kicthen
                    </Checkbox>
                    <Checkbox size='md' colorScheme='green' defaultChecked>
                    Tv
                    </Checkbox>
                </Stack>

            </FormControl>

            
            <Stack spacing={6}>
                <Button colorScheme={'blue'} variant={'solid'} onClick={handleAdd}>
                Add Hostel
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




