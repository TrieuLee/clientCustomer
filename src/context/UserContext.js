import React, {createContext, useEffect, useState} from "react";
import Axios from "axios";

const UserContext = createContext();

function UserContextProvider(props) {
    const [user, setUser] = useState(undefined);
    const [userAddress, setUserAddress] = useState(undefined);
    const [userEmail, setUserEmail] = useState(undefined);
    const [userPhone, setUserPhone] = useState(undefined);
    const [IDCard, setIDCard] = useState(undefined);

    
    async function getUser(){
       const userRes = await Axios.get("http://localhost:5000/customer/loggedIn");
       console.log(userRes.data);
       setUser(userRes.data?userRes.data.name:null);
       setUserAddress(userRes.data?userRes.data.address:null);
       setUserEmail(userRes.data?userRes.data.email:null);
       setUserPhone(userRes.data?userRes.data.phoneNumber:null);
       setIDCard(userRes.data?userRes.data.IDCard:null);
   }

   useEffect(() => {
       getUser();
   }, []);
   return (
        <UserContext.Provider value ={{
            user,
            userAddress,
            userEmail,
            userPhone,
            IDCard,
            getUser
        }}>{props.children}</UserContext.Provider>
   );
};

export default UserContext;
export {UserContextProvider};