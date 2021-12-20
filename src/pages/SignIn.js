import React from 'react';
import { NavLink } from 'react-router-dom';

const SignIn = () => {
    return (
        <>
        <section className="sign-in">
                <div className="container mt-5">
                    <div className="signin-content">

                    <div className="signin-image">
                    
                        <img src="assets/img/about/2.png" alt="" />
                       
                        <NavLink to="/signup" className="signup-image-link"> Khách hàng mới ? </NavLink>
                    </div>

                        <div className="signup-form">
                            <h2 className="form-title">Đăng nhập    </h2>
                            <form className="register-form" id="register-form">
                                       {/* Email */}
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email material-icons-name"></i>

                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off"
                                        placeholder="Email"
                                    />
                                </div>
                               
                                       {/* Mật khẩu */}
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i class="zmdi zmdi-lock material-icons-name"></i>

                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        placeholder="Mật khẩu"
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
