import { Typography } from '@mui/material';
import { CircularProgress,Box } from '@mui/material';
import axios from 'axios';
import {useEffect,useState} from 'react';

export default function Contactme(){
    let [loader,setLoader]=useState(true);
    let [Contactme,setContactme]=useState(null);

    const getContactmeData = async () => axios.get('http://localhost:8000/Contactme')

                                           .then(res=>{
                                            setContactme(res.data)
                                            setLoader(false)
                                           }).catch(err => console.log(err))
     useEffect(()=>{
        getContactmeData();
     },[])                                      
    
    console.log("Contactme",Contactme)



    return(
        <>
        {
            loader ? <CircularProgress/> : <Box>
                <Typography variant="h3">
                    {Contactme.Phone}
                </Typography>
                <Typography variant="h4">
                    {Contactme.Email}
                </Typography>
                <Typography variant="h4">
                    {Contactme.LinkedIn}
                </Typography>
                <Typography variant="h4">
                    {Contactme.Instagram}
                </Typography>
            </Box>
          }
<Typography>Email: nareshnakka118@gmail.com</Typography>
<Typography>Phone No.: 9573769281</Typography>
<Typography>LinkedIn://𝒘𝒘𝒘.𝒍𝒊𝒏𝒌𝒆𝒅𝒊𝒏.𝒄𝒐𝒎/𝒊𝒏/𝒏𝒂𝒓𝒆𝒔𝒉-𝒏𝒂𝒌𝒌𝒂-109605213/</Typography>
<Typography>Instagram:𝒉𝒕𝒕𝒑𝒔://𝒘𝒘𝒘.𝒊𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎.𝒄𝒐𝒎/𝒊𝒕𝒛._.𝒎𝒆𝒉._.𝒍𝒂𝒅𝒅𝒖_/</Typography>
        </>
        
    )
    }