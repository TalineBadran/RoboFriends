import React, { useState } from "react";
import axios from "axios";

import RobotInfo from "./RobotInfo";

function Create(type) {
    const [open, setOpen] = useState(false);
    
  const handleCreate = async (val) => {
    try {
      const response = await axios.post("http://localhost:8080/user", val);
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  return (
    <div>
      <RobotInfo type="create" setOpen={setOpen} onSubmit={handleCreate} />
    </div>
  );
}

export default Create;
