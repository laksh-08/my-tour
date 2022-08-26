import {useState} from 'react';
import {Application} from './style';
import Button from '@mui/material/Button';
import TextMobileStepper from './Tour';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Popper from '@mui/material/Popper';


    
    export default function SimplePopper() {
      const [anchorEl, setAnchorEl] = useState(0);
    
      const handleClick = (event) => {
        setAnchorEl(anchorEl ? false : event.currentTarget);
      };
    
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popper' : undefined;
    
      return (
        <Grid>
           <Button variant="contained"  color="success" onClick={handleClick}  sx={Application.box1}>
             Application-Tour 
             </Button>
        <Popper  open={open} anchorEl={anchorEl} >
           {/* Render step.js File*/}
              <TextMobileStepper />
           </Popper>
        </Grid>
      );
    }
    
