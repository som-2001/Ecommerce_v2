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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const LogoutDialog=({open,setOpen})=>{
  
  const handleClose = () => {
    setOpen(false);
  };

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
          <Button variant='contained' onClick={handleClose} sx={{borderRadius:3,backgroundColor:"black",p:2,width:"120px"}}>Logout</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
