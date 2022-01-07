import React, { useContext, useState, useEffect } from "react";
import {useHistory } from 'react-router-dom';
import Axios from 'axios';
import {Button } from 'reactstrap';
import ErrorMessage from '../error-message/errorMessage';
import UserContext from '../../context/UserContext';

function Reservation({setServiceEditOpen,editServiceData}) {
    const [name,setName] = useState("");
	const [price,setPrice] = useState(0)
	const [quantity,setQuantity] = useState(0);
	const [idService,setIDService] = useState("");
    const [errorMessage,setErrorMessage] = useState(null);
    const history = useHistory();
    const {user, userAddress, userEmail, userPhone, IDCard} = useContext(UserContext);
    useEffect(() =>{
        if(editServiceData){
            setName(editServiceData.name ? editServiceData.name: "");
            setPrice(editServiceData.price ? editServiceData.price: 0);
            setQuantity(editServiceData.quantity ? editServiceData.quantity: "");
            setIDService(editServiceData._id ? editServiceData._id: "");          
        }
     },[editServiceData])

    async function saveRoom(e) {
		e.preventDefault();
		const roomData = {
			quantity: quantity ? quantity: undefined,
			IDService: idService ? idService: undefined,
			name: name ? name: undefined,
			price: price ? price: undefined,
		}

        try {
            await Axios.post("http://localhost:5000/bookService",roomData); 

            if(window.confirm(`Cảm ơn bạn đã sử dùng sản phẩm ${!name?"":name} của chúng tôi. Chúng tôi sẽ mang lên Phòng cho bạn sau 5 phút nữa.`)){       
                history.push("/");
            } 
        } catch (err) {
            if(err.response && err.response.data.errorMessage) setErrorMessage(err.response.data.errorMessage)
            return;
        }
	}

	function closeRoom(){
	    setName("");
		setPrice(0);
		setQuantity(0);
		setIDService("");
        setServiceEditOpen(false);
	}
     
    return (
        <div onClick={()=>setErrorMessage(null)} className= "employee-post" >
        <section className="reservation">
        <div className="container mt-5 mb-5">
        <div className="reservation-content">
            <div>
            <h2 className="form-title">Thuê dịch vụ</h2>
            </div>
        <div className="form-flex">
        <div className="reservation-form">
            <h2 className="form-title1">Thông tin khách hàng</h2>
                <form className="re_form" >
                    {/* Họ tên khách hàng */}
                    <div className="form-group">
                        <label className="lblIcon" htmlFor="name">
                        <i class="zmdi zmdi-account material-icons-name"></i>

                        </label>
                    <input className="inputForm1" type="name" name="phone" id="phone" autoComplete="off"
                        placeholder="Họ tên khách hàng"
                        value={user}
                        readOnly
                    />
                    </div>  
                        
                    {/* Số điện thoại */}
                    <div className="form-group">
                    <label className="lblIcon" htmlFor="phone">
                        <i class="zmdi zmdi-phone material-icons-name"></i>

                    </label>
                    <input className="inputForm1" type="name" name="phone" id="phone" autoComplete="off"
                        placeholder="Số điện thoại"
                        value={userPhone}
                        readOnly
                    />
                </div> 
                
                {/* Địa chỉ */}
                <div className="form-group">
                    <label className="lblIcon" htmlFor="phone">
                        <i class="zmdi zmdi-pin material-icons-name"></i>

                    </label>
                    <input className="inputForm1" type="name" name="phone" id="phone" autoComplete="off"
                        placeholder="Địa chỉ"
                        value = {userAddress}
                        readOnly
                    />
                </div> 
                <div className="form-group">
                    <label  className="lblIcon" htmlFor="name">
                        <i class="zmdi zmdi-info material-icons-name"></i>

                    </label>
                    <input className="inputForm1" type="name" name="name" id="name" autoComplete="off"
                        placeholder="Email"
                        value = {userEmail}
                        readOnly
                    />
                </div>  
                <div className="form-group">
                    <label className="lblIcon" htmlFor="name">
                        <i class="zmdi zmdi-info material-icons-name"></i>

                    </label>
                    <input className="inputForm1" type="name" name="name" id="name" autoComplete="off"
                        placeholder="CMMD/CCCD"
                        value = {IDCard}
                        readOnly
                    />
                </div>  
                </form>                       
                </div>
                    <div className="info-form">
                <h2 className="form-title1">Thông tin dịch vụ</h2>
                <form className="re_form" onSubmit={saveRoom} >
                    <div >
                        <label className="lblColor" htmlFor ='number'>Tên dịch vụ</label>
                        <input id = 'number' 
                        type = 'text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='roomInput'
                        readOnly
                        />
                    </div>
                    <div>
                        <label className="lblColor" htmlFor ='floor'>Giá dịch vụ</label>
                        <input id = 'floor' 
                        type = 'number' 
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className='roomInput'
                        readOnly
                        />
                    </div>
                    <div>
                        <label className="lblColor"htmlFor ='note'>Số lượng</label>
                        <input id = 'note' 
                        type = 'number' 
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className='roomInput'
                        />
                    </div>                              
                    <div className='btn-confirm'>
                        <Button
                            type="submit"
                            color="success"
                            outline>
                            Tạo mới
                        </Button>
                        <Button
                            color="danger"
                            outline
                            type="button" onClick={closeRoom}>
                            Thoát
                        </Button>
                    </div>
                    {errorMessage && (
                        <ErrorMessage
                        message={errorMessage}/>
                    )}
                </form>
                        
            </div>

        </div>
        </div>
        </div>
        </section>
        </div>
    );
}

export default Reservation;
