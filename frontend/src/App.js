import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import Delete from './Components/Delete';
import Showme from './Components/Showme';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route exact path="/" element={<Create/>}/>
      <Route exact path="/all" element={<Read/>}/>
      <Route exact path="/showme/:id" element={<Showme/>}/>
      <Route exact path="/update/:id" element={<Update/>}/>
      <Route exact path="/delete/:id" element={<Delete/>}/>
      
      </Routes>
    </BrowserRouter>
  );
}
export default App;
