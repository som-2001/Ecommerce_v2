import { Box, Grid, Typography } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
export const ShippingForm = () => {
 
  return (
    <Box sx={{ width: {xs:"82vw",sm:"90vw",md:"60vw" }}}>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Shipment Method (3)
      </Typography>


      <Box sx={{ border: "1px solid #dfdfdf", padding: 4, my: 2 }}>
       
      <Grid container spacing={2}> 
            <Grid item xs={12} sm={12} md={3} lg={2}>
                <Typography variant="body1">Free</Typography>
            </Grid>
            
            <Grid item xs={12} sm={12} md={4} sx={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                <Typography variant="body1">Regular Shipment Method</Typography>
                
            </Grid>
             
            <Grid item xs={12} sm={12} md={4} lg={6} sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:{xs:"start",md:"center"}}}>
                <Typography variant="body1">Will be delivered on 27 Dec,2024</Typography>
               
            </Grid>
        </Grid>
      </Box>

      <Box sx={{ border: "1px solid #dfdfdf", padding: 4, my: 2 }}>
       
       <Grid container spacing={2}> 
             <Grid item xs={12} sm={12} md={3} lg={2}>
                 <Typography variant="body1">$8.50</Typography>
             </Grid>
             
             <Grid item xs={12} sm={12} md={4} sx={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                 <Typography variant="body1">Get your delivery as soon as possible</Typography>
                 
             </Grid>
              
             <Grid item xs={12} sm={12} md={4} lg={6} sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:{xs:"start",md:"center"}}}>
                 <Typography variant="body1">Will be delivered on 27 Dec,2024</Typography>
                
             </Grid>
         </Grid>
       </Box>

       <Box sx={{ border: "1px solid #dfdfdf", padding: 4, my: 2 }}>
       
       <Grid container spacing={2}> 
             <Grid item xs={12} sm={12} md={3} lg={2}>
                 <Typography variant="body1">Schedule</Typography>
             </Grid>
             
             <Grid item xs={12} sm={12} md={4} sx={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                 <Typography variant="body1">Pick a date when you want to get your delivery</Typography>
                 
             </Grid>
              
             <Grid item xs={12} sm={12} md={4} lg={6} sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:{xs:"start",md:"center"}}}>
             <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider>
                
             </Grid>
         </Grid>
       </Box>

    </Box>
  );
};
