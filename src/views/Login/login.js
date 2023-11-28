import React,{useState} from "react";
import { Link } from "react-router-dom";
import { imagePath } from "../../data/ImagePath";
import OtpInput from 'react18-input-otp';
import { Select, message, Popconfirm, Tooltip } from "antd";

const Login = () => {
    //meta title
    document.title = "Store Admin|Login";
    const { Option } = Select;  
    const [phonecard, set_phonecard] = useState(true);
    const [wrongotp, set_wrongotp] = useState(false);
    
        return (
        <React.Fragment>
            <div className="login-img">
                <div className="ip-page-login">
                    <div className="col-12 text-center m-b-10">
                        <img className="logo-icon " alt="" src={imagePath("./logo_ippopay.svg")} />
                    </div>
                    <div className="container d-flex justify-content-center p-3">
                        <div className="ip-wrapper">
                        {phonecard ?
                            <div className="form">
                                <div className="title"><span>Login</span></div>
                                <div className="title_desc">
                                    <span>Hey, Enter your details to get Sign in</span>
                                </div>
                                <div>
                                    <div className="input-group mb-4">
                                        <span className="input-group-text">
                                            <i className="bx bx-envelope font-size-18" />
                                        </span>
                                        <input type="text" className="form-control form_input" placeholder=" " />
                                        <span className="form_label">Email</span>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">
                                            <i className="fa fa-eye font-size-16" />
                                        </span>
                                        <input type="password" className="form-control form_input" placeholder=" " />
                                        <span className="form_label">Password</span>
                                    </div>
                                    <div className="login-form-captcha my-2">
                                        <div className="captcha-preview mb-4"></div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control form_input" id="captcha" name="captcha"/>
                                            <span className="form_label">Enter Captcha</span>
                                            <span className="input-group-text" style={{ cursor: "pointer" }}> <i className="bx bx-reset font-size-17"  /></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 mb-3 ">
                                    <button className="btn btn-primary font-size-15 w-100">Send OTP</button>
                                </div>
                            </div>:
                            
                            <div className="form">
                                <div className="title"><span>OTP Verification</span></div>
                                <div className="title_desc">
                                    <span>Enter Your OTP Code  </span>
                                </div>
                                <div className="row">
                                        <OtpInput
                                            className="otp-input-box"
                                            containerStyle="justify-content-evenly px-3"
                                            shouldAutoFocus
                                            isInputNum
                                            errorStyle="errorotp"
                                            hasErrored={wrongotp}
                                            // value={otp}
                                            // onChange={handleChangeOtp}
                                            numInputs={4}
                                            // onSubmit={() => validateOtp(usertype)}
                                             />
                                    </div>
                                <div className="mt-4 mb-3 ">
                                    <button className="btn btn-primary font-size-15 w-100">Login</button>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Login;
