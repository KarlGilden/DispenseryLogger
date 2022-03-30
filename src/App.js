import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import LoggedinRedirect from './components/LoggedinRedirect';
import Home from './pages/Home';
import SignupPage from './pages/SignupPage';
import User from './pages/User';
import { AuthProvider } from './contexts/AuthContext';
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<LoggedinRedirect><Home/></LoggedinRedirect>}/>
          <Route path='/signup' element={<LoggedinRedirect><SignupPage/></LoggedinRedirect>}/>
          <Route path='/user/*' element={<PrivateRoute><User/></PrivateRoute>}/>
        </Routes>
        </AuthProvider>
    </Router>
  );
}

export default App;
