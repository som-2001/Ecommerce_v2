import { Box, Grid, Typography, Radio, FormControlLabel } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

export const ShippingForm = ({ handlefunction1 }) => {
  const [selectedMethod, setSelectedMethod] = useState(null); // Track selected shipment method
  const [scheduledDate, setScheduledDate] = useState(null); // Track selected date for "Schedule" option

  const handleSelection = (method) => {
    setSelectedMethod(method);
    handlefunction1(false);
    if (method !== "Schedule") {
      setScheduledDate(null); // Clear date if not using "Schedule" option
    }
    if(method==="Schedule" && scheduledDate!==null)
    handlefunction1(true); // Pass selected method back if needed
    
    else if (method!=="Schedule")
      handlefunction1(true);
  };

  return (
    <Box sx={{ width: { xs: "82vw", sm: "90vw", md: "60vw" } }}>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Shipment Method (3)
      </Typography>

      {/* Free Option */}
      <Box
        sx={{ border: "1px solid #dfdfdf", padding: 4, my: 2 }}
        onClick={() => handleSelection("Free")}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3} lg={2}>
            <FormControlLabel
              control={<Radio checked={selectedMethod === "Free"} />}
              label=""
            />
            <Typography variant="body1">Free</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <Typography variant="body1">Regular Shipment Method</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={6}
            sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: { xs: "start", md: "center" } }}
          >
            <Typography variant="body1">Will be delivered on 27 Dec, 2024</Typography>
          </Grid>
        </Grid>
      </Box>

      {/* $8.50 Option */}
      <Box
        sx={{ border: "1px solid #dfdfdf", padding: 4, my: 2 }}
        onClick={() => handleSelection("Paid")}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3} lg={2}>
            <FormControlLabel
              control={<Radio checked={selectedMethod === "Paid"} />}
              label=""
            />
            <Typography variant="body1">$8.50</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <Typography variant="body1">Get your delivery as soon as possible</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={6}
            sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: { xs: "start", md: "center" } }}
          >
            <Typography variant="body1">Will be delivered on 27 Dec, 2024</Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Schedule Option */}
      <Box
        sx={{ border: "1px solid #dfdfdf", padding: 4, my: 2 }}
        onClick={() => handleSelection("Schedule")}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3} lg={2}>
            <FormControlLabel
              control={<Radio checked={selectedMethod === "Schedule"} />}
              label=""
            />
            <Typography variant="body1">Schedule</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <Typography variant="body1">Pick a date when you want to get your delivery</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={6}
            sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: { xs: "start", md: "center" } }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={scheduledDate}
                onChange={(date) => {
                  setScheduledDate(date);
                  handleSelection("Schedule");
                }}
                disabled={selectedMethod !== "Schedule"}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
