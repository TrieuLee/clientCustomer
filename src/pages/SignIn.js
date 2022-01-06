import React, {useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ErrorMessage from '../component/error-message/errorMessage.js';
import UserContext from '../context/UserContext';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

const SignIn = () => {

    const [formEmail,setFormEmail] = useState("");
    const [formPassword,setFormPassword] = useState("");
    const [errorMessage,setErrorMessage] = useState(null);
    const {getUser} = useContext(UserContext);
    const history = useHistory();

    async function authLogin(e) {
		e.preventDefault();

		const loginData = {
			email: formEmail ? formEmail: undefined,
			password: formPassword ? formPassword: undefined,
		}

        try {
            await Axios.post("http://localhost:5000/customer/login",loginData);
        } catch (err) {
            if(err.response && err.response.data.errorMessage) setErrorMessage(err.response.data.errorMessage)
            return;
        }
      
      await getUser();
      history.push("/");
	}

    return (
        <>      
        <section className="sign-in">
                <div className="container mt-5">
                    <div className="signin-content">

                    <div className="signin-image">
                    
                        <img src="assets/img/about/3.png" alt="" />
                        <NavLink to="/signup" className="signup-image-link"> Khách hàng mới ? </NavLink>
                    </div>

                        <div onClick={() => setErrorMessage(null)} className="signin-form">
                            <h2 className="form-title">Đăng nhập    </h2>
                            {errorMessage && (
                                <ErrorMessage
                                message={errorMessage}
                                />
                                )}
                            <form onSubmit={authLogin} className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input  className="inputForm" type="email" name="email" id="email" autoComplete="off"
                                        placeholder="Email"
                                        value={formEmail}
                                        onChange={(e) => setFormEmail(e.target.value)}
                                    />
                                </div>
                               
                                       {/* Mật khẩu */}
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i class="zmdi zmdi-lock material-icons-name"></i>

                                    </label>
                                    <input  className="inputForm" type="password" name="password" id="password" autoComplete="off"
                                        placeholder="Mật khẩu"
                                        value={formPassword}
                                        onChange={(e) => setFormPassword(e.target.value)}
                                    />
                                </div>
                                <div className="form-group form-button">
                                    <input type ="submit" name="signin" id="signin" className="form-submit"
                                        value="Đăng nhập"
                                    />
                                </div>
                            </form>
                            </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignIn;
