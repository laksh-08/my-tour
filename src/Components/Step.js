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
    setAnchor(+ 1);
}
return(
<div>
    <Button  varient="contained" 
     onClick={handleClick}>
    </Button>
    <Menu anchor={anchor}
    open={open}
    onClose={handleClose}>
        <MenuItem onClick={handleClose}disableRipple>
        <TextMobileStepper />
        </MenuItem>
    </Menu>
</div>
)
    }