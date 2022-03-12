import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Dashboard from './pages/dashboard';
import Navbar from './components/Navbar';
import AddLog from './pages/AddLog';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/add-log" element={<AddLog/>} />
      </Routes>
    </Router>
  );
}

export default App;
