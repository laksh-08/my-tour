import {useState} from 'react';
import { MenuItem,Menu} from '@mui/material';

import Button from '@mui/material/Button';
import TextMobileStepper from './Tour';

export default 

function TextMobile(){
const [anchor,setAnchor]= useState(0);
const open=Boolean(anchor);
const handleClick=(event)=>{
    setAnchor(event.currentTarget);
};
const handleClose=()=>{
    setAnchor(+1);
}
return(
<div>
<Button variant="contained"  color="success" onClick={handleClick}> Application-Tour </Button>
    <Menu anchor={anchor}
    open={open}
    onClose={handleClose}>

        <MenuItem onClick={handleClose}disableRipple>

            {/* Render Tour.js File*/}

            <TextMobileStepper />
        </MenuItem>
    </Menu>
</div>
)
    }