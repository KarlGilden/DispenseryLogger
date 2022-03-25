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
import History from './pages/History';
import Editlog from './pages/Editlog';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/add-log" element={<AddLog/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/edit-log/:id" element={<Editlog/>} />
      </Routes>
    </Router>
  );
}

export default App;
