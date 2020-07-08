import React, { Component } from 'react';
import './section.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import social from './social.png';

class Section extends Component {
    constructor(props) {
        super(props);
        var x = new Date();
        var y = x.getDate();
        var z = x.getFullYear();
        this.state = { month: [{ id: '0', name: "Jan" }, { id: '1', name: "Feb" }, { id: '2', name: "Mar" }, { id: '3', name: "Apr" }, { id: '4', name: "May" }, { id: '5', name: "Jun" }, { id: '6', name: "Jul" }, { id: '7', name: "Aug" }, { id: '8', name: "Sep" }, { id: '9', name: "Oct" }, { id: '10', name: "Nov" }, { id: '11', name: "Dec" }], fname: "", sname: "", email: "", pwd: "", date: y, year: z, optradio: '' }
    }

    handleChange = (event) => {
        let key = event.target.name;
        let val = event.target.value;
        this.setState(
            { [key]: val }
        )
    }


    buildDateOption = () => {
        var date_arr = [];
        for (let i = 1; i <= 31; i++) {
            date_arr.push(<option key={i} value={i}>{i}</option>)
        }
        return date_arr;
    }
    buildYearOption = () => {
        var year_arr = [];
        var date = new Date();
        var year = date.getFullYear();
        for (let i = 1901; i <= year; i++) {
            year_arr.push(<option key={i} value={i}>{i}</option>)
        }
        return year_arr;
    }

    render() {
        return (
            <div id="section">
                <div className="container d-flex">
                    <div style={{ width: '50%' }}>
                        <h4 className="ml-5 mt-5">Facebook helps you connect and share with the people in your life.</h4>
                        <img src={social} className="img-fluid ml-4" alt="Social" />
                    </div>
                    <div style={{ width: '50%' }}>
                        <h1 className="ml-5 pl-3 mt-4">Create an account</h1>
                        <h6 className="ml-5 pl-3">It's quick and easy.</h6>
                        <form className="ml-5 pl-3">
                            <div className="row d-flex">
                                <div className="col-sm-5 pr-0">
                                    <input type="text" className="form-control" name="fname" value={this.state.fname} onChange={this.handleChange} placeholder="First name" />
                                </div>
                                <div className="col-sm-5 pr-0 pl-3">
                                    <input type="text" className="form-control" name="sname" value={this.state.sname} onChange={this.handleChange} placeholder="Surname" />
                                </div>
                            </div>
                            <div className="mr-5 pr-4 mt-2">
                                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Mobile number or email address" className="form-control" />
                                <input type="password" name="pwd" value={this.state.pwd} onChange={this.handleChange} placeholder="Password" className="form-control mt-2" />
                            </div>
                            <div className="form-group">
                                <label className="mt-2" id="dob">Date of birth</label><br />
                                <select name="date" value={this.state.date} onChange={this.handleChange}>
                                    {this.buildDateOption()}
                                </select>
                                <select name="mon" value={this.state.mon} onChange={this.handleChange}>
                                    {
                                        this.state.month.map(month => (
                                            <option key={month.id} value={month.name}>{month.name}</option>
                                        ))
                                    }
                                </select>
                                <select name="year" value={this.state.year} onChange={this.handleChange}>
                                    {this.buildYearOption()}
                                </select>
                            </div>
                            <h6 id="gen">Gender</h6>
                            <div className="form-check-inline">
                                <label className="form-check-label" for="radio1">
                                    <input type="radio" className="form-check-input" id="radio1" name="optradio" value="male" checked={this.state.optradio === 'male'} onChange={this.handleChange} /><span>Male</span>
                                </label>
                            </div>

                            <div className="form-check-inline">
                                <label className="form-check-label" for="radio2">
                                    <input type="radio" className="form-check-input ml-3" id="radio2" name="optradio" value="female" checked={this.state.optradio === 'female'} onChange={this.handleChange} /> <span>Female</span>
                                </label>
                            </div>

                            <div className="form-check-inline">
                                <label className="form-check-label" for="radio3">
                                    <input type="radio" className="form-check-input ml-3" id="radio3" name="optradio" value="custom" checked={this.state.optradio === 'custom'} onChange={this.handleChange} /><span>Custom</span>
                                </label>
                            </div>
                            <div className="mr-5 pr-5 mt-2" id="agreement_div">
                                <p>
                                    By clicking Sign Up, you agree to our<span className="terms"> Terms</span>, <span className="terms">Data Policy</span> and <span className="terms">Cookie Policy</span>. You may receive SMS notifications from us and can opt out at any time.
                                </p>
                            </div>
                            <button type="submit" className="btn">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign Up&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section;