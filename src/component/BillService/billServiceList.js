import React, {useContext, useEffect, useState } from 'react';
import Axios from 'axios';

import UserContext from '../../context/UserContext';
import Room from './billService';
import '../BookRoom/room';

function RoomList() {
    const [rooms, setRooms] = useState([]);
    const {user} = useContext(UserContext)

    useEffect(() =>{
		if(!user) setRooms([]);
		else getRooms();
	},[user]);

    async function getRooms() {
		const roomData = await Axios.get("http://localhost:5000/bookService/");

		let sortedEmployees  = [...roomData.data];
		sortedEmployees = sortedEmployees.filter(a => a.state===false);
		setRooms(sortedEmployees);	
	}

    function renderEmployees() {
		
			const sortedEmployees =  rooms.map((room,i) =>{
				return <Room key={i} room ={room}
				getRooms={getRooms}
				/>
			})
			return sortedEmployees;
	}
   
   return <>
      {user === null&&(
			<h2>Hãy đăng nhập để thao tác trên hệ thống</h2>
	  )}
      {
          user!==null && (
              <>
              {rooms.length > 0 ? renderEmployees() : (
					<h3>Bạn chưa Sử dụng dịch vụ nào. Hãy sữ dụng dịch vụ của chúng tôi để có trải nghiệm tốt nhất </h3>
			)}</>
          )
      }
    </>;
};

export default RoomList;