import { Favorite, Speed } from "@mui/icons-material"
import { Box, Button, Card, CardContent, CardMedia, Divider, Typography } from "@mui/material"
import CallMadeIcon from '@mui/icons-material/CallMade';
import { useNavigate } from "react-router-dom";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation"

export const RenderCard=({bike})=>{

    const navigate=useNavigate();

    return(
        
        <Card
          sx={{
            borderRadius: "12px",
            transition: "transform 0.3s, box-shadow 0.3s",
            position:"relative",
            width:"350px"
          }}
        >
          <CardMedia
            component="img"
            alt={bike.name}
            height="220"
            image={bike.image}
            sx={{ objectFit: "cover",filter:'brightness(0.83)' }}
          />
         
         <Favorite
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "whitesmoke",
            filter:"opacity(0.7)",
            borderRadius: "50%",
            
            padding: "5px",
            cursor: "pointer",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.2)", // Slightly enlarge the icon on hover
            },
          }}
        />
         <CardContent
          sx={{ color: "black", filter: "brightness(0.7)" }}
        >
          <Typography variant="h6" component="div">
            {bike.name}
          </Typography>
          <Typography variant="body2">
            4.0 D5 PowerPulse Momentum 5dr AW… {bike.description}
          </Typography>
          <Divider sx={{ backgroundColor: "#C6E4FF", my: 1 }} />
          <Box sx={{ display: "flex", gap: "20px",justifyContent: "center",
                alignItems: "center", }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Speed />
              <Typography>50 Miles</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LocalGasStationIcon />
              <Typography>Petrol</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AutoModeIcon />
              <Typography>Automatic</Typography>
            </Box>
          </Box>
          <Divider sx={{ backgroundColor: "#C6E4FF", my: 1 }} />
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: "1.5rem" }}>
              $150,000
            </Typography>
            <Button onClick={(e) => navigate(`/view-product/${2}`)}>
              View Details <CallMadeIcon />
            </Button>
          </Box>
        </CardContent>
         
        </Card>
      
    )
}