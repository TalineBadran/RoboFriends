import React from "react";

function Put() {
  const patchRobot = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "foo",
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <h3>Patching a resource</h3>
      <button type="submit" onClick={patchRobot}>
        Patch a Robot
      </button>
    </div>
  );
}

export default Put;
