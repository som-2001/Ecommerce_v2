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
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { addwishList } from "../../Redux/ProductAdminSlice/ProductSlice";

export const RenderCard = ({ bike }) => {
  const navigate = useNavigate();
  const token=Cookies.get("accessToken");
  const {wishList}=useSelector(state=>state.product);
  const dispatch=useDispatch();

  const addWishList=(id)=>{
    axios.post(`${process.env.REACT_APP_BASEURL}/wishlist/wishlist/add`,{productId:id},{
      withCredentials:true
    }).then(res=>{
      console.log(res?.data?.message)
      dispatch(addwishList(id));
      enqueueSnackbar(res?.data?.message,{variant:"success"});
    }).catch(err=>{
      enqueueSnackbar(err.response.data.message, { variant: "error" });

  })
  }
  return (
    <Card
      sx={{
        borderRadius: "12px",
        transition: "transform 0.3s, box-shadow 0.3s",
        position: "relative",
        width: {xs:"330px",sm:"350px"},
        cursor: "pointer"
      }}
      
    >
      <CardMedia
        component="img"
        alt={bike.name}
        height="220"
        image={bike.image?.[0]}
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
          color: wishList?.includes(bike?._id)?"red":"black",
          filter: "opacity(0.7)",
          borderRadius: "50%",
          zIndex:45,
          padding: "5px",
          cursor: "pointer",
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.2)", // Slightly enlarge the icon on hover
          },
        }}
        onClick={(e)=>addWishList(bike?._id)}
      />}
      <CardContent sx={{color: "black", filter: "brightness(0.7)",padding:{xs:1,sm:2},height:{xs:"60px",sm:"150px" }}} onClick={(e) => navigate(`/view-product/${bike?._id}/${bike?.modelNumber}`)}>
        <Typography variant="body2">
          {bike?.productName}
        </Typography>
        <Typography variant="body2"  color="text.secondary" sx={{fontSize:"11px"}}>
          {bike?.description?.slice(0,60)}...
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
            <Typography variant="body2" color="text.secondary" sx={{fontSize:"11px"}}>{bike.mileage} Miles</Typography>
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
            <Typography variant="body2" color="text.secondary" sx={{fontSize:"11px"}}>{bike.fuelType}</Typography>
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
            <Typography variant="body2" color="text.secondary" sx={{fontSize:"11px"}}>{bike.type}</Typography>
          </Box>
        </Box>
        <Divider sx={{ backgroundColor: "#C6E4FF", my: 1,display:{xs:"none",sm:"block"} }} />
        <Box sx={{ display: "flex",alignItems:"center",gap:"3px",marginTop:"3px" }}>
          <Typography sx={{ fontWeight: 700, fontSize: {xs:"11px",sm:"1.1rem"}}}>
            ${bike?.originalPrice}
          </Typography> 
          <Typography color="text.secondary" sx={{textDecoration:"line-through",fontSize:"11px"}}>${bike?.offerPrice}</Typography>
          <Typography color="text.secondary" variant="body2" sx={{fontSize:"11px"}}>({bike?.discount}% off)</Typography>
       
        </Box>
      </CardContent>
    </Card>
  );
};
