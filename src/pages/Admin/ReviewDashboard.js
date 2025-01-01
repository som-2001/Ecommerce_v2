import { Box} from "@mui/material";
import ReviewTable from "../../components/Admin/Review/ReviewTable";

export const ReviewDashboard = () => {
   return (
    <Box sx={{display:"flex",justifyContent:"flex-end"}}>    
    
      <ReviewTable />
    </Box>
  );
};
