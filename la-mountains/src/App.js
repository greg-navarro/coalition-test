import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import History from './components/History';
import Home from './components/Home';
// import './App.css';

function App() {
  return (
    <Router>
      {/* <Home /> */}
      <Routes>
          <Route path="/history" element={<History />} />
          <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
