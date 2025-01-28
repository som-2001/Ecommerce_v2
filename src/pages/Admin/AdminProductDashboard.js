import { Box, Button } from "@mui/material";
import ProductTable from "../../components/Admin/Product/ProductTable";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/Admin/AdminProductDashboard.module.css";

export const AdminProductDashboard = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box className={styles.parent}>
        <Button
          className={styles.button}
          onClick={(e) => navigate("/admin/add-product")}
        >
          Add Product <AddIcon />
        </Button>
      </Box>
      <ProductTable />
    </Box>
  );
};
