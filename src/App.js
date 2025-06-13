// src/App.js
import './App.css';
import Home from '../src/view/Homepage'; // Import the Home component\
import '../src/assets/index.css'
import JobList from './components/JobCard';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
          <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs/:id" element={<JobList />} />
    </Routes>

    </div>
  );
}

export default App;
