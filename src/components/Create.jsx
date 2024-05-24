import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import RobotInfo from "./RobotInfo";

function Create() {    

  const navigate = useNavigate();
  const [handleBack, sethandleBack] = useState(true);

  const handleCreate = async (val) => {
    try {
      const response = await axios.post("http://localhost:8080/user", val);
      navigate("/")
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  return (
    <div className="test">
      <RobotInfo type="create" handleBack={handleBack} onSubmit={handleCreate} />
    </div>
  );
}

export default Create;
