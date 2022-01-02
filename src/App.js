import Axios from 'axios';

import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {UserContextProvider} from './context/UserContext';
import 'bootstrap/dist/css/bootstrap.css';
import Reservation from './pages/Reservation';
import BookRoom from './component/BookRoom/roomList';

Axios.defaults.withCredentials = true;

function App() {
  return (  
    <UserContextProvider>
    <div className='App'>

      <BrowserRouter>
          <Switch>
        <Route exact path="/"> <Home/> </Route>
            <Route path="/signin"> <SignIn/> </Route>
            <Route path="/signup"> <SignUp/> </Route>
            <Route path="/reservation"><Reservation/></Route>
            <Route path="/bookRoom"><BookRoom/></Route>
          </Switch>
        
      </BrowserRouter>
    </div>
    </UserContextProvider>
  );
}

export default App;
