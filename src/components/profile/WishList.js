import { Box, CardMedia, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from '../../styles/profile.module.css'

export const WishList = () => {
  const navigate = useNavigate();
  const { WishList } = useSelector((state) => state.product);
  const [wishlist, setWishList] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/wishlist/wishlist`, {
        withCredentials: true,
      })
      .then((res) => {
        setWishList(res.data.wishlist);
        console.log(res.data.wishlist);
      })
      .catch((err) => {
        console.error("Error fetching wishlist:", err);
      });
  }, []);

  console.log(wishlist)

  return (
    <Box sx={{ width: {xs:"88vw",sm:"77vw"}, margin: "auto" }}>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        My WishList ({wishlist?.length || 0} Items) (
        <span
         className={styles.seeMore}
          onClick={() => navigate("/wishlist")}
        >
          see more
        </span>
        )
      </Typography>

      {wishlist.length === 0 ? (
        <Typography variant="body2" color="text.secondary" align="center" sx={{ marginTop: 2,my:5 }}>
          No wishlist items are currently available.
        </Typography>
      ) : (
        <Box sx={{ border: "1px solid #dfdfdf", padding: 2, my: 2 }}>
          <Grid container spacing={2}>
            {wishlist.slice(0,4).map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Box sx={{ border: "1px solid #e0e0e0", borderRadius: 2, padding: 2 }}>
                  <CardMedia
                    component="img"
                    image={item?.product?.image?.[0] || "../images/default_product.jpg"}
                    alt={item?.product?.productName}
                    sx={{ width: "100%", height: "150px", objectFit: "cover" }}
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginTop: 1 }}
                  >
                    {item?.product?.productName || "Product Name"}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {`${item?.product?.description?.slice(0,30)}...` || "Product Name"}
                  </Typography>
                  <Typography variant="body1" color="green">
                    ${item?.product?.offerPrice} {" "}
                    {item?.product?.originalPrice && (
                      <span className={styles.originalPrice}
                      >
                        ${item?.product?.originalPrice}
                      </span>
                    )} {" "}
                    {item?.product?.discount && `${item?.product?.discount}% off`}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};
