import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import IconButton from '@mui/material/IconButton';

import "./Home.css";
import Search from "./Search";
import Robot from "./Robot";
import RobotInfo from "./RobotInfo";

function Home() {
  const [filterText, setFilterText] = useState("");
  const [robots, setRobots] = useState([]);
  const [open, setOpen] = useState(false);
  const [openDel, setOpenDel] = useState(false);
  const [robot, setRobot] = useState({});
  const [editRobot, setEditRobot] = useState({});
  console.log(editRobot)


  // console.log(robots)

  const handleRemoveItem = (index) => {
    const del = [...robots];
    del.splice(index-1, 1);
    setRobots(del);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const updateRobots = (editRobot) => { robots.map(robot => 
      (editRobot?.id === robot.id) ? editRobot : robot);
      setRobots(updateRobots)
    }
  

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
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

  // useEffect(() => {
  //   console.log("robots", robots);
  // }, [robots]);

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(filterText.toLowerCase())
  );


  return (
    <>
      <div className="home">
        <div className="header">
          <h1>ROBOFRIENDS</h1>
          <div>
            <Search
              filterText={filterText}
              onFilterTextChange={setFilterText}
            />
          </div>
        </div>
        <div className="robots">
          {filteredRobots.map((robot) => (
            // <div
            //   key={robot.id}
            //   onClick={() => navigate(`info/${robot.id}`)}
            // >

            <Robot
              robot={robot}
              onEdit={() => {
                setOpen(true);
                setRobot(robot);
              }}
              onClick={() => {setOpenDel(true); setRobot(robot);}}
            />
            // </div>
          ))}
        </div>
      </div>
      <div>
        <Dialog open={open} onClose={() => setOpen(false)}>
        <IconButton aria-label="close" onClick={handleClose}>
          CLOSE
  </IconButton>
          <DialogContent>
            <RobotInfo data={robot} type="popup" setEditRobot={setEditRobot}/>
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <Dialog open={openDel} onClose={() => setOpenDel(false)} fullWidth>
          <DialogTitle>Are you sure you want to delete this robot?</DialogTitle>
          <DialogActions className="error">
            <Button
              color="error"
              variant="contained"
              id="delete"
              onClick={ () => handleRemoveItem(robot?.id)}
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
