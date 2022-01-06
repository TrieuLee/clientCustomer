import React, {useState} from 'react';
import Axios from 'axios';
import { Table,Button } from 'reactstrap';
import ErrorMessage from '../component/error-message/errorMessage';
import {useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
    const [name,setName] = useState("");
	const [phoneNumber,setPhoneNumber] = useState("");
	const [email,setEmail] = useState("")
	const [address,setAddress] = useState("");
	const [IDCard,setIDCard] = useState("");
	const [password,setPassword] = useState("");
    const [passwordVerify,setPasswordVerify] = useState("");
    const [errorMessage,setErrorMessage] = useState(null);
    const history = useHistory();

    async function saveRoom(e) {
		e.preventDefault();

		const guestData = {
			name: name ? name: undefined,
			phoneNumber: phoneNumber ? phoneNumber: undefined,
			email: email ? email: undefined,
			address: address ? address: undefined,
			IDCard: IDCard ? IDCard : undefined,
			password: password ? password: undefined,
			passwordVerify: passwordVerify ? passwordVerify: undefined
		}

        try {
            await Axios.post("http://localhost:5000/customer",guestData);
            if(window.confirm("Bạn đã tạo tài khoản thành công")){       
                closeGuest();
                history.push("/");
            }
        } catch (err) {
            if(err.response && err.response.data.errorMessage) setErrorMessage(err.response.data.errorMessage)
            return;
        }
	}
    function closeGuest(){
	    setName("");
	    setPhoneNumber("");
		setEmail("");
		setAddress("");
		setIDCard(false);
		setPassword("");
		setPasswordVerify("");
	}
    return (
        < >
            <section onClick={()=>setErrorMessage(null)} className="signup">
                <div className="container mt-5 mb-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Khách hàng mới   </h2>
                            <form onSubmit={saveRoom} className="register-form" id="register-form">
                                       {/* Họ tên */}
                                <div className="form-group">
                                    <label className="lblIcon"  htmlFor="name">
                                        <i class="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input  className="inputForm" type="text" name="name" id="name" autoComplete="off"
                                        placeholder="Họ tên khách hàng"
                                        value={name}
                                         onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                       {/* Email */}
                                <div className="form-group">
                                    <label className="lblIcon" htmlFor="email">
                                        <i class="zmdi zmdi-email material-icons-name"></i>

                                    </label>
                                    <input  className="inputForm" type="email" name="email" id="email" autoComplete="off"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                   {/* Số điện thoại */}
                                <div className="form-group">
                                    <label className="lblIcon"  htmlFor="phone">
                                        <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>

                                    </label>
                                    <input className="inputForm"  type="text" name="phone" id="phone" autoComplete="off"
                                        placeholder="SĐT"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                </div>
                                   {/* Địa chỉ */}
                                <div className="form-group">
                                    <label className="lblIcon" htmlFor="phone">
                                        <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>

                                    </label>
                                    <input className="inputForm"  type="text" name="phone" id="phone" autoComplete="off"
                                        placeholder="Địa chỉ"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>
                                {/* CMND */}
                                <div className="form-group">
                                    <label className="lblIcon"  htmlFor="phone">
                                        <i class="zmdi zmdi-info material-icons-name"></i>

                                    </label>
                                    <input className="inputForm"  type="text" name="phone" id="phone" autoComplete="off"
                                        placeholder="CMND/CCCD"
                                        value={IDCard}
                                        onChange={(e) => setIDCard(e.target.value)}
                                    />
                                </div>
                                       {/* Mật khẩu */}
                                <div className="form-group">
                                    <label className="lblIcon" htmlFor="password">
                                        <i class="zmdi zmdi-lock material-icons-name"></i>

                                    </label>
                                    <input  className="inputForm" type="password" name="password" id="password" autoComplete="off"
                                        placeholder="Mật khẩu"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                       {/* Xác nhận mật khẩu */}
                                <div className="form-group">
                                    <label className="lblIcon" htmlFor="cpassword">
                                        <i class="zmdi zmdi-lock material-icons-name"></i>

                                    </label>
                                    <input  className="inputForm"  type="password" name="cpassword" id="cpassword" autoComplete="off"
                                        placeholder="Xác nhận mật khẩu"
                                        value={passwordVerify}
                                        onChange={(e) => setPasswordVerify(e.target.value)}
                                    />
                                </div>
                                <div className="form-group form-button">
                                    <input type ="submit" name="signup" id="signup" className="form-submit"
                                        value="Đăng kí"
                                    />
                                </div>
                            </form>
                            {errorMessage && (
                                <ErrorMessage
                                message={errorMessage}
                            
                                />
                            )}
                            </div>
                                <div className="signup-image">
                                    <figure>
                                    <img src="assets/img/about/2.png" alt="" />
                                    </figure>
                                    <NavLink to="/signin" className="signup-image-link"> Khách hàng đã có tài khoản ? </NavLink>
                                </div>  
                    </div>
                </div>
            </section>
        
        </>

    );
}

export default SignUp;
