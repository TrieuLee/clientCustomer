import React, {useContext, useEffect, useState } from 'react';
import Axios from 'axios';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';

import ServicePut from './bookService';
import UserContext from '../../context/UserContext';
import Service from './service';
import '../BookRoom/room.css';

function RoomList() {

	const [serviceEditOpen,setServiceEditOpen] = useState(false);
	const [editServiceData,setEditServiceData] = useState(null);
    const [services, setServices] = useState([]);
    const {user} = useContext(UserContext)
	const history = useHistory();

    useEffect(() =>{
		if(!user) setServices([]);
		else getServices();
	},[user]);

    async function getServices() {
		const serviceData = await Axios.get("http://localhost:5000/service/");

		let sortedService  = [...serviceData.data];
		setServices(sortedService);	
	}

    function renderEmployees() {
		
			const sortedEmployees =  services.map((service,i) =>{
				return <Service key={i} service ={service}
				getServices={getServices}
				editService={editService}
				/>
			})
			return sortedEmployees;
	}

	function editService(employeeData) {
		setEditServiceData(employeeData);
		setServiceEditOpen(true);
		console.log(employeeData);	
	}

	const customStyles = {
		content: {
		  top: '50%',
		  left: '50%',
		  right: 'auto',
		  bottom: 'auto',
		  marginRight: '-50%',
		  transform: 'translate(-50%, -50%)',
		  padding:'0',
		  border:'0',
		},
	  };
   
   return <>
	   {
		   serviceEditOpen ? (
				<ServicePut 
				setServiceEditOpen = {setServiceEditOpen}
				editServiceData={editServiceData}					
				/>
		   ):
		   (
			   <>
					{user === null&&(
							<h2>Hãy đăng nhập để thao tác trên hệ thống</h2>
						)}
						{
						services.length === 0 && user !== null && (
							<>{renderEmployees()}
							<h3>Dịch vụ hiện tại không khả dụng. Vui lòng liên hệ lễ tân đẽ được hướng dẫn chi tiết</h3></>
						)
						}
						<>
						{
						user!==null && services.length > 0 && (
							<div>
								<div className='room-title'>
								<h2>Xin mời quý khách lựa chọn dịch vụ</h2>
							</div>
								<table className="table table-striped table-hover">
							<thead>
								<tr>
									<th>Tên dịch vụ</th>
									<th>Giá dịch vụ</th>
									<th>ThaoTác</th>
								</tr>
							</thead>
							<tbody>
								{services.length > 0 ? renderEmployees():(
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