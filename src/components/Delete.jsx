import React from "react";

function Delete() {
  const deleteRobot = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    });
}
    
  return (
    <div>
      <h3>Delete a resource</h3>
      <button type="submit" onClick={deleteRobot}>
        Delete a Robot
      </button>
    </div>
  );
}

export default Delete;
