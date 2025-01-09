import { Speed } from "@mui/icons-material";
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
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeWishListProduct } from "../../Redux/ProductAdminSlice/ProductSlice";

export const WishListCard = ({ bike, setBike }) => {
  const navigate = useNavigate();
  const token = Cookies.get("accessToken");
  const dispatch = useDispatch();

  const removeWishList = (id) => {
    axios
      .post(
        `${process.env.REACT_APP_BASEURL}/wishlist/wishlist/remove`,
        { productId: id },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        dispatch(removeWishListProduct(id));
        setBike((prev) => prev.filter((bike) => bike.product?._id !== id));
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
        width: { xs: "330px", sm: "340px" },
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
        },
      }}
    >
      <CardMedia
        component="img"
        alt={bike.name}
        height="220"
        image={bike.product?.image?.[0]}
        sx={{ objectFit: "cover", filter: "brightness(0.9)" }}
      />

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
        {bike?.product?.isNewArrival && (
          <Chip label="New Arrival" color="success" size="small" />
        )}
        {bike?.product?.isBestSeller && (
          <Chip label="Bestseller" color="warning" size="small" />
        )}
        {bike?.product?.isFeatureProduct && (
          <Chip label="Featured" color="primary" size="small" />
        )}
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 175,
          left: 10,
          backgroundColor: "whitesmoke",
          display: "flex",
          borderRadius: 2,
          justifyContent: "center",
          alignItems: "center",
          padding: "2px",
          width: "120px",
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: 600, fontSize: "11px" }}
        >
          4
        </Typography>
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
        <Typography variant="body2" color="text.secondary">
          |
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ ml: 0.4, fontWeight: 600, fontSize: "11px" }}
        >
          10.4K
        </Typography>
        <PersonIcon />
      </Box>

      {token && (
        <DeleteIcon
          sx={{
            position: "absolute",
            top: 10,
            backgroundColor: "white",
            right: 10,
            color: "black",
            filter: "opacity(0.7)",
            borderRadius: "50%",
            zIndex: 45,
            padding: "5px",
            cursor: "pointer",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.2)", // Slightly enlarge the icon on hover
            },
          }}
          onClick={(e) => removeWishList(bike?.product?._id)}
        />
      )}
      <CardContent
        sx={{
          color: "black",
          filter: "brightness(0.7)",
          padding: { xs: 1, sm: 2 },
          height: { xs: "60px", sm: "140px" },
        }}
        onClick={(e) =>
          navigate(
            `/view-product/${bike?.product?._id}/${bike?.product?.modelNumber}`
          )
        }
      >
        <Typography variant="body2">{bike?.product?.productName}</Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "11px" }}
        >
          {bike?.product?.description?.slice(0, 70)}...
        </Typography>
        <Divider
          sx={{
            backgroundColor: "#C6E4FF",
            my: 1,
            display: { xs: "none", sm: "block" },
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Speed />
            <Typography variant="body2" sx={{ fontSize: "12px", }}>
              {bike?.product?.mileage} Miles
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <LocalGasStationIcon />
            <Typography variant="body2" sx={{ fontSize: "12px", }}>
              {bike?.product?.fuelType}
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <AutoModeIcon />
            <Typography variant="body2" sx={{ fontSize: "12px",  }}>
              {bike?.product?.type}
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{
            backgroundColor: "#C6E4FF",
            my: 1,
            display: { xs: "none", sm: "block" },
          }}
        />
       <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Typography sx={{ fontWeight: 700, fontSize: "1.2rem", color: "green" }}>
            ₹{bike?.product?.offerPrice}
          </Typography>
          <Typography
            sx={{ textDecoration: "line-through", fontSize: "0.9rem", color: "gray" }}
          >
            ₹{bike?.product?.originalPrice}
          </Typography>
          <Typography sx={{ fontSize: "0.8rem", color: "red" }}>
            ({bike?.product?.discount}% OFF)
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
