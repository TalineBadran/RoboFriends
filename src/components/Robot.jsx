import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from './Popup';

function Robot({ robot, onEdit, onClick }) {
 
  const navigate = useNavigate();

  return (
    <>
      <div className="robot">
        <div className="popup">
          <Button
            onClick={() => navigate(`view/${robot.id}`)}
            variant="contained" id='popup-button'
          >
            View
          </Button>
          <Button
            onClick={onEdit}
            variant="contained" id='popup-button'
          >
            Edit
          </Button>
          <Popup/>
          <Button onClick={onClick} variant="contained" id='popup-button'>
            Delete
          </Button>
          {/* <Dialog open={open} fullWidth>
            <DialogTitle>
              Are you sure you want to delete this robot?
            </DialogTitle>
            <DialogActions className="error">
              <Button
                onClick={functionClose}
                color="error"
                variant="contained"
                id="delete"
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>  */}
        </div>
          <div className="img">
            {robot.imageUrl && <img src={robot.imageUrl} alt={robot.name} />}
          </div>
          <div className="info">
            <h2>{robot.name}</h2>
            <p>{robot.email}</p>
          </div>
        </div>
    </>
  );
}

export default Robot;
