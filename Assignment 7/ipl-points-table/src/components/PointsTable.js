// src/components/PointsTable.js

import React, { useEffect, useState } from 'react';

const PointsTable = () => {
  const [teamsData, setTeamsData] = useState([]);

  useEffect(() => {
    fetchPointsTable();
  }, []);

  const fetchPointsTable = async () => {
    try {
      const response = await fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Sort data by NRR (Net Run Rate) in ascending order
      data.sort((a, b) => a.NRR - b.NRR);
      setTeamsData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="points-table">
      <h2>IPL 2022 Points Table</h2>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teamsData.map((team) => (
            <tr key={team.No}>
              <td>{team.No}</td>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.Tied}</td>
              <td>{team.NRR}</td>
              <td>{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PointsTable;
