import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="conatiner mt-5">
                <div className="container">
                    <p className="ml-5 color" id="footer1">
                        English (UK) &nbsp; <a href="#">&nbsp; ಕನ್ನಡ &nbsp;</a> &nbsp;<a href="#"> &nbsp;ردو &nbsp;</a> &nbsp;<a href="#">&nbsp; मराठी &nbsp;</a>&nbsp;
                        <a href="#"> &nbsp;తెలుగు &nbsp;</a> &nbsp;<a href="#"> &nbsp;हिन्दी&nbsp; </a> &nbsp;<a href="#"> &nbsp;ਪੰਜਾਬੀ &nbsp;</a>&nbsp;
                        <a href="#">&nbsp; ગુજરાતી&nbsp; </a>&nbsp; <a href="#"> &nbsp;বাংলা &nbsp;</a>&nbsp; <a href="#"> &nbsp;മലയാളം&nbsp; </a> &nbsp;<a href="#"> &nbsp;தமிழ் &nbsp;</a>&nbsp;
                        <button className="btn1">&nbsp;<span>+</span>&nbsp;</button>
                    </p>
                    <div className="mr-4">
                        <hr className="ml-5 mr-5 pr-5" />
                    </div>
                </div >
                <div id="footer2" className="container">
                    <div className="ml-5 pr-5 mr-3 color">
                        <a href="#">Log In &nbsp;</a><a href="#">&nbsp;&nbsp; Messenger&nbsp; &nbsp;</a><a href="#">&nbsp;&nbsp; Facebook &nbsp;&nbsp;</a><a href="#">&nbsp;&nbsp; Lite &nbsp;&nbsp;</a><a href="#">&nbsp;&nbsp; Watch &nbsp;&nbsp;</a><a href="#">&nbsp;&nbsp; People &nbsp;&nbsp;</a> <a href="#">&nbsp;&nbsp; Pages &nbsp;&nbsp;</a> <a href="#">&nbsp;&nbsp; Page categories &nbsp;&nbsp;</a><a href="#">&nbsp; Places &nbsp;&nbsp;</a><a href="#">&nbsp;&nbsp; Games &nbsp;&nbsp;</a><a href="#">&nbsp;&nbsp; Locations &nbsp;&nbsp;</a><a href="#">&nbsp;&nbsp; Marketplace &nbsp;&nbsp;</a><a href="#">&nbsp;&nbsp;  Facebook Pay &nbsp;&nbsp;</a><a href="#">&nbsp;&nbsp; Groups &nbsp;&nbsp;</a><a href="#">&nbsp;&nbsp; Oculus&nbsp; &nbsp;</a><a href="#">&nbsp; &nbsp;Portal &nbsp;&nbsp;</a><a href="#">&nbsp;&nbsp; Instagram &nbsp;&nbsp;</a><a href="#">&nbsp;&nbsp; Local &nbsp;&nbsp;</a><a href="#">&nbsp;&nbsp; Fundraisers &nbsp;&nbsp;</a><a href="#">&nbsp;&nbsp; Services &nbsp;&nbsp;</a><a href="#">&nbsp;&nbsp; About &nbsp;&nbsp;</a><a href="#">&nbsp;&nbsp; Create ad &nbsp;&nbsp;</a><a href="#">&nbsp; &nbsp;Create Page &nbsp;&nbsp;</a><a href="#">&nbsp;&nbsp; Developers &nbsp;&nbsp;</a><a href="#">&nbsp;&nbsp; Careers &nbsp;&nbsp;</a><a href="#">&nbsp;&nbsp; Privacy &nbsp;&nbsp;</a><a href="#">&nbsp;&nbsp; Cookies &nbsp;&nbsp;</a><a href="#">&nbsp;&nbsp; Ad Choices </a><a href="#">Terms &nbsp;&nbsp;</a><a href="#">&nbsp; &nbsp;Help &nbsp;&nbsp;</a>
                    </div>
                </div>
            </div >
        )
    }
}

export default Footer;
