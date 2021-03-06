import React, { useContext, useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {useHistory } from 'react-router-dom';
import Axios from 'axios';
import {Button } from 'reactstrap';
import ErrorMessage from '../error-message/errorMessage';
import UserContext from '../../context/UserContext';

function Reservation({editRoomData,setRoomEditOpen}) {
    const [number,setNumber] = useState(0);
	const [floor,setFloor] = useState(0);
	const [price,setPrice] = useState(0)
	const [note,setNote] = useState("");
	const [state,setState] = useState(false);
	const [typeofRoom,setTypeofRoom] = useState("");
	const [idRoom,setIdRoom] = useState("");
	const [checkIn,setCheckIn] = useState("");
	const [checkOut,setCheckOut] = useState("");
    const [errorMessage,setErrorMessage] = useState(null);
    const history = useHistory();
    const {user, userAddress, userEmail, userPhone, IDCard} = useContext(UserContext);
    useEffect(() =>{
        if(editRoomData){
            setNumber(editRoomData.number ? editRoomData.number: 0);
            setFloor(editRoomData.floor ? editRoomData.floor: 0);
            setPrice(editRoomData.price ? editRoomData.price: 0);
            setNote(editRoomData.note ? editRoomData.note: false);
            setState(editRoomData.state ? editRoomData.state: "");
            setTypeofRoom(editRoomData.typeofRoom ? editRoomData.typeofRoom: "");
            setIdRoom(editRoomData._id ? editRoomData._id: "");                   
        }
     },[editRoomData])

    async function saveRoom(e) {
		e.preventDefault();
		const roomData = {
			checkIn: checkIn ? checkIn: undefined,
			checkOut: checkOut ? checkOut: undefined,
			IDRoom: idRoom ? idRoom: undefined,
			number: number ? number: undefined,
			floor: floor ? floor: undefined,
			price: price ? price: undefined,
			note: note ? note: undefined,
			typeofRoom: typeofRoom ? typeofRoom: undefined,
			name: user ? user: undefined,
			address: userAddress ? userAddress: undefined,
			email: userEmail ? userEmail: undefined,
			phoneNumber: userPhone ? userPhone: undefined,
			IDCard: IDCard ? IDCard: undefined

		}

        try {
            await Axios.post("http://localhost:5000/bookRoom",roomData); 

            if(window.confirm('Ph??ng c???a b???n ???? s???n s??ng.Vui l??ng nh???n x??c nh???n v?? ????? qu???y l??? t??n ????? nh???n ph??ng')){       
                history.push("/");
            } 
        } catch (err) {
            if(err.response && err.response.data.errorMessage) setErrorMessage(err.response.data.errorMessage)
            return;
        }
	}

	function closeRoom(){
	    setNumber(0);
	    setFloor(0);
		setPrice(0);
		setNote("");
		setState(false);
		setTypeofRoom("");
		setRoomEditOpen(false);
	}
     
    return (
        <div onClick={()=>setErrorMessage(null)} className= "employee-post" >
        <section className="reservation">
        <div className="container mt-5 mb-5">
        <div className="reservation-content">
            <div>
            <h2 className="form-title">?????t ph??ng</h2>
            </div>
        <div className="form-flex">
        <div className="reservation-form">
            <h2 className="form-title1">Th??ng tin kh??ch h??ng</h2>
                <form className="re_form" >
                    {/* H??? t??n kh??ch h??ng */}
                    <div className="form-group">
                        <label className="lblIcon" htmlFor="name">
                        <i class="zmdi zmdi-account material-icons-name"></i>

                        </label>
                    <input className="inputForm1" type="name" name="phone" id="phone" autoComplete="off"
                        placeholder="H??? t??n kh??ch h??ng"
                        value={user}
                        readOnly
                    />
                    </div>  
                        
                    {/* S??? ??i???n tho???i */}
                    <div className="form-group">
                    <label className="lblIcon"  htmlFor="phone">
                        <i class="zmdi zmdi-phone material-icons-name"></i>

                    </label>
                    <input className="inputForm1" type="name" name="phone" id="phone" autoComplete="off"
                        placeholder="S??? ??i???n tho???i"
                        value={userPhone}
                        readOnly
                    />
                </div> 
                
                {/* ?????a ch??? */}
                <div className="form-group">
                    <label className="lblIcon" htmlFor="phone">
                        <i class="zmdi zmdi-pin material-icons-name"></i>

                    </label>
                    <input className="inputForm1" type="name" name="phone" id="phone" autoComplete="off"
                        placeholder="?????a ch???"
                        value = {userAddress}
                        readOnly
                    />
                </div> 
                <div className="form-group">
                    <label className="lblIcon" htmlFor="name">
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
                <h2 className="form-title1">Th??ng tin lo???i ph??ng</h2>
                <form className="re_form" onSubmit={saveRoom} >
                    <div >
                        <label className="lblColor" htmlFor ='number'>S??? Ph??ng</label>
                        <input id = 'number' 
                        type = 'number'
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className='roomInput'
                        readOnly
                        />
                    </div>
                    <div>
                        <label className="lblColor" htmlFor ='floor'>T???ng</label>
                        <input id = 'floor' 
                        type = 'number' 
                        value={floor}
                        onChange={(e) => setFloor(e.target.value)}
                        className='roomInput'
                        readOnly
                        />
                    </div>
                    <div>
                        <label className="lblColor" htmlFor ='price'>Gi?? Ph??ng</label>
                        <input id = 'price' 
                        type = 'number' 
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className='roomInput'
                        readOnly
                        />
                    </div>
                    <div>
                        <label className="lblColor" htmlFor ='note'>Ghi Ch??</label>
                        <input id = 'note' 
                        type = 'text' 
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        className='roomInput'
                        readOnly
                        />
                    </div>
                    <div>
                        <label className="lblColor" htmlFor ='state'>T??nh tr???ng ph??ng</label>
                        <input id = 'state' 
                        type = 'text' 
                        value={state?"C?? kh??ch thu??":"Ph??ng tr???ng"}
                        onChange={(e) => setNote(e.target.value)}
                        className='roomInput'
                        readOnly
                        />
                    </div>
                    <div>
                        <label className="lblColor" htmlFor ='typeofRoom'>Lo???i ph??ng</label>
                        <input id = 'typeofRoom' 
                        type = 'text' 
                        value={typeofRoom}
                        onChange={(e) => setTypeofRoom(e.target.value)}
                        className='roomInput'
                        readOnly
                        />
                    </div>
                    <div>
                        <label className="lblColor" htmlFor ='typeofRoom'>Ng??y thu??</label>
                        <input id = 'typeofRoom' 
                        type = 'date' 
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className='roomInput'
                        
                        />
                    </div>
                    <div>
                        <label className="lblColor" htmlFor ='typeofRoom'>Ng??y tr??? ph??ng</label>
                        <input id = 'typeofRoom' 
                        type = 'date' 
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className='roomInput'
                        
                        />
                    </div>
                                  
                   <div className='btn-confirm'>
                    <Button
                        type="submit"
                        color="success"
                        outline>
                        ?????t ph??ng
                    </Button>
                    <Button
                        color="danger"
                        outline
                        type="button" onClick={closeRoom}>
                        Tho??t
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
