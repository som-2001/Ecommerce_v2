import { Favorite, Speed } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PersonIcon from "@mui/icons-material/Person";
import Cookies from "js-cookie";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { addwishList } from "../../Redux/ProductAdminSlice/ProductSlice";


export const RenderCard = ({ bike }) => {
  const navigate = useNavigate();
  const token = Cookies.get("accessToken");
  const { wishList } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const bikeName=`${bike.productName} (${bike.brand})`;

  const addWishList = (id) => {
    axios
      .post(
        `${process.env.REACT_APP_BASEURL}/wishlist/wishlist/add`,
        { productId: id },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res?.data?.message);
        dispatch(addwishList(id));
        enqueueSnackbar(res?.data?.message, { variant: "success" });
      })
      .catch((err) => {
        enqueueSnackbar(err.response.data.message, { variant: "error" });
      });
  };

  return (
    <Card
      sx={{
        borderRadius: "10px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        transition: "transform 0.3s, box-shadow 0.3s",
        position: "relative",
        width: { xs: "330px", sm: "360px" },
        cursor: "pointer",
        "&:hover": {
         
          boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
        },
      }}
    >
      {/* Product Image */}
      <CardMedia
        component="img"
        alt={bike.productName}
        height="220"
        image={bike.image?.[0]}
        sx={{ objectFit: "cover", filter: "brightness(0.9)" }}
      />

      {/* Badge Indicators */}
      <Box
        sx={{
          position: "absolute",
          top: 10,
          left: 10,
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        {bike.isNewArrival && <Chip label="New Arrival" color="success" size="small" />}
        {bike.isBestSeller && <Chip label="Bestseller" color="warning" size="small" />}
        {bike.isFeatureProduct && <Chip label="Featured" color="primary" size="small" />}
      </Box>

      {/* Wishlist Icon */}
      {token && (
        <Favorite
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: wishList?.includes(bike?._id) ? "red" : "black",
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 10,
            padding: "5px",
            cursor: "pointer",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
          onClick={() => addWishList(bike?._id)}
        />
      )}

      {/* Rating Section */}
      <Box
        sx={{
          position: "absolute",
          top: 175,
          left: 10,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          display: "flex",
          alignItems: "center",
          borderRadius: 2,
          padding: "6px",
          width: "110px",
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "11px" }}>
          4
        </Typography>
        <StarBorderIcon
          sx={{
            color: "green",
            marginLeft: "4px",
            cursor: "pointer",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
        />
        <Typography variant="body2" sx={{ mx: 1, fontWeight: 600, fontSize: "11px" }}>
          |
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "11px" }}>
          10.4K
        </Typography>
        <PersonIcon sx={{ ml: "2px", fontSize: "16px" }} />
      </Box>

      {/* Product Details */}
      <CardContent
        sx={{
          color: "black",
          padding: { xs: 2, sm: 2 },
          "&:hover": { cursor: "pointer" },
        }}
        onClick={() => navigate(`/view-product/${bike?._id}/${bike?.modelNumber}`)}
      >
        <Typography variant="h6" sx={{ fontWeight: 700}}>
          
          {bikeName.length>20 ? `${bikeName.slice(0,20)}...`:bikeName}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1}}>
          
          {bike?.description?.length>15 ? `${bike?.description.slice(0,80)}...`:bikeName.description}
        </Typography>

        <Divider sx={{ my: 1 }} />

        {/* Specifications */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "0px",
            flexWrap: "wrap",
            p:1
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Speed />
            <Typography variant="body2" sx={{ fontSize: "12px", }}>
              {bike.mileage} Miles
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <LocalGasStationIcon />
            <Typography variant="body2" sx={{ fontSize: "12px", }}>
              {bike.fuelType}
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <AutoModeIcon />
            <Typography variant="body2" sx={{ fontSize: "12px",  }}>
              {bike.type}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 1 }} />

        {/* Price and Discount */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Typography sx={{ fontWeight: 700, fontSize: "1.2rem", color: "green" }}>
            ₹{bike.offerPrice}
          </Typography>
          <Typography
            sx={{ textDecoration: "line-through", fontSize: "0.9rem", color: "gray" }}
          >
            ₹{bike.originalPrice}
          </Typography>
          <Typography sx={{ fontSize: "0.8rem", color: "red" }}>
            ({bike.discount}% OFF)
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
