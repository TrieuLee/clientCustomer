import React, {useContext, useEffect, useState } from 'react';
import Axios from 'axios';

import RoomPut from './Reservation';
import UserContext from '../../context/UserContext';
import Room from './room';
import './room.css';

function RoomList() {

	const [roomEditOpen,setRoomEditOpen] = useState(false);
	const [editRoomData,setEditRoomData] = useState(null);
    const [rooms, setRooms] = useState([]);
    const {user} = useContext(UserContext);


    useEffect(() =>{
		if(!user) setRooms([]);
		else getRooms();
	},[user]);

    async function getRooms() {
		const roomData = await Axios.get("http://localhost:5000/room/");

		let sortedEmployees  = [...roomData.data];
		sortedEmployees = sortedEmployees.filter(a => a.state===false && a.note!=='Đang bảo trì');

		sortedEmployees = sortedEmployees.sort((a,b) =>{
			return a.floor-b.floor;
		})

		setRooms(sortedEmployees);	
	}

    function renderEmployees() {
		
			const sortedEmployees =  rooms.map((room,i) =>{
				return <Room key={i} room ={room}
				getRooms={getRooms}
				editRoom={editRoom}
				/>
			})
			return sortedEmployees;
	}

	function editRoom(employeeData) {
		setEditRoomData(employeeData);
		setRoomEditOpen(true);
	}
 
   return <>
	{
		roomEditOpen ? (
			<RoomPut 
				editRoomData={editRoomData}				
				setRoomEditOpen={setRoomEditOpen}				
			/>
		):
		(
			<>
				{user === null&&(
					<h2>Hãy đăng nhập để thao tác trên hệ thống</h2>
				)}
				{
					rooms.length === 0 && user !== null && (
						<>{renderEmployees()}
						<h3>Phòng đã được đặt hết. Vui lòng liên hệ lễ tân để được hỗ trợ.</h3></>
					)
				}
				<>
				{
					user!==null && rooms.length > 0 && (
						<div className=''>
							<div className='room-title'>
								<h2>Xin mời quý khách lựa chọn phòng</h2>
							</div>
							<table className="table table-striped table-hover">
							
							<thead>
								<tr>
									<th>Tầng</th>
									<th>Số phòng</th>
									<th>Giá phòng</th>
									<th>Loại phòng</th>
									<th>Tình trạng phòng</th>
									<th>Ghi chú</th>
									<th>Thao tác</th>
								</tr>
							</thead>
							<tbody>
								{rooms.length > 0 ? renderEmployees() : (
									<h3>Không có dữ liệu</h3>
								)}
							</tbody>
						</table>
						</div>						
					)
				}
				</>
				
			</>
		)
	}
    </>;
};

export default RoomList;