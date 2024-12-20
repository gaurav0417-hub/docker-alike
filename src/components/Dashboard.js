import React, { useState, useEffect } from "react";
import { getContainers, startContainer } from "../api";
import TerminalComponent from "./Terminal";

const Dashboard = () => {
  const [containers, setContainers] = useState([]);
  const [image, setImage] = useState("alpine");
  const [command, setCommand] = useState("sh");

  // Fetch containers on load
  useEffect(() => {
    fetchContainers();
  }, []);

  const fetchContainers = async () => {
    const data = await getContainers();
    setContainers(data);
  };

  const handleStartContainer = async () => {
    await startContainer(image, command);
    fetchContainers();
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <input
          type="text"
          placeholder="Docker Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Command"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
        />
        <button onClick={handleStartContainer}>Start Container</button>
      </div>

      <h3>Running Containers</h3>
      <ul>
        {containers.map((container) => (
          <li key={container.id}>
            {container.image} - {container.id}
          </li>
        ))}
      </ul>

      <TerminalComponent />
    </div>
  );
};

export default Dashboard;
