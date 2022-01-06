import React from 'react';

import Axios from 'axios';
function Room({room,getRooms,editRoom}) {

    async function deleteEmployee(){
        if(window.confirm('Bạn có chắc muốn xóa dữ liệu phòng này?')){
            await Axios.delete(`http://localhost:5000/room/${room._id}`);
            getRooms();
        } 
    }

    return (
        <tr>
            <td>{room.floor}</td>
            <td>{room.number}</td>
            <td>{room.price}</td>
            <td>{room.typeofRoom}</td>
            <td>{room.state?"Có Khách thuê":"Phòng trống"}</td>
            <td>{room.note}</td>
            <td>
                <a onClick={() => editRoom(room)} href="#editEmployeeModal" className="edit" data-toggle="modal"><i class="fas fa-concierge-bell"></i>Đặt phòng</a>
            </td>
        </tr>
        
    );
}

export default Room;