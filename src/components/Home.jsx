import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { DialogActions, DialogContent, DialogTitle } from "@mui/material";

import "./Home.css";
import Search from "./Search";
import Robot from "./Robot";
import RobotInfo from "./RobotInfo";
import { useNavigate } from "react-router-dom";

function Home() {
  const [filterText, setFilterText] = useState("");
  const [robots, setRobots] = useState([]);
  const [open, setOpen] = useState(false);
  const [openDel, setOpenDel] = useState(false);
  const [robot, setRobot] = useState({});
  const [editRobot, setEditRobot] = useState({});

  const updateRobot = async (editRobot) => {
    try {
      const updatedRobots = await axios.patch(`http://localhost:8080/user/${editRobot._id}`, editRobot);
      setOpen(false); 
      setRobots(
        updatedRobots?.data.map((robot, index) => ({
          ...robot,
          imageUrl: `https://robohash.org/${index + 1}?size=200x200`,
        }))
      );
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleRemoveRobot = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/user/${id}`);
      const deletedRobots = robots.filter((robot) => robot._id !== id);
      setRobots(deletedRobots);
      setOpenDel(false);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/user"
      );
      setRobots(
        response.data.map((robot, index) => ({
          ...robot,
          imageUrl: `https://robohash.org/${index + 1}?size=200x200`,
        }))
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredRobots = robots
    .map((robot) => (robot._id === editRobot._id ? editRobot : robot))
    .filter((robot) =>
      robot.name.toLowerCase().includes(filterText.toLowerCase())
    );

    const navigate = useNavigate();

  return (
    <>
      <div className="home">
        <div className="header">
          <h1>ROBOFRIENDS</h1>
          <div className="create">
          <div className="search-field">
            <Search
              filterText={filterText}
              onFilterTextChange={setFilterText}
            />
          </div>
          <div className="create-button" onClick={() => navigate("create")}>
            <img className="create-icon" src="https://www.svgrepo.com/show/434244/robot.svg" alt="robot icon"></img>
          </div>
        </div>
        </div>
        <div className="robots">
          {filteredRobots.map((robot) => (
            <>
              <Robot
                robot={robot}
                onEdit={() => {
                  setOpen(true);
                  setRobot(robot);
                }}
                onClick={() => {
                  setOpenDel(true);
                  setRobot(robot);
                }}
              />
            </>
          ))}
        </div>
      </div>
      <div>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogContent className="hidden-scrollbar">
            <div className="close edit-icon">
              <img
                className="close-icon"
                src="https://www.svgrepo.com/show/510924/close-md.svg"
                alt="close icon"
                onClick={() => setOpen(false)}
              ></img>
            </div>
            <RobotInfo
              data={robot}
              type="popup"
              setOpen={setOpen}
              setEditRobot={setEditRobot}
              onSubmit={updateRobot}
            />
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <Dialog open={openDel} onClose={() => setOpenDel(false)} fullWidth>
          <DialogTitle>
            <div className="title">
            Are you sure you want to delete this robot?
            <div className="close">
              <img
                className="close-icon"
                src="https://www.svgrepo.com/show/510924/close-md.svg"
                alt="close icon"
                onClick={() => setOpenDel(false)}
              ></img>
            </div>
            </div>
          </DialogTitle>
          <DialogActions>
            <Button
              color="error"
              variant="contained"
              id="delete"
              onClick={() => handleRemoveRobot(robot?._id)}
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default Home;
