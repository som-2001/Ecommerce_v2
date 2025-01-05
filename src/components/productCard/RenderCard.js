import { Favorite, Speed } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PersonIcon from '@mui/icons-material/Person';
import Cookies from 'js-cookie';

export const RenderCard = ({ bike }) => {
  const navigate = useNavigate();
  const token=Cookies.get("accessToken");

  return (
    <Card
      sx={{
        borderRadius: "12px",
        transition: "transform 0.3s, box-shadow 0.3s",
        position: "relative",
        width: "330px",
        cursor: "pointer"
      }}
      onClick={(e) => navigate(`/view-product/${2}`)}
    >
      <CardMedia
        component="img"
        alt={bike.name}
        height="220"
        image={bike.image}
        sx={{ objectFit: "cover", filter: "brightness(0.83)" }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 175,
          left: 10,
          backgroundColor: "whitesmoke",
          display:"flex",
          borderRadius: 2,
          justifyContent:"center",
          alignItems:"center",
          padding:"2px",
          width:"120px"
        }}
      >
        <Typography variant="body2" color="text.secondary" sx={{fontWeight:600,fontSize:"11px"}}>4</Typography>
        <StarBorderIcon
          sx={{
            color: "green",
            filter: "opacity(0.7)",
            borderRadius: "50%",
            padding: "5px",
            cursor: "pointer",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.2)", // Slightly enlarge the icon on hover
            },
          }}
        />
        <Typography variant="body2" color="text.secondary">|</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ml:0.4,fontWeight:600,fontSize:"11px"}}>10.4K</Typography>
        <PersonIcon/>
      </Box>

      {token && <Favorite
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          color: "whitesmoke",
          filter: "opacity(0.7)",
          borderRadius: "50%",

          padding: "5px",
          cursor: "pointer",
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.2)", // Slightly enlarge the icon on hover
          },
        }}
      />}
      <CardContent sx={{color: "black", filter: "brightness(0.7)",padding:{xs:1,sm:2},height:{xs:"60px",sm:"120px" }}}>
        <Typography variant="body2">
          {bike.name}
        </Typography>
        <Typography variant="body2"  color="text.secondary" sx={{fontSize:"11px"}}>
          4.0 D5 PowerPulse Momentum 5dr AW…{bike.description}
        </Typography>
        <Divider sx={{ backgroundColor: "#C6E4FF", my: 1,display:{xs:"none",sm:"block"} }} />
        <Box
          sx={{
            display: {xs:"none",sm:"flex"},
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",

          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Speed />
            <Typography variant="body2" color="text.secondary" sx={{fontSize:"11px"}}>50 Miles</Typography>
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
            <Typography variant="body2" color="text.secondary" sx={{fontSize:"11px"}}>Petrol</Typography>
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
            <Typography variant="body2" color="text.secondary" sx={{fontSize:"11px"}}>Automatic</Typography>
          </Box>
        </Box>
        <Divider sx={{ backgroundColor: "#C6E4FF", my: 1,display:{xs:"none",sm:"block"} }} />
        <Box sx={{ display: "flex",alignItems:"center",gap:"3px",marginTop:"3px" }}>
          <Typography sx={{ fontWeight: 700, fontSize: {xs:"11px",sm:"1.1rem"}}}>
            $150,000 
          </Typography> 
          <Typography color="text.secondary" sx={{textDecoration:"line-through",fontSize:"11px"}}>$346667</Typography>
          <Typography color="text.secondary" variant="body2" sx={{fontSize:"11px"}}>(25% off)</Typography>
          {/* <Button onClick={(e) => navigate(`/view-product/${2}`)}>
            View Details <CallMadeIcon />
          </Button> */}
        </Box>
      </CardContent>
    </Card>
  );
};
