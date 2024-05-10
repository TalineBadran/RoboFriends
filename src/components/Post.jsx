import React from "react";

function Post() {
  const createRobot = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: '10',
        name: 'taline',
        username: 'robotname',
        address: {
            street: '15 rue ludwig van beethoven',
            suite: "Apt. 207",
            city: "Toulouse",
            zipcode: "31400",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "taline.org",
    company: {
      name: "Areeba",
      catchPhrase: "Websites",
      bs: "harness real-time e-markets"
        }
      }),
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
  };

  return (
    <div>
      <h3>Creating a Robot</h3>
      <button type="button" onClick={createRobot}>Create a Robot</button>
    </div>
  );
}

export default Post;
