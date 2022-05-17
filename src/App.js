import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';

function App() {
  return (
    <Router>
    <div className="App">
      <ToastContainer position="top-ceter" />
      
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route  path="/addContact" element={<AddEdit/>} />

        </Routes>
    
    </div>
    </Router>
  );
}

export default App;
