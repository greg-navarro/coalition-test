import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import History from './components/History';
import Home from './components/Home';
import Climb from './components/Climb';
// import './App.css';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/history" element={<History />} />
          <Route path="/climb" element={<Climb />} />
          <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
