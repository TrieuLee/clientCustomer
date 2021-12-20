
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import {Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (  
    <div className='App'>
      <>
      <Menu/>
      <Routes>
      <Route exact path="/" element={ <SignIn/>}/>
      <Route path="/signup" element={ <SignUp/>}/>
      </Routes>
    
      
      </>
    </div>
  );
}

export default App;
