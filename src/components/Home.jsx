import React, { useState, useEffect } from "react";
import './Home.css';
import Search from './Search';
import Robot from './Robot';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [filterText, setFilterText] = useState('');
  const [robots, setRobots] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setRobots(response.data.map((robot, index) => ({
          ...robot,
          id: index + 1,
          imageUrl: `https://robohash.org/${index + 1}?size=200x200`
        })));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  console.log(robots)

  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      <div className='header'>
        <h1>ROBOFRIENDS</h1>
        <div>
          <Search filterText={filterText} onFilterTextChange={setFilterText}/>
        </div>
      </div>
      <div className='robots'>
        {filteredRobots.map(robot => (
          <div key={robot.id} onClick={() => navigate(`info/${robot.id}`)}>
            <Robot robot={robot} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
