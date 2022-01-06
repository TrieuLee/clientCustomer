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
                <a onClick={() => editService(service)} href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                <a onClick={deleteEmployee} href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
            </td>
        </tr>
        
    );
}

export default Room;