import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Menu from "./Menu";

const Reservation = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
        <Menu/>
        <section className="reservation">
        <div className="container mt-5 mb-5">
        <div className="reservation-content">
            <div>
            <h2 className="form-title">Đặt phòng</h2>
            </div>
        <div className="form-flex">
        <div className="reservation-form">
            <h2 className="form-title1">Thông tin khách hàng</h2>
                <form className="re_form" >
                    {/* Họ tên khách hàng */}
                    <div className="form-group">
                        <label htmlFor="name">
                        <i class="zmdi zmdi-account material-icons-name"></i>

                        </label>
                    <input className="inputForm1" type="name" name="phone" id="phone" autoComplete="off"
                        placeholder="Họ tên khách hàng"
                    />
                    </div>  
                        
                    {/* Số điện thoại */}
                    <div className="form-group">
                    <label htmlFor="phone">
                        <i class="zmdi zmdi-phone material-icons-name"></i>

                    </label>
                    <input className="inputForm1" type="name" name="phone" id="phone" autoComplete="off"
                        placeholder="Số điện thoại"
                    />
                </div> 
                
                {/* Địa chỉ */}
                <div className="form-group">
                    <label htmlFor="phone">
                        <i class="zmdi zmdi-pin material-icons-name"></i>

                    </label>
                    <input className="inputForm1" type="name" name="phone" id="phone" autoComplete="off"
                        placeholder="Địa chỉ"
                    />
                </div> 
                <div className="form-group">
                    <label htmlFor="name">
                        <i class="zmdi zmdi-info material-icons-name"></i>

                    </label>
                    <input className="inputForm1" type="name" name="name" id="name" autoComplete="off"
                        placeholder="CMMD/CCCD"
                    />
                </div>  
                </form>
                        
                </div>
                    <div className="info-form">
                <h2 className="form-title1">Thông tin loại phòng</h2>
                <form className="re_form" >
                     {/* Chọn loại phòng */}
                    <div className="form-group1">
                        Chọn loại phòng
                        <select className="slcRoom">
                    <option>Thường đơn</option>
                    <option>Thường đôi</option>
                    <option>VIP đơn</option>
                    <option>VIP đôi</option>
                </select>
                    </div>
                     {/* Chọn số phòng */}
                    <div className="form-group1">
                        Chọn phòng
                        <select className="slcRoom1"></select>
                    </div>

                     {/* Chọn số phòng */}
                    <div className="form-group1">
                        Ngày đến
                        <div className="pickDate">
                        <DatePicker 
                        selected={startDate} 
                        onChange={(date) => setStartDate(date)}
                        dateFormat='dd/MM/yyyy'
                        maxDate={new Date()}
                    />
                    </div>
                    </div>
                    <div className="form-group1">
                        Ngày trả phòng
                        <div className="pickDate1">
                        <DatePicker 
                        selected={startDate} 
                        onChange={(date) => setStartDate(date)}
                        dateFormat='dd/MM/yyyy'
                        maxDate={new Date()}
                    />
                    </div>
                    </div>
                </form>
                        
                </div>

        </div>
            <div className="form-group form-button">
            <input type ="submit" name="signup" id="signup" className="form-submit1"
                value="Đặt phòng"
            />
            </div>
        </div>
        </div>
        </section>
        </>
    );
}

export default Reservation;
