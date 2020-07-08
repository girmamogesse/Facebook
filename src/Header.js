import React, { useState } from 'react';
import './navbar.css';

const Header = () => {

    const [initial_state, setState] = useState(
        {
            uname: "",
            pass: ""
        }
    );

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setState((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        }

        )
    }

    return (
        <div className="container-fluid d-flex" style={{ height: '80px', backgroundColor: '#3b5998' }}>
            <div className="container text-white pl-5" style={{ width: '50%' }}>
                <h1 className="ml-5 pl-5 mt-3">facebook</h1>
            </div>
            <div className="container pt-2" style={{ width: '50%' }}>
                <form>
                    <table className="ml-5">
                        <tr className="text-white">
                            <td className="top-td">Email or phone</td>
                            <td className="pl-2 top-td">Password</td>
                        </tr>
                        <tr>
                            <td><input type="text" name="uname" value={initial_state.uname} onChange={handleChange} className="mr-2" /></td>
                            <td><input type="text" name="pass" value={initial_state.pass} onChange={handleChange} className="ml-2" /></td>
                            <td><input type="submit" value="Log in" className="ml-3 mr-1" id="btn" /></td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default Header;