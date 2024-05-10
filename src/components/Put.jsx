import React from "react";

function Put() {
  const UpdateRobot = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1,
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <h3>Updating a resource</h3>
      <button type="submit" onClick={UpdateRobot}>
        Update a Robot
      </button>
    </div>
  );
}

export default Put;
