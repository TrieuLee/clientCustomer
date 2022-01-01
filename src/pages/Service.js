import React from 'react';
import Menu from './Menu';
const Service = () => {
    return (
        <>
        <Menu/>
        <section className="service">
        <div className="container mt-5">
        <div className="service-content">
        <h2 className="form-title">Dịch vụ</h2>
        <div className="form-flex">
            <div className='serviceName'>
            <table>
                <tr>
                <th>Dịch vụ</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                </tr>
                <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                </tr>
                <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
                </tr>
            </table>   
            </div>
            <div className='basketService'>
            <h2 className="form-title1">Thông tin dịch vụ</h2>
            </div>
        </div>
        </div>
        </div>
        

        </section>
        </>
    );
}

export default Service;
