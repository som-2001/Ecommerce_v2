import { Box, Button } from "@mui/material";
import ProductTable from "../../components/Admin/Product/ProductTable";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

export const AdminProductDashboard = () => {
  
  const navigate=useNavigate();
  
  return (
    <Box>
    <Box sx={{display:"flex",justifyContent:"flex-end"}}>    
      <Button
        sx={{
          padding: 2,
          borderRadius: 2,
          width: "185px",
          backgroundColor: "black",
          color: "white",
          mb:2
        }}
       onClick={(e)=>navigate("/admin/add-product")} 
      >Add Product <AddIcon/></Button>
    </Box>  
      <ProductTable />
    </Box>
  );
};
