import logo from './logo.svg';
import './App.css';
import AddPatient from './components/AddPatient';
import SearchPatient from './components/SearchPatient';
import ViewPatient from './components/ViewPatient';

function App() {
  return (
    <div>
     <AddPatient/>
     <SearchPatient/>
     <ViewPatient/>
    </div>
  );
}

export default App;
