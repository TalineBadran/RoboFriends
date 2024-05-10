import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import "./View.css";

function View() {
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
    <Box id='view'
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="view-information">
        {data && (
          <>
            <div className="view-input">
              <label className="view-label" for="name">Name:</label>
              <TextField id="name" value={data?.name} disabled/>
            </div>
            <div className="view-input">
              <label className="view-label" for="robot">Robot Name:</label>
              <TextField id="robot" value={data?.robotname} placeholder="Robot Name" disabled/>
            </div>
            <div className="view-input">
              <label className="view-label" for="email">Email:</label>
              <TextField id="email" value={data?.email}  disabled/>
            </div>
            <div className="view-input">
              <label className="view-label" for="street">Address Street:</label>
              <TextField id="street" value={data.address?.street} disabled/>
            </div>
            <div className="view-input">
              <label className="view-label" for="suite">Address Suite:</label>
              <TextField id="suite" value={data.address?.suite} disabled />
            </div>
            <div className="view-input">
              <label className="view-label" for="city">Address City:</label>
              <TextField id="city" value={data.address?.city} disabled/>
            </div>
            <div className="view-input">
              <label className="view-label" for="zip">Address Zip Code:</label>
              <TextField id="zip" value={data.address?.zipcode} disabled/>
            </div>
            <div className="view-input">
                <label className="view-label" for="lat">Latitude</label>
                <TextField id="lat" value={data.address?.geo?.lat} disabled/>
            </div>
            <div className="view-input">
                <label className="view-label" for="lng">Longitude</label>
                <TextField id="lng" value={data.address?.geo?.lng} disabled/>
            </div>
            <div className="view-input">
              <label className="view-label" for="phone">Phone:</label>
              <TextField id="phone" value={data?.phone} disabled/>
            </div>
            <div className="view-input">
              <label className="view-label" for="website">Website:</label>
              <TextField id="website" value={data?.website} disabled/>
            </div>
            <div className="view-input">
              <label className="view-label" for="name">Company Name:</label>
              <TextField
                id="name"
                value={data.company?.name}
                variant="outlined"
                disabled
              />
            </div>
            <div className="view-input">
              <label className="view-label" for="phrase">Company Catch Phrase:</label>
              <TextField id="phrase" value={data.company?.catchPhrase} disabled/>
            </div>
            <div className="view-input">
              <label className="view-label" for="bs">Company BS:</label>
              <TextField id="bs" value={data.company?.bs} disabled/>
            </div>
          </>
        )}
      </div>
    </Box>
  );
}

export default View;