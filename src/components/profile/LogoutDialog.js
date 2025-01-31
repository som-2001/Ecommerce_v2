import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Box } from '@mui/material';
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetProduct } from '../../Redux/ProductAdminSlice/ProductSlice';
import Cookies from 'js-cookie'

const Transition = React.forwardRef(function Transition(props, ref) { 
  return <Slide direction="up" ref={ref} {...props} />;
});

export const LogoutDialog=({open,setOpen})=>{
  
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const logout=()=>{
    axios.post(`${process.env.REACT_APP_BASEURL}/auth/logout`,{},{
      withCredentials:true
    }).then(res=>{
      enqueueSnackbar(res.data?.message,{variant:"success"});
      localStorage.removeItem("wishlist");
      localStorage.removeItem("cart");
      Cookies.set("accessToken","");
      Cookies.set("refreshToken","");
      dispatch(resetProduct());
      setTimeout(()=>{
        navigate('/');
      },1500);
    }).catch(error=>{
      enqueueSnackbar(error?.response?.data?.message,{variant:"error"});
    })
  }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
       
      >
        <DialogTitle>{"Logout"}</DialogTitle>
        <DialogContent>
            <Box sx={{display:"flex",justifyContent:"center",my:2}}>
                <ExitToAppIcon sx={{backgroundColor:"whitesmoke",p:2,borderRadius:8,fontSize:"2.2rem"}}/>
            </Box>
          <DialogContentText id="alert-dialog-slide-description">
           Are you sure you want to logout ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' sx={{borderRadius:4, border:"none",color:"black",p:2,width:"120px"}} onClick={handleClose}>Cancel</Button>
          <Button variant='contained' onClick={logout} sx={{borderRadius:3,backgroundColor:"black",p:2,width:"120px"}}>Logout</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
