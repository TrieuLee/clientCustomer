
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Reservation from './pages/Reservation';


function App() {
  return (  
    <div className='App'>

      <BrowserRouter>
          <Switch>
        <Route exact path="/"> <Home/> </Route>
            <Route path="/signin"> <SignIn/> </Route>
            <Route path="/signup"> <SignUp/> </Route>
            <Route path="/reservation"><Reservation/> </Route>

          </Switch>
        
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
