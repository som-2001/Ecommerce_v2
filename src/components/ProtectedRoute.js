import Cookies from "js-cookie";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthNavbar } from "./AuthNavbar";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { setSearch } from "../Redux/ProductAdminSlice/ProductSlice";
import styles from "../styles/ProtectedRoute.module.css";

export const ProtectedRoute = () => {
  const token = Cookies.get("accessToken");
  console.log(token);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.product);

  if (!token) return <Navigate to="/" />;

  return (
    <Box>
      <AuthNavbar />
      {search?.length > 0 && (
        <Box
          className={styles.parent}
          sx={{
            right: { xs: "5%", sm: "23%" },
          }}
        >
          <Grid container spacing={1}>
            {search.map((data, index) => (
              <Grid item xs={12} key={index}>
                <Card
                  className={styles.card}
                  onClick={(e) => {
                    navigate(`/view-product/${data?._id}/${data?.modelNumber}`);
                    dispatch(setSearch([]));
                  }}
                >
                  {/* Product Image */}
                  <CardMedia
                    component="img"
                    height="80"
                    className={styles.cardMedia}
                    image={data.image?.[0] || "https://via.placeholder.com/180"} // Placeholder if no image
                    alt={data.productName || "Product Image"}
                  />
                  {/* Product Details */}
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontWeight: "bold", mb: 1 }}
                    >
                      {data.productName || "Product Name"} ({data.brand})
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontWeight: "bold", color: "#FF5722" }}
                    >
                      ₹{data.offerPrice || "N/A"}{" "}
                      <span
                        style={{
                          textDecoration: "line-through",
                          color: "gray",
                        }}
                      >
                        ₹{data.originalPrice}
                      </span>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      <Outlet />
    </Box>
  );
};
