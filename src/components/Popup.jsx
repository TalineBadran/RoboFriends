import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { DialogActions, DialogContent, DialogContentText } from "@mui/material";

function Popup(props) {
//   const functionOpen = () => {
//     setOpen(true);
//   }

//   const functionClose = () => {
//     setOpen(false);
//   }

//   const navigate = useNavigate();

const {open, functionClose} = props;
    
    return(
      <>
      <div className="view-popup">
        <Dialog open={open} onClose={functionClose} fullWidth>
            <DialogContent>
                <DialogContentText>Taline</DialogContentText>
            </DialogContent>
          <DialogActions className="error">
            <Button color="error" variant="contained" id="delete">Delete</Button>
          </DialogActions>
        </Dialog>
      </div> 
      </>
    )
  }

export default Popup;