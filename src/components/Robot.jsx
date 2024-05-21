import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import "./Robot.css"

function Robot({ robot, onEdit, onClick }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="robot">
        <div className="popup">
          {/* <Button
            onClick={() => navigate(`info/${robot.id}`)}
            variant="contained" id='popup-button'
          >
            View
          </Button> */}
          <Button
            onClick={onEdit}
            variant="contained" id='popup-button'
            className="edit"
          >
            <img className="icon" src="https://www.svgrepo.com/show/485709/edit.svg" alt="edit icon"></img>
          </Button>
          <Button onClick={onClick} variant="contained" id='popup-button'>
            <img className="icon" src="https://www.svgrepo.com/show/488897/delete-2.svg" alt="delete icon"></img>
          </Button>
        </div>
          <div className="img" onClick={() => navigate(`info/${robot._id}`)}>
            {robot.imageUrl && <img src={robot.imageUrl} alt={robot.name} />}
          </div>
          <div className="info" onClick={() => navigate(`info/${robot._id}`)}>
            <h2>{robot.name}</h2>
            <p>{robot.email}</p>
          </div>
        </div>
    </>
  );
}

export default Robot;
