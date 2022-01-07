import React from 'react';

import Axios from 'axios';

function Room({service,getServices,editService}) {

    async function deleteEmployee(){
        if(window.confirm('Bạn có chắc muốn xóa dữ liệu phòng này?')){
            await Axios.delete(`http://localhost:5000/room/${service._id}`);
            getServices();
        } 
    }

    return (
        <tr>
            <td>{service.name}</td>
            <td>{service.price}</td>
            <td>
                <a style={{textAlign:'center', color:'orange    '}} onClick={() => editService(service)} >Đặt dịch vụ</a>
              
            </td>
        </tr>
        
    );
}

export default Room;