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
import Cookies from "js-cookie";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeWishListProduct } from "../../Redux/ProductAdminSlice/ProductSlice";
import styles from "../../styles/WishListCard.module.css";

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
     className={styles.Card}
     sx={{
      width: { xs: "330px", sm: "340px" },
      height:{xs:"350px",sm:"410px"},
     }}
    >
      <CardMedia
        component="img"
        alt={bike.name}
        height="220"
        image={bike.product?.image?.[0]}
        sx={{ objectFit: {xs:"contain",sm:"cover"}, filter: "brightness(0.9)" }}
      />

      <Box
      className={styles.chip}
       
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


      {token && (
        <DeleteIcon
        className={styles.DeleteIcon}
          sx={{
            "&:hover": {
              transform: "scale(1.2)", 
            },
          }}
          onClick={(e) => removeWishList(bike?.product?._id)}
        />
      )}
      <CardContent
      className={styles.cardContent}
        sx={{
         
          padding: { xs: 1, sm: 2 },
          height: { xs: "40px", sm: "140px" },
          
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
          className={styles.iconSection}
          sx={{
            display: {xs:"none",sm:"flex"},
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
       <Box sx={{ mt:{xs:1,sm:0}}} className={styles.price}>
          <Typography className={styles.offerPrice}>
            ₹{bike?.product?.offerPrice}
          </Typography>
          <Typography
          className={styles.originalPrice}
          >
            ₹{bike?.product?.originalPrice}
          </Typography>
          <Typography sx={{ fontSize: "0.8rem", color: "red",display:{xs:"none",sm:"inherit"} }}>
            ({bike?.product?.discount}% OFF)
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
