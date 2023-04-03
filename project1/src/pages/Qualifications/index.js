import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {CircularProgress,Box} from '@mui/material';
import axios from 'axios';
import {useEffect,useState} from 'react';

export default function Qualification() {
  let[loader,setLoader]=useState(true);
  let[Qualification,setQualification]=useState(null);
  const getQualificationData=async()=>axios.get('http://localhost:8000/Qualification')
                                           .then(res=>{
                                            setQualification(res.data)
                                            setLoader(false)
                                           }).catch(err => console.log(err))
      useEffect(()=>{
        getQualificationData();
      },[])

  return (
    
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="RGR Siddhanthi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSPcHLQr7yXRS3xTzz-fDmcbo_3WbimLnvW5-w8r5IJQ&s" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaitanya Institute of Technological Sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                7.09 CGPA
              </Typography>
              {" — Computer Science & Engineering"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Naresh" src="https://www.w3schools.com/howto/img_avatar.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Gandhi Memorial Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                86.3 percentage
              </Typography>
              {" — MPC"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sai SI" src="https://55knots.com.au/wp-content/uploads/2021/01/Zanj-Avatar-scaled.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="ZP High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                7.8 CGPA
              </Typography>
              {' — Higher Secondory Education (SSC)'}
            </React.Fragment>
          }
        />
        
      </ListItem>
      {
            loader ? <CircularProgress/> : <Box>
                <Typography variant="h4">
                    {Qualification.Graduation}
                </Typography>
                <Typography variant="h4">
                    {Qualification.Intermediate}
                </Typography>
                <Typography variant="h4">
                    {Qualification.SSC}
                </Typography>
            </Box>
          }
    </List>
  );
}