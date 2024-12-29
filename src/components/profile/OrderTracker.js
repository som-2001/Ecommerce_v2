import { Box, Step, StepLabel, Stepper } from "@mui/material";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const steps = [
  { label: 'Ordered', icon: <ShoppingCartIcon /> },
  { label: 'Shipped', icon: <LocalShippingIcon /> },
  { label: 'Delivered', icon: <CheckCircleIcon /> },
];

export const OrderTracker = () => {
  const activeStep = 1;

  return (
    <Box sx={{ width: '80%', marginTop: "15px" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              StepIconComponent={() => step.icon}
              sx={{
                '& .MuiStepLabel-label': {
                  color: index === activeStep ? 'primary.main' : 'text.secondary',
                  fontWeight: index === activeStep ? 'bold' : 'normal',
                },
              }}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
