import Axios from 'axios';

import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {UserContextProvider} from './context/UserContext';
import 'bootstrap/dist/css/bootstrap.css';
import BookRoom from './component/BookRoom/roomList';
import BookService from './component/BookService/serviceList';
import BillRoom from './component/BillRoom/billRoomList';
import BillService from './component/BillService/billServiceList';
import Menu from './pages/Menu';
import Service from './pages/Service';
import ChangePass from './pages/changePassWord';

Axios.defaults.withCredentials = true;

function App() {
  return (  
    <UserContextProvider>
    <div className='App'>

      <BrowserRouter>
          <Switch>
        <Route exact path="/"> <Home/> </Route>



            <Route path="/signin"><Menu/> <SignIn/> </Route>
            <Route path="/signup"><Menu/> <SignUp/> </Route>
            <Route path="/bookRoom"> <Menu/><BookRoom/></Route>
            <Route path="/bookService"> <Menu/><BookService/></Route>
            <Route path="/billRoom"> <Menu/><BillRoom/></Route>
            <Route path="/billService"> <Menu/><BillService/></Route>
            <Route path="/signin"> <SignIn/> </Route>
            <Route path="/signup"> <SignUp/> </Route>
            <Route path="/service"><Service/> </Route>
            <Route path="/changePassword"><ChangePass/> </Route>

          </Switch>
        
      </BrowserRouter>
    </div>
    </UserContextProvider>
  );
}

export default App;
