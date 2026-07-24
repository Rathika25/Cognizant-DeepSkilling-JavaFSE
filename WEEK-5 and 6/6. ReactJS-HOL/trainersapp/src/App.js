import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import TrainersList from './Trainerlist';
import TrainerDetails from './TrainerDetails';
import trainersMock from './TrainersMock';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', border: '1px solid black', width: '400px', margin: '20px' }}>
        <h1>My Academy Trainers App</h1>
        <nav style={{ marginBottom: '15px' }}>
          <Link to="/">Home</Link> | <Link to="/trainers">Show Trainers</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<TrainersList trainers={trainersMock} />} />
          <Route path="/trainer/:id" element={<TrainerDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;