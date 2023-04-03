import { Typography } from '@mui/material';
import { CircularProgress,Box } from '@mui/material';
import axios from 'axios';
import {useEffect,useState} from 'react';

export default function Workshops(){
    let [loader,setLoader]=useState(true);
    let [Workshops,setWorkshops]=useState(null);

    const getWorkshopsData = async () => axios.get('http://localhost:8000/Workshops')

                                           .then(res=>{
                                            setWorkshops(res.data)
                                            setLoader(false)
                                           }).catch(err => console.log(err))
     useEffect(()=>{
        getWorkshopsData();
     },[])                                      
    
    console.log("Workshops",Workshops)



    return(
        <>
<Typography> 𝕎𝕠𝕣𝕜𝕤𝕙𝕠𝕡𝕤 :</Typography>
<Typography>𝐂𝐘𝐁𝐄𝐑 𝐒𝐄𝐂𝐔𝐑𝐈𝐓𝐘:Attended the workshop organised by JNTU CEJ</Typography>
<Typography> Cyber security refers to every aspect of protecting an organization and its employees and assets against cyber threats. As cyberattacks become more common and sophisticated and corporate networks grow more complex, a variety of cyber security solutions are required to mitigate corporate cyber risk.</Typography>
{
            loader ? <CircularProgress/> : <Box>
                <Typography variant="h3">
                    {Workshops.CyberSecurity}
                </Typography>
                
            </Box>
          }
        </>
        
    )
    }