import React from 'react';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Đăng kí</h2>
                            <form className="register-form" id="register-form">
                                       {/* Họ tên */}
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i class="zmdi zmdi-account material-icons-name"></i>

                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off"
                                        placeholder="Your name"
                                    />
                                </div>
                                       {/* Email */}
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email material-icons-name"></i>

                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off"
                                        placeholder="Email"
                                    />
                                </div>
                                   {/* Số điện thoại */}
                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>

                                    </label>
                                    <input type="number" name="phone" id="phone" autoComplete="off"
                                        placeholder="Phone"
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
                                       {/* Xác nhận mật khẩu */}
                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <i class="zmdi zmdi-lock material-icons-name"></i>

                                    </label>
                                    <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                                        placeholder="Xác nhận mật khẩu"
                                    />
                                </div>
                                <div className="form-group form-button">
                                    <input type ="submit" name="signup" id="signup" className="form-submit"
                                        value="Register"
                                    />
                                </div>
                            </form>
                            </div>
                                <div className="signup-image">
                                    <figure>
                                    <img src="assets/img/about/2.png" alt="" />
                                    </figure>
                                    <NavLink to="/" className="signup-image-link"> Khách hàng đã có tài khoản ? </NavLink>
                                </div>
                            
                       
                    </div>
                </div>
            </section>
        
        </>

    );
}

export default SignUp;
