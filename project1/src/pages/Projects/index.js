import { Typography,CircularProgress,Box } from '@mui/material';
import axios from 'axios';
import {useEffect,useState} from 'react';



export default function Projects(){
    let [loader,setLoader]=useState(true);
    let [Projects,setProjects]=useState(null);

    const getProjectsData = async () => axios.get('http://localhost:8000/Projects')

                                           .then(res=>{
                                            setProjects(res.data)
                                            setLoader(false)
                                           }).catch(err => console.log(err))
     useEffect(()=>{
        getProjectsData();
     },[])                                      
    
    console.log("projects",Projects)

    return(
        <>
        {
            loader ? <CircularProgress/> : <Box>
                <Typography variant="h3">
                    {Projects.Project1}
                </Typography>
                <Typography variant="h4">
                    {Projects.Project2}
                </Typography>
            </Box>
          }
<Typography>Mini-Project:𝐅𝐑𝐀𝐔𝐃 𝐑𝐄𝐒𝐈𝐋𝐈𝐄𝐍𝐓 𝐃𝐄𝐕𝐈𝐂𝐄 𝐅𝐎𝐑 𝐎𝐅𝐅𝐋𝐈𝐍𝐄 𝐌𝐈𝐂𝐑𝐎-𝐏𝐀𝐘𝐌𝐄𝐍𝐓𝐒</Typography>
<Typography>____________________________________________________________________________</Typography>
<Typography> * </Typography>
<Typography> —Credit and debit card data theft is one of the earliest forms of cybercrime. Still, it is one of the most common nowadays.
Attackers often aim at stealing such customer data by targeting the Point of Sale (for short, PoS) system, i.e. the point at which a retailer
first acquires customer data. Modern PoS systems are powerful computers equipped with a card reader and running specialized
software. Increasingly often, user devices are leveraged as input to the PoS. In these scenarios, malware that can steal card data as
soon as they are read by the device has flourished. As such, in cases where customer and vendor are persistently or intermittently
disconnected from the network, no secure on-line payment is possible. This paper describes FRoDO, a secure off-line micro-payment
solution that is resilient to PoS data breaches. Our solution improves over up to date approaches in terms of flexibility and security. To
the best of our knowledge, FRoDO is the first solution that can provide secure fully off-line payments while being resilient to all currently
known PoS breaches. In particular, we detail FRoDO architecture, components, and protocols. Further, a thorough analysis of FRoDO
functional and security properties is provided, showing its effectiveness and viability.</Typography>

          
        </>
        
    )
    }