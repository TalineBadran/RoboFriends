import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import RobotInfo from "./RobotInfo";

function Info() {
  const { id } = useParams();
  const [data, setData] = useState();

  
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      console.log("=====>", response?.data);
      setData(response.data);
      console.log("response.data", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
    <RobotInfo data={data} isDisabled /></>
  );
}

export default Info;
