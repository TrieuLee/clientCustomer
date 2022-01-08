import React, {useContext} from 'react';
import UserContext from '../context/UserContext';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignIn from './SignIn';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import './comStyle.css'


export default function Home() {
    const {getUser, user} = useContext(UserContext);
    const history = useHistory();

    async function resetPassword(){
        if(window.confirm('Mật khẩu mới của bạn là: 123456. Đề nghị thay đổi mật khẩu để đảm bảo an toàn')){
            await Axios.put("http://localhost:5000/customer/reset/password");
        }
    }

    async function logOut(){
        await Axios.get("http://localhost:5000/customer/logOut");
        await getUser();
        history.push("/"); 
    }
 
    return (
<>
<header>
        <div className="header-area ">
            <div id="sticky-header" className="main-header-area">
                <div className="container-fluid p-0">
                    <div className="row align-items-center no-gutters">
                        <div className="col-xl-5 col-lg-6">
                            <div className="main-menu  d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li><a className="active" href="index.html">Trang chủ</a></li>
                                        <li><a href="/bookRoom">Đặt phòng</a></li>
                                        <li><a href="/bookService">Đặt dịch vụ</a></li>
                                        {user !== null &&
                                        <>                                                                             
                                        <li>
                                            <NavDropdown
                                                id="nav-dropdown-dark-example"
                                                title= {"Thanh toán"}
                                                menuVariant="dark"
                                                >
                                                    <NavDropdown.Item href="/billRoom">
                                                        Hóa đơn đặt phòng
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Item href="/billService">Hóa đơn dịch vụ</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <NavDropdown.Item >Trả phòng</NavDropdown.Item>
                                                </NavDropdown>    
                                        </li>   
                                       
                                        </>                                    
                                    }
                                        <li><a href="#footer_top">Về chúng tôi</a></li>                                                                           
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2">
                            <div className="logo-img">
                                <a href="index.html">
                                    <img src="assets/img/logo.png" alt="" style={{width: '100px', height: '92px',}}/>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-4 d-none d-lg-block">
                            <div className="book_room">
                                <div className="nav-introCus">
                                    {user ===null?(
                                        <>
                                            <Link className="auth A" to ="/signup" element={ <SignIn />}>Tạo tài khoản</Link>
                                            <Link className="auth B" to ="/signin" element={ <SignIn/>}>Đăng nhập</Link>
                                        </>                                             
                                    ):(
                                        user && (<>
                                             <NavDropdown
                                             id="nav-dropdown-dark-example"
                                             title= {"Xin Chào, "+ user}
                                             menuVariant="dark"
                                             >
                                                 <NavDropdown.Item href="/">
                                                     Trang chủ
                                                 </NavDropdown.Item>
                                                 <NavDropdown.Item onClick={logOut} href="/">Đăng Xuất</NavDropdown.Item>
                                                 <NavDropdown.Item href="/changePassword"
                                                 
                                                 >
                                                     Đổi Mật Khẩu
                                                 </NavDropdown.Item>
                                                 <NavDropdown.Divider />
                                                 <NavDropdown.Item href="/" onClick={resetPassword}>Quên Mật Khẩu</NavDropdown.Item>
                                             </NavDropdown>
                                            
                                        </>)
                                    )
                                }
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

        <div className="slider_area">
        <div className="slider_active owl-carousel owl-loaded owl-drag">
        <div className="owl-stage-outer"><div class="owl-stage" style={{transform:' translate3d(-4557px, 0px, 0px)', transition: 'all 0.8s ease 0s', width: '9114px'}}><div class="owl-item cloned" style={{width: '1519px'}}><div class="single_slider d-flex align-items-center justify-content-center slider_bg_1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="slider_text text-center">
                                <h3>Hotel Del Luna</h3>
                                <p>Your home away from home</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div><div class="owl-item cloned" style={{width: '1519px'}}><div class="single_slider  d-flex align-items-center justify-content-center slider_bg_2">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="slider_text text-center">
                                <h3>Hotel Del Luna</h3>
                                <p>Your home away from home</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div><div class="owl-item" style={{width: '1519px'}}><div class="single_slider d-flex align-items-center justify-content-center slider_bg_1">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="slider_text text-center">
                                <h3>Hotel Del Luna</h3>
                                <p>Your home away from home</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div><div class="owl-item active" style={{width: '1519px'}}><div class="single_slider  d-flex align-items-center justify-content-center slider_bg_2">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="slider_text text-center">
                            <h3>Hotel Del Luna</h3>
                                <p>Your home away from home</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div><div class="owl-item cloned" style={{width: '1519px'}}><div class="single_slider d-flex align-items-center justify-content-center slider_bg_1">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="slider_text text-center">
                                <h3>Hotel Del Luna</h3>
                                <p>Your home away from home</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div><div class="owl-item cloned" style={{width: '1519px'}}><div class="single_slider  d-flex align-items-center justify-content-center slider_bg_2">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="slider_text text-center">
                                <h3>Life is Beautiful</h3>
                                <p>Come, stay and enjoy your day</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div></div></div><div class="owl-nav"><div class="owl-prev"><i class="ti-angle-left"></i></div><div class="owl-next"><i class="ti-angle-right"></i></div></div><div class="owl-dots disabled"></div></div>
    </div>

    <div className="about_area">
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-lg-5">
                    <div className="about_info">
                        <div className="section_title mb-20px">
                            <span>Về chúng tôi</span>
                            <h3>Ngôi nhà Việt Nam của Quý khách</h3>
                        </div>
                        <p>Khách sạn Del Luna là khách sạn đạt tiêu chuẩn quốc tế hàng đầu tọa lạc ngay tại trung tâm
                        tài chính, thương mại và giải trí sầm uất của thành phố Hồ Chí Minh, cách Sân bay quốc tế Tân Sơn Nhất chỉ khoảng 8 km 
                        đường bộ.</p>
                        <a href="/" className="line-button">Tìm hiểu thêm</a>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-7">
                    <div className="about_thumb d-flex">
                        <div className="img_1">
                            <img src="assets/img/about/1.png" alt="" style={{width: '294px', height: '400px',}}/>
                        </div>
                        <div className="img_2">
                            <img src="assets/img/about/about_2.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="features_room">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="section_title text-center mb-100">
                        <span>Phòng nổi bật</span>
                        <h3>Chọn loại phòng phù hợp</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="rooms_here">
            <div className="single_rooms">
                <div className="room_thumb">
                    <img src="assets/img/rooms/1.png" alt=""/>
                    <div className="room_heading d-flex justify-content-between align-items-center">
                        <div className="room_heading_inner">
                            <span>From $250/night</span>
                            <h3>Phòng Đơn</h3>
                        </div>
                        <a href="/bookRoom/thuongDon" className="line-button">Đặt phòng</a>
                    </div>
                </div>
            </div>
            <div className="single_rooms">
                <div className="room_thumb">
                    <img src="assets/img/rooms/2.png" alt=""/>
                    <div className="room_heading d-flex justify-content-between align-items-center">
                        <div className="room_heading_inner">
                            <span>From $250/night</span>
                            <h3>Phòng Đôi</h3>
                        </div>
                        <a href="/bookRoom/thuongDoi" className="line-button">Đặt phòng</a>
                    </div>
                </div>
            </div>
            <div className="single_rooms">
                <div className="room_thumb">
                    <img src="assets/img/rooms/3.png" alt=""/>
                    <div className="room_heading d-flex justify-content-between align-items-center">
                        <div className="room_heading_inner">
                            <span>From $250/night</span>
                            <h3>VIP Đơn</h3>
                        </div>
                        <a href="/bookRoom/vipDon" className="line-button">Đặt phòng</a>
                    </div>
                </div>
            </div>
            <div className="single_rooms">
                <div className="room_thumb">
                    <img src="assets/img/rooms/4.png" alt=""/>
                    <div className="room_heading d-flex justify-content-between align-items-center">
                        <div className="room_heading_inner">
                            <span>From $250/night</span>
                            <h3>VIP Đôi</h3>
                        </div>
                        <a href="/bookRoom/vipDoi" className="line-button">Đặt phòng</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    <footer  className="footer" style={{marginTop: '300px'}}>
        <div className="footer_top" id="footer_top" >
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-md-6 col-lg-3">
                        <div className="footer_widget">
                            <h3 className="footer_title">
                                Địa chỉ khách sạn
                            </h3>
                            <p className="footer_text"> 828 Sư Vạn Hạnh, Phường 13, Quận 10, TP.HCM</p>
                           
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-lg-3">
                        <div className="footer_widget">
                            <h3 className="footer_title">
                                Liên hệ đặt phòng
                            </h3>
                            <p className="footer_text">+10 367 267 2678 <br/>
                                reservation@montana.com</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-md-6 col-lg-2">
                        <div className="footer_widget">
                            <h3 className="footer_title">
                                Navigation
                            </h3>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Rooms</a></li>
                                <li><a href="/">About</a></li>
                                <li><a href="/">News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="footer_widget">
                            <h3 className="footer_title">
                                Newsletter
                            </h3>
                            <form action="#" className="newsletter_form">
                                <input type="text" placeholder="Enter your mail"/>
                                <button type="submit">Sign Up</button>
                            </form>
                            <p className="newsletter_text">Subscribe newsletter to get updates</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copy-right_text">
            <div className="container">
                <div className="footer_border"></div>
                <div className="row">
                    <div className="col-xl-8 col-md-7 col-lg-9">
                        <p className="copy_right">Lương Trần Thiên Phúc - Lê Hải Triều</p>
                    </div>
                    <div className="col-xl-4 col-md-5 col-lg-3">
                        <div className="socail_links">
                            <ul>
                                <li>
                                    <a href="/">
                                        <i className="fa fa-facebook-square"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>


    <form id="test-form" className="white-popup-block mfp-hide">
                <div className="popup_box ">
                        <div className="popup_inner">
                            <h3>Check Availability</h3>
                            <form action="#">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <input id="datepicker" placeholder="Check in date"/>
                                    </div>
                                    <div className="col-xl-6">
                                        <input id="datepicker2" placeholder="Check out date"/>
                                    </div>
                                    <div className="col-xl-6">
                                        <select className="form-select wide" id="default-select" >
                                            <option data-display="Adult">1</option>
                                            <option value="1">2</option>
                                            <option value="2">3</option>
                                            <option value="3">4</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6">
                                        <select className="form-select wide" id="default-select" >
                                            <option data-display="Children">1</option>
                                            <option value="1">2</option>
                                            <option value="2">3</option>
                                            <option value="3">4</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-12">
                                        <select className="form-select wide" id="default-select" >
                                            <option data-display="Room type">Room type</option>
                                            <option value="1">Laxaries Rooms</option>
                                            <option value="2">Deluxe Room</option>
                                            <option value="3">Signature Room</option>
                                            <option value="4">Couple Room</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-12">
                                        <button type="submit" className="boxed-btn3">Check Availability</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
            </form>
        </>
    )
}
