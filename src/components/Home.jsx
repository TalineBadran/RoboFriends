import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import "./Home.css";
import Search from "./Search";
import Info from "./Info";
import Robot from "./Robot";
import RobotInfo from "./RobotInfo";
import Dialog from "@mui/material/Dialog";
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function Home() {
  const [filterText, setFilterText] = useState("");
  const [robots, setRobots] = useState([]);
  const [open, setOpen] = useState(false);
  const [openDel, setOpenDel] = useState(false);
  const [robot, setRobot] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setRobots(
          response.data.map((robot, index) => ({
            ...robot,
            id: index + 1,
            imageUrl: `https://robohash.org/${index + 1}?size=200x200`,
          }))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(filterText.toLowerCase())
  );

  // const test = () => {
  //   <Dialog>
  //     {/* <DialogContent>
  //       <RobotInfo/>
  //     </DialogContent> */}
  //   </Dialog>;
  // };

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

              onClick= {() => setOpenDel(true)}
            />
            // </div>
          ))}
        </div>
        {/* <div className="CRUD">
      <div className="create">
        <button type="submit" onClick={() => navigate("/post")}>Create a Robot</button>
      </div>
      <div className="get">
        <button type="submit" onClick={() => navigate("/get")}>Listing a ressource</button>
      </div>
      <div className="put">
        <button type="submit" onClick={() => navigate("/put")}>Update a ressource</button>
      </div>
      <div className="patch">
        <button type="submit" onClick={() => navigate("/patch")}>Patch a ressource</button>
      </div>
      <div className="delete">
        <button type="submit" onClick={() => navigate("/delete")}>Delete a ressource</button>
      </div>
      // </div> */}
      </div>
      <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <RobotInfo data={robot} type='popup' />
        </DialogContent>
      </Dialog>
      </div>
      <div>
      <Dialog open={openDel} onClose={() => setOpenDel(false)} fullWidth>
            <DialogTitle>
              Are you sure you want to delete this robot?
            </DialogTitle>
            <DialogActions className="error">
              <Button
                color="error"
                variant="contained"
                id="delete"
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
