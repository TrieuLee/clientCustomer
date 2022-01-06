import React, {useState} from 'react';
import {Button } from 'reactstrap';
import {useHistory } from 'react-router-dom';
import Axios from 'axios';
import ErrorMessage from '../error-message/errorMessage';

function Room({room}) {

	const history = useHistory();
	const [errorMessage,setErrorMessage] = useState(null);

	async function saveRoom(e) {

        try {
            await Axios.put(`http://localhost:5000/bookService/payService/${room._id}`); 

            if(window.confirm('Bạn đã thanh toán thành công. Xin chào và hẹn gặp lại')){       
                history.push("/");
            } 
        } catch (err) {
            if(err.response && err.response.data.errorMessage) setErrorMessage(err.response.data.errorMessage)
            return;
        }
	}
    return (
		<>
		{errorMessage && (
				<ErrorMessage
				message={errorMessage}/>
		)}
			<table>
				<tr>
					<th>Tên dịch vụ: </th>
					<td>{room.name}</td>
				</tr>
				<tr>
					<th>Giá</th>
					<td>{room.price}</td>
				</tr>
				<tr>
					<th>Số lượng</th>
					<td>{room.quantity}</td>
				</tr>
				<tr>
					<th>Tình trạng thanh Toán</th>
					<td>{room.state?'Đã thanh toán':'Chưa thanh toán'}</td>
				</tr>
				<tr>
					<th>Tổng tiền</th>
					<td>{room.quantity*room.price}</td>
				</tr>
					
			</table>
			<Button
				color="danger"
				outline
				type="button"
				onClick={saveRoom}  >
				Thanh Toán
			</Button>
		</>
    );
}

export default Room;