import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <ToastContainer position="top-ceter" />
      
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
    
    </div>
    </Router>
  );
}

export default App;
