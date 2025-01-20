import { Favorite, Speed } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Skeleton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import Cookies from "js-cookie";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { addwishList } from "../../Redux/ProductAdminSlice/ProductSlice";

export const RenderCard = ({ bike, load }) => {
  const navigate = useNavigate();
  const token = Cookies.get("accessToken");
  const { wishList } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const bikeName = `${bike.productName} (${bike.brand})`;

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
      {load ? (
        <Skeleton variant="rectangular" width={400} height={220} />
      ) : (
        <CardMedia
          component="img"
          alt={bike.productName}
          height="220"
          image={bike.image?.[0]}
          sx={{ objectFit: "cover", filter: "brightness(0.9)" }}
        />
      )}

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
        {bike.isNewArrival && (
          <Chip label="New Arrival" color="success" size="small" />
        )}
        {bike.isBestSeller && (
          <Chip label="Bestseller" color="warning" size="small" />
        )}
        {bike.isFeatureProduct && (
          <Chip label="Featured" color="primary" size="small" />
        )}
      </Box>

      {/* Wishlist Icon */}
      {token &&
        (load ? null : (
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
        ))}

      {/* Product Details */}
      <CardContent
        sx={{
          color: "black",
          padding: { xs: 2, sm: 2 },
          "&:hover": { cursor: "pointer" },
        }}
        onClick={() =>
          navigate(`/view-product/${bike?._id}/${bike?.modelNumber}`)
        }
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, display: { xs: "inherit", sm: "none" } }}
        >
          {bikeName.length > 10 ? `${bikeName.slice(0, 10)}...` : bikeName}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            display: { xs: "none", sm: "inherit", height: "40px" },
          }}
        >
          {load ? (
            <Skeleton animation="wave" width={150} />
          ) : bikeName?.length > 20 ? (
            `${bikeName.slice(0, 60)}...`
          ) : (
            bikeName 
          )}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 1, display: { xs: "none", sm: "inherit", height: "40px" } }}
        >
          {load ? (
            <Skeleton animation="wave" />
          ) : bike?.description?.length > 20 ? (
            `${bike.description.slice(0, 60)}...`
          ) : (
            bike?.description || "No description available"
          )}
        </Typography>

        <Divider sx={{ my: 1 }} />

        {/* Specifications */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "0px",
            flexWrap: "wrap",
            p: 1,
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Speed />
            <Typography variant="body2" sx={{ fontSize: "12px" }}>
              {load ? <Skeleton animation="wave" /> : bike.mileage} Miles
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <LocalGasStationIcon />
            <Typography variant="body2" sx={{ fontSize: "12px" }}>
              {load ? <Skeleton animation="wave" /> : bike.fuelType}CC
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <AutoModeIcon />
            <Typography variant="body2" sx={{ fontSize: "12px" }}>
              {load ? <Skeleton animation="wave" /> : bike.type}Type
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 1 }} />

        {/* Price and Discount */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Typography
            sx={{ fontWeight: 700, fontSize: "1.2rem", color: "green" }}
          >
            {load ? (
              <Skeleton animation="wave" width={50} />
            ) : (
              `₹${bike.offerPrice}`
            )}
          </Typography>
          <Typography
            sx={{
              textDecoration: "line-through",
              fontSize: "0.9rem",
              color: "gray",
            }}
          >
            {load ? (
              <Skeleton animation="wave" width={50} />
            ) : (
              `₹${bike.originalPrice}`
            )}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.8rem",
              color: "red",
              display: { xs: "none", sm: "inherit" },
            }}
          >
            ({load?<Skeleton animation="wave" width={20}/>:bike.discount}% OFF)
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
