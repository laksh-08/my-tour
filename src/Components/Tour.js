import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

// Import StyleSheet
import { Application } from './style';

const steps = [
  //Tour-start
    {
        label:`Application-Tour`,
        description:`Letsgo throughthe application in 7 steps`,
    },
  // Step-1
  {
    label: '  STEP1 : shop details',
    description: `How you can find your shop related information.Batch information product sko.product tax & other`,
  },
  // Step2
  {
    label: ' STEP2 : adding Resources',
    description:
      'Add multiple location.Top rate invoice settings for your shop.',
  },
  // Step3
  {
    label: 'STEP3 : Supplies&customer',
    description: `All supplier&customer for your shop.`,
  },
  // Step4
  {
    label:'STEP4 : Manage Products',
    description:`add product Simpleover variable product create variations for variable products create unit Boards,categories print label`,
  },
  // Step5
  {
    label: 'STEP5 : Manage Purchase',
    description:'manage purchase and payment for purchases',
  },
  // Step6
  {label: 'STEP6 : Manage sales',
description:'sell-POS use his screen while selling products or billing,customer select location, Add purchase',
},
// Step7
{
    label: ' STEP7 : Reports',
    description: 'View analytic reports for your these.these reportshelp you get overall information about the peformance of your build',
}
];
export default

    
    
    
    function TextMobileStepper() {
  
      const [activeStep, setActiveStep] = React.useState(0);
     
      const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep  - 1);
      };
      const handleClose =()=> {
        setActiveStep(false);
      }
    return(
      
      
      <Grid sx={Application.box}>
         <Box sx={{ maxWidth: 450, maxHeight:300,border:'3px solid gray'}}  >
          <Paper
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 50,
              pl: 2,
              bgcolor: 'background.default',
              
            }}
          >
            <Typography>{steps[activeStep].label}</Typography>
          </Paper>
          <Box sx={{ height: 70, maxWidth: 400, width: '100%', p:2,}}>
            {steps[activeStep].description}
          </Box>
          <Grid>
    
            { /*Previous-Button*/}
    
          <Button variant="contained"  color="success" onClick={handleBack} sx={Application.text}> previous </Button>
    
          {/* Next-Button */}
    
              <Button variant="contained"  color="success"  onClick={handleNext} sx={Application.text}> Next </Button>
    
           {/*Close-Button  */}   
             
           <Button onClick={handleClose} sx={Application.text} variant="contained"  color="success" > end-tour </Button>
          
          </Grid>
        </Box>
        </Grid>
       
       
      )
    }
  


  
 
