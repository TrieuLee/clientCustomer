
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import {Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Reservation from './pages/Reservation';

function App() {
  return (  
    <div className='App'>
      <>
      <Menu/>
      <Routes>
      <Route exact path="/" element={ <SignIn/>}/>
      <Route path="/signup" element={ <SignUp/>}/>
      <Route path="/reservation" element={ <Reservation/>}/>
      </Routes>

      
      
      
      </>
    </div>
  );
}

export default App;
