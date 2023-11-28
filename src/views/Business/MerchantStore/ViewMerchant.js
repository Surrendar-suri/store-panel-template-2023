import React from "react";
import { Link } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Select, message, Popconfirm, Tooltip } from "antd";
const MerchantDetails = () => {
    //meta title
    document.title = "Merchant Details";
    const { Option } = Select;
    return (
        <React.Fragment>
            <div className="page-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <div className="card-title">
                                            Merchant Details
                                        </div>
                                        <Link to={`/storemerchant`}>
                                            <button className="back-btn">
                                                Back
                                                <i className="bx bx-chevron-right" />
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <div className="detail_title">Business Type</div>
                                            <div className="detail_desc">Trade</div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="detail_title">Business Name</div>
                                            <div className="detail_desc">Sri iyyanar workshop</div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="detail_title">Merchant name</div>
                                            <div className="detail_desc">Dhanasekaran</div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="detail_title">Mobile Number</div>
                                            <div className="detail_desc">9767277276</div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="detail_title">Email</div>
                                            <div className="detail_desc">dhanasekar1234@gmail.com</div>
                                        </div>
                                        <div className="col-12 mb-0">
                                            <div className="info-detail">Contact Details</div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="detail_title">Address</div>
                                            <div className="detail_desc">1a ,33th street, Nanganallur</div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="detail_title">City</div>
                                            <div className="detail_desc">Chennai</div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="detail_title">State</div>
                                            <div className="detail_desc">Tamil Nadu</div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="detail_title">Pincode</div>
                                            <div className="detail_desc">600077</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MerchantDetails;
