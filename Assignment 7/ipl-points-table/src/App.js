// src/App.js

import React from 'react';
import './App.css';
import PointsTable from './components/PointsTable';
import './components/PointsTable.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to IPL 2022 Points Table</h1>
      </header>
      <PointsTable />
    </div>
  );
}

export default App;
