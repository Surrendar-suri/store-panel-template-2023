import React from "react";
import { Link } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Select, message, Popconfirm, Tooltip } from "antd";
const EditMerchant = () => {
    //meta title
    document.title = "Edit Merchant";
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
                                            Edit Merchant
                                        </div>
                                        <Link to={`/storemerchant`}>
                                            <button className="back-btn">
                                                Back
                                                <i className="bx bx-chevron-right" />
                                            </button>
                                        </Link>
                                    </div>
                                    <form className="row g-3 custom-form">
                                        <div className="col-md-4">
                                            <label htmlFor="businessType" className="form-label">Business Type</label>
                                            <Select
                                                id="businessType" className="ant-selectbox"
                                                placeholder="Select Business Type"
                                            // value={this.state.business_type}
                                            // onSelect={(e) =>
                                            //     this.handleOnMerchantTypeChange(e)
                                            // }
                                            >
                                                <Option value="enterprise">Enterprise</Option>
                                                <Option value="trade">Trade</Option>
                                            </Select>
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="name" className="form-label">Business Name</label>
                                            <input type="text" className="form-control" id="name" name="buisness_name" placeholder="Business Name" />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="merchant_name" className="form-label">Merchant name</label>
                                            <input type="text" className="form-control" id="merchant_name" name="merchant_name" placeholder="Merchant Name" />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="mobile_number" className="form-label">Mobile Number</label>
                                            <input type="text" className="form-control" id="mobile_number" name="mobile_number" placeholder="mobile number" />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="text" className="form-control" id="email" name="email" placeholder="Email" />
                                        </div>
                                        <div className="col-12 mb-0">
                                            <div className="info-detail">Contact Details</div>
                                        </div>
                                        <div className="col-md-8">
                                            <label htmlFor="inputAddress2" className="form-label">Address</label>
                                            <input type="text" className="form-control" id="inputAddress2" placeholder="Flat number, Street name, or floor name" />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="inputAddress2" className="form-label">Area</label>
                                            <input type="text" className="form-control" id="inputAddress2" placeholder="Area" />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="inputCity" className="form-label">City</label>
                                            <input type="text" className="form-control" id="inputCity" placeholder="City" />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="state" className="form-label">State</label>
                                            <Select
                                                id="state" className="ant-selectbox"
                                                placeholder="Select State"
                                            >
                                                <Option value="chennai">Chennai</Option>
                                                <Option value="kerala">Kerala</Option>
                                                <Option value="delhi">Delhi</Option>
                                            </Select>
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="inputZip" className="form-label">Pincode</label>
                                            <input type="text" className="form-control" id="inputZip" placeholder="Pincode" />
                                        </div>
                                        <div className="col-12 mt-4">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default EditMerchant;
