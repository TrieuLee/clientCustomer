import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const Reservation = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
        <div className = "titleP">
        <h2 className="form-title">Đặt phòng   </h2>
        </div>
        <div className='container_1'>   
            <div className='personInfo'>
                <h1>Thông tin khách hàng</h1>
                <div className="form-group">
                    <label htmlFor="name">
                        <i class="zmdi zmdi-email material-icons-name"></i>

                    </label>
                    <input type="name" name="phone" id="phone" autoComplete="off"
                        placeholder="Họ tên khách hàng"
                    />
                </div>  
                <div className="form-group">
                    <label htmlFor="phone">
                        <i class="zmdi zmdi-email material-icons-name"></i>

                    </label>
                    <input type="name" name="phone" id="phone" autoComplete="off"
                        placeholder="Số điện thoại"
                    />
                </div>  
                <div className="form-group">
                    <label htmlFor="name">
                        <i class="zmdi zmdi-email material-icons-name"></i>

                    </label>
                    <input type="name" name="name" id="name" autoComplete="off"
                        placeholder="Địa chỉ"
                    />
                </div>    
                <div className="form-group">
                    <label htmlFor="name">
                        <i class="zmdi zmdi-email material-icons-name"></i>

                    </label>
                    <input type="name" name="name" id="name" autoComplete="off"
                        placeholder="CMMD/CCCD"
                    />
                </div> 
            </div>
            <div className='reservationInfo'>
                <h1>Thông tin phòng</h1>
                <div className="form-group">
                    Chọn ngày
                <DatePicker 
                selected={startDate} 
                onChange={(date) => setStartDate(date)}
                dateFormat='dd/MM/yyyy'
                maxDate={new Date()}
                />
                </div> 

                <div className="form-group">
                <label>
                    Chọn loại phòng
                <select>
                      <option>Thường đơn</option>
                      <option>Thường đôi</option>
                      <option>VIP đơn</option>
                      <option>VIP đôi</option>
                </select>
             </label>
                </div> 
           </div>
           
        </div>
        <div className="form-group form-button">
           <input type ="submit" name="signin" id="signin" className="form-submit" value="Đặt phòng" style={{marginLeft:'135px', marginTop:'90px'}}/>
                                </div>
        </>
      
    );
}

export default Reservation;
