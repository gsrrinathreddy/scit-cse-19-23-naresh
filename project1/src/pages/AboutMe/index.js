import { Typography,CircularProgress,Box } from '@mui/material';
import axios from 'axios';
import {useEffect,useState} from 'react';



export default function Projects(){
    let [loader,setLoader]=useState(true);
    let [aboutme,setaboutme]=useState(null);

    const getAboutMeData = async () => axios.get('http://localhost:8000/aboutme')

                                           .then(res=>{
                                            setaboutme(res.data)
                                            setLoader(false)
                                           }).catch(err => console.log(err))
     useEffect(()=>{
        getAboutMeData();
     },[])                                      
    
    console.log("aboutme",aboutme)




    return(
        <>
         {
            loader ? <CircularProgress/> : <Box>
                <Typography variant="h3">
                    {aboutme.Name}
                </Typography>
                <Typography variant="h4">
                    {aboutme.FatherName}
                </Typography>
                <Typography variant="h4">
                    {aboutme.MotherName}
                </Typography>
            </Box>
          }
<Typography>Name: NARESH NAKKA</Typography>
<Typography>Father Name: RAMULU</Typography>
<Typography>Mother Name: LAXMI</Typography>
<Typography>Email: nareshnakka118@gmail.com</Typography>
<Typography>Phone No.: 9573769281</Typography>
        </>
        
    )
    }