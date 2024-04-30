import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import "./Info.css";

function Info() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="information">
        {/* {data && (
          <ul>
            <li key={data.name}>
              <strong>Name:</strong> {data?.name}, <br />
              <strong>robotname:</strong> {data?.robotname}, <br />
              <strong>Email:</strong> {data?.email}, <br />
              <strong>Address:</strong> {data.address?.street}, {data.address?.suite}, {data.address?.city}, {data.address?.zipcode}, <br />
              <strong>Phone:</strong> {data?.phone}, <br />
              <strong>Website:</strong> {data?.website}, <br />
              <strong>Company:</strong> {data.company?.name}, {data.company?.catchPhrase}, {data.company?.bs}
            </li>
          </ul>
        )} */}

        {data && (
          <>
            <div className="input">
              {/* <TextField
                id="name"
                label="name"
                defaultValue="Name:"
                variant="outlined"
              /> */}
              <label className="label" for="name">Name:</label>
              <TextField id="name" value={data?.name} />
            </div>
            <div className="input">
              {/* <TextField
                id="robot"
                label="robotname"
                defaultValue="RobotName:"
                variant="outlined"
              /> */}
              <label className="label" for="robot">Robot Name:</label>
              <TextField id="robot" value={data?.robotname} placeholder="Robot Name"/>
            </div>
            <div className="input">
              {/* <TextField
                id="email"
                label="email"
                defaultValue="Email:"
                variant="outlined"
              /> */}
              <label className="label" for="email">Email:</label>
              <TextField id="email" value={data?.email} />
            </div>
            <div className="input">
              {/* <TextField
                id="street"
                label="address"
                defaultValue="Street:"
                variant="outlined"
              /> */}
              <label className="label" for="street">Address Street:</label>
              <TextField id="street" value={data.address?.street} />
            </div>
            <div className="input">
              {/* <TextField
                id="suite"
                label="address"
                defaultValue="Suite:"
                variant="outlined"
              /> */}
              <label className="label" for="suite">Address Suite:</label>
              <TextField id="suite" value={data.address?.suite} />
            </div>
            <div className="input">
              {/* <TextField
                id="city"
                label="address"
                defaultValue="City:"
                variant="outlined"
              /> */}
              <label className="label" for="city">Address City:</label>
              <TextField id="city" value={data.address?.city} />
            </div>
            <div className="input">
              {/* <TextField
                id="zip"
                label="address"
                defaultValue="Zip Code:"
                variant="outlined"
              /> */}
              <label className="label" for="zip">Address Zip Code:</label>
              <TextField id="zip" value={data.address?.zipcode} />
            </div>
            <div className="input">
              {/* <TextField
                id="phpne"
                label="phone"
                defaultValue="Phone:"
                variant="outlined"
              /> */}
              <label className="label" for="phone">Phone:</label>
              <TextField id="phone" value={data?.phone} />
            </div>
            <div className="input">
              {/* <TextField
                id="website"
                label="website"
                defaultValue="Website:"
                variant="outlined"
              /> */}
              <label className="label" for="website">Website:</label>
              <TextField id="website" value={data?.website} />
            </div>
            <div className="input">
              {/* <TextField
                id="name"
                label="company"
                defaultValue="Name:"
                variant="outlined"
              /> */}
              <label className="label" for="name">Company Name:</label>
              <TextField
                id="name"
                value={data.company?.name}
                variant="outlined"
              />
            </div>
            <div className="input">
              {/* <TextField
                id="phrase"
                label="company"
                defaultValue="Catch Phrase:"
                variant="outlined"
              /> */}
              <label className="label" for="phrase">Company Catch Phrase:</label>
              <TextField id="phrase" value={data.company?.catchPhrase} />
            </div>
            <div className="input">
              {/* <TextField
                id="bs"
                label="company"
                defaultValue="Bs:"
                variant="outlined"
              /> */}
              <label className="label" for="bs">Company BS:</label>
              <TextField id="bs" value={data.company?.bs} />
            </div>
          </>
        )}
      </div>
    </Box>
  );
}

export default Info;
