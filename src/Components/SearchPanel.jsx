import { Button, Stack, Icon, Input, InputGroup, InputLeftElement, InputRightElement, useToast, Text,IconButton } from "@chakra-ui/react"
import { ImSearch,ImLocation2, ImCalendar } from 'react-icons/im';
import { Link, useNavigate } from "react-router-dom";
import 'react-datalist-input/dist/styles.css';
import { useContext } from "react";
import { SearchContext } from "../Contexts/SearchContextProvider";
import { useState } from "react";
import Alert from './Alert'
import Home from '../Assets/Home.jpg'



export default function SearchPanel() {
    const navigate = useNavigate();
    const { setsearch } = useContext(SearchContext)
    const [location, setlocation] = useState(null)
    const toast = useToast()
    // let alertdata={
    //     title: ' Invalid Input',
    //     description: "Please check the input again",
    //     status: 'warning',
    //   }

    let initialdata = {
        destination: null,
        checkin: null,
        checkout: null,
        travellers: null,
        rooms: null,
    }

    const [traveldata, settraveldata] = useState(initialdata)
    //console.log(traveldata)

    let handletraveller = (el) => {
        settraveldata({ ...traveldata, [el.target.name]: el.target.value })
    }

    const handleSearch = () => {
        let flag=true
        for(let key in traveldata)
        {
            if(traveldata[key]==null)
            { 
                //toast(Alert(alertdata)) 
                flag=false;
                break;
            }
        }
        if (traveldata.travellers < traveldata.rooms || traveldata.travellers/traveldata.rooms>3)
        { 
           // toast(Alert(alertdata))
            flag=false;
        }

        if(flag==true) 
        {
            let bookingdata=JSON.parse(localStorage.getItem('booking'))
            setsearch(location)
            navigate('/products')
            localStorage.setItem('booking',JSON.stringify({...bookingdata,...traveldata}))
        }
    }

    return <div style={{ 'marginBottom': '2%','border':'0px solid' }}>
        <Stack direction={{ base: 'column', lg: 'row' }} spacing={2} border='0px solid' justifyContent='space-evenly' >
            { <InputGroup>
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
                />
                <InputRightElement  
                    />
                </InputGroup> }
                <Link to='/products'><Button colorScheme='teal' size='lg' onClick={handleSearch}>
                    Search
                </Button></Link>


        </Stack>

        




    </div>
}