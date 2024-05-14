import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Robot({ robot, onEdit, onClick }) {
 
  const navigate = useNavigate();

  return (
    <>
      <div className="robot">
        <div className="popup">
          <Button
            // onClick={() => navigate(`view/${robot.id}`)}
            onClick={() => navigate(`info/${robot.id}`)}
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
          <Button onClick={onClick} variant="contained" id='popup-button'>
            Delete
          </Button>
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
