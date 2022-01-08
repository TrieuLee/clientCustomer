import React, {useState, useContext} from 'react';
import { Button } from 'reactstrap';
import Axios from 'axios';
import ErrorMessage from '../component/error-message/errorMessage';
import UserContext from '../context/UserContext';
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router-dom';

function Name() {
    
    const [createPassword,setCreatePassword] = useState("");
	const [createPasswordVerify,setCreatePasswordVerify] = useState("");
	const [currentPass,setCurrentPass] = useState("");
    const [errorMessage,setErrorMessage] = useState(null);
    const [createEmail,setCreateEmail] = useState("");
    const {user, userAddress, userEmail, userPhone, IDCard} = useContext(UserContext);
    const history = useHistory();
    async function saveEmployees(e) {
		e.preventDefault();

		const employeeData = {
			email: createEmail ? createEmail: undefined,
			password: currentPass ? currentPass: undefined,
			newPassword: createPassword ? createPassword: undefined,
			passwordVerify: createPasswordVerify ? createPasswordVerify: undefined,
		}

        try {
            if(window.confirm('Bạn có muốn đổi mật khẩu?')){
                await Axios.put("http://localhost:5000/customer/change/password",employeeData);   
                
                if(window.confirm('Mật khẩu đã đổi thành công. Vui lòng đăng nhập lại để tiếp tục')){
                    await Axios.get("http://localhost:5000/customer/logOut");   
                        
                }   
            }          
            history.push("/signin");
        } catch (err) {
            if(err.response && err.response.data.errorMessage) setErrorMessage(err.response.data.errorMessage)
            return;
        }
		
	}
   return (
    <div onClick={()=>setErrorMessage(null)} className= "employee-post" >
    <section className="reservation">
    <div className="container mt-5 mb-5">
    <div className="reservation-content">
        <div>
        <h2 className="form-title">Đổi Mật Khẩu</h2>
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
                <label className="lblIcon"  htmlFor="phone">
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
            <h2 className="form-title1">Đổi Mật khẩu</h2>
            <form className="re_form" onSubmit={saveEmployees} >
                <div >
                    <label className="lblColor" htmlFor ='number'>Email:</label>
                    <input id = 'number' 
                    type = 'text'
                    value={createEmail}
                    onChange={(e) => setCreateEmail(e.target.value)}
                    className='roomInput'
                    />
                </div>
                <div>
                    <label className="lblColor" htmlFor ='floor'>Mật khẩu hiện tại:</label>
                    <input id = 'floor' 
                    type = 'password' 
                    value={currentPass}
                    onChange={(e) => setCurrentPass(e.target.value)}
                    className='roomInput'
                    />
                </div>
                <div>
                    <label className="lblColor" htmlFor ='floor'>Mật khẩu mới:</label>
                    <input id = 'floor' 
                    type = 'password' 
                    value={createPassword}
                    onChange={(e) => setCreatePassword(e.target.value)}
                    className='roomInput'
                    />
                </div>
                <div>
                    <label className="lblColor" htmlFor ='price'>Xác thực mật khẩu:</label>
                    <input id = 'price' 
                    type = 'password' 
                    value={createPasswordVerify}
                    onChange={(e) => setCreatePasswordVerify(e.target.value)}
                    className='roomInput'
                    />
                </div>
                              
               <div className='btn-confirm'>
                <Button
                    type="submit"
                    color="success"
                    outline>
                    Đổi mật khẩu
                </Button>
                <Button
                    color="danger"
                    outline
                    type="button" href='/'>
                    Quay lại
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
   )
};

export default Name;