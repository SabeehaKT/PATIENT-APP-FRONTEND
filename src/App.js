import logo from './logo.svg';
import './App.css';
import AddPatient from './components/AddPatient';
import SearchPatient from './components/SearchPatient';
import ViewPatient from './components/ViewPatient';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<AddPatient/>}/>
      <Route path="/search" element={<SearchPatient/>}/>
      <Route path="/view" element={<ViewPatient/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
