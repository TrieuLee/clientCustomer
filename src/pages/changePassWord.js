import React, {useState } from 'react';
import { Table,Button } from 'reactstrap';
import Axios from 'axios';
import ErrorMessage from '../component/error-message/errorMessage';

function Name({setOpenEditPassword}) {
    
    const [createPassword,setCreatePassword] = useState("");
	const [createPasswordVerify,setCreatePasswordVerify] = useState("");
    const [errorMessage,setErrorMessage] = useState(null);
    const [createEmail,setCreateEmail] = useState("");
    async function saveEmployees(e) {
		e.preventDefault();

		const employeeData = {
			email: createEmail ? createEmail: undefined,
			password: createPassword ? createPassword: undefined,
			newPassword: createPasswordVerify ? createPasswordVerify: undefined,
		}

        try {
            if(window.confirm('Bạn có muốn đổi mật khẩu?')){
                await Axios.put("http://localhost:5000/customer/change/password",employeeData);
            }          

        } catch (err) {
            if(err.response && err.response.data.errorMessage) setErrorMessage(err.response.data.errorMessage)
            return;
        }
		closeEmployee()
	}

	function closeEmployee(){
        setCreateEmail("");
        setCreatePassword("");
        setCreatePasswordVerify("");
        setOpenEditPassword(null);
	}

   return <div className ="class">
      <form onSubmit={saveEmployees}>
                    <Table borderless>
                        {errorMessage && (
                            <ErrorMessage
                            message={errorMessage}
                            clear={() => setErrorMessage(null)}
                            />
                        )}
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <label htmlFor ='editor-nameOfRoom'>Email</label>                   
                                </th>
                                <td>
                                    <input id = 'editor-nameOfRoom' 
                                    type = 'text' 
                                    value={createEmail}
                                    onChange={(e) => setCreateEmail(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <label htmlFor ='editor-password'>Mật khẩu hiện tại</label>
                                </th>
                                <td>
                                    <input id = 'editor-password' 
                                    type = 'password' 
                                    value={createPassword}
                                    onChange={(e) => setCreatePassword(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <label htmlFor ='editor-passwordVery'>Mật khẩu mới</label>
                                </th>
                                <td>
                                    <input id = 'editor-passwordVery' 
                                    type = 'password'
                                    value={createPasswordVerify}
                                    onChange={(e) => setCreatePasswordVerify(e.target.value)}/>
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                    <Button
                        type="submit"
                        color="success"
                        outline>
                        Cập Nhập
                    </Button>
                    <Button
                        color="danger"
                        outline
                        type="button" onClick={closeEmployee}>
                        Thoát
                    </Button>
            </form>
   </div>;
};

export default Name;