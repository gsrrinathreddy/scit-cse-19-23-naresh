import { Typography } from '@mui/material';
import { CircularProgress,Box } from '@mui/material';
import axios from 'axios';
import {useEffect,useState} from 'react';

export default function Certifications(){
    let [loader,setLoader]=useState(true);
    let [Certifications,setCertifications]=useState(null);

    const getCertificationsData = async () => axios.get('http://localhost:8000/Certifications')

                                           .then(res=>{
                                            setCertifications(res.data)
                                            setLoader(false)
                                           }).catch(err => console.log(err))
     useEffect(()=>{
        getCertificationsData();
     },[])                                      
    
    console.log("Certifications",Certifications)

    return(
        <>

        <Typography> -         𝐂𝐄𝐑𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍𝐒        - </Typography>
<Typography> 1.Core java Training by INTERNSHALA TRAININGS</Typography>
<Typography> 2.Webdevelopment Training by INTERNSHALA TRAININGS</Typography>
{
            loader ? <CircularProgress/> : <Box>
                <Typography variant="h3">
                    {Certifications.CoreJava}
                </Typography>
                
            </Box>
          }
        </>
        
    )
    }