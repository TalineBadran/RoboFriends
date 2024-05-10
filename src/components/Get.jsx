import React from "react";

function Get() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));


  return (
    <div>
      <h3>Listing a resource</h3>
    </div>
  );
}

export default Get;
