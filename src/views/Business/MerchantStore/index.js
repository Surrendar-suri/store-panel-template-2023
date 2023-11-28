import React from "react";
import { Link } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Select, message, Popconfirm, Tooltip } from "antd";
const MerchantList = () => {
    //meta title
    document.title = "Merchant list";
    const { Option } = Select;
    return (
        <React.Fragment>
            <div className="page-content">
                <div className="container-fluid">
                    <div className="row pb-3 pt-2">
                        <div className="col-lg-8 col-md-12 col-sm-12 left-side-filter">
                            <span className="filters-btn filters-btn-active me-3 mb-2">ALL</span>
                            <span className="filters-btn me-3 mb-2">Trade</span>
                            <span className="filters-btn me-3 mb-2">Enterprise</span>
                            {/* <div className="filterstatus boxradius entries-filter me-3 mb-2">
                                <Select
                                    // value={this.state.limit}
                                    // name="entryPage"
                                    // onChange={(event) =>
                                    //   this.handleOnInputChange(event, "entry")
                                    // }
                                    placeholder="Select Entries"
                                >
                                    <Option value="">25 Entries</Option>
                                    <Option value="50">50 Entries</Option>
                                    <Option value="75">75 Entries</Option>
                                    <Option value="100">100 Entries</Option>
                                </Select>
                            </div> */}
                            <span className="filters-btn me-3 mb-2 d-flex"
                            // onClick={(e) => this.removeFilter()}
                            >Reset<i className="bi bi-x-circle-fill ms-1 font-size-14"></i></span>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 right-side-filter justify-content-lg-end ">
                            <div className="search-box mb-2">
                                <button className="btn"><i className="bi bi-search"></i></button>
                                <input className="form-control" placeholder="Search" type="text" name=""
                                // value={searchInput} onChange={this.handleOnSearch} 
                                />
                            </div>
                            <Link to={'storemerchant/add'} className="filters-btn filters-btn-active">+ Add Merchant</Link>
                        </div>
                    </div>
                    <div className="row mb-0">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-rep-plugin">
                                        <div className="table-responsive"
                                            data-pattern="priority-columns"
                                        >
                                            <Table className="table  table-borderless table-design">
                                                <Thead>
                                                    <Tr>
                                                        <Th style={{ width: "50px" }}>S.No</Th>
                                                        <Th style={{ width: "130px", minWidth: "130px" }}>
                                                            <span >Merchant Name</span>
                                                        </Th>
                                                        <Th style={{ width: "130px", minWidth: "130px" }}>
                                                            <span>Store Name</span>
                                                        </Th>
                                                        <Th style={{ width: "120px", minWidth: "120px" }}>
                                                            <span>Business Type</span>
                                                        </Th>
                                                        <Th style={{ width: "135px", minWidth: "135px" }}>
                                                            <span>Contact Number</span>
                                                        </Th>
                                                        <Th style={{ width: "175px", minWidth: "175px" }}>
                                                            <span > Address </span>
                                                        </Th>
                                                        <Th style={{ width: "153px", minWidth: "153px" }}>
                                                            <span> Created At </span> </Th>
                                                        <Th style={{ width: "85px", minWidth: "85px" }}>
                                                            <span>Status </span>
                                                        </Th>
                                                        <Th style={{ width: "70px", minWidth: "70px" }}>
                                                            <span>Action </span>
                                                        </Th>
                                                        <Th style={{ width: "65px", minWidth: "65px" }}>
                                                            <span>Edit </span>
                                                        </Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                    <Tr>
                                                        <Td>01</Td>
                                                        <Td>
                                                            <Link className="text-info " to="/storemerchant/details">Dhanasekaran</Link>
                                                        </Td>
                                                        <Td>
                                                            <Tooltip title="Sri iyyanar workshop">Sri iyyanar workshop</Tooltip>
                                                        </Td>
                                                        <Td style={{ textTansform: 'capitalize' }}>Business</Td>
                                                        <Td >6383634646</Td>
                                                        <Td>
                                                            <Tooltip title="Chikkana clg road&nbsp;Lalli hospital near&nbsp;Tiruppur&nbsp;Tamil Nadu&nbsp;641687&nbsp;">Chikkana clg road&nbsp;Lalli hospital near&nbsp;Tiruppur&nbsp;Tamil Nadu&nbsp;641687&nbsp;</Tooltip>
                                                        </Td>
                                                        <Td>28-02-2023 12:01 pm</Td>
                                                        <Td>
                                                            <span className="btn btn-success btn-sm text-capitalize">active</span>
                                                        </Td>
                                                        <Td>
                                                            <div className="dropdown custom-table-dropdown px-1">
                                                                <span data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="mdi mdi-dots-horizontal text-muted" style={{ cursor: 'pointer', fontSize: '20px' }} />
                                                                </span>
                                                                <div className="dropdown-menu dropdown-menu-end">
                                                                    <Link className="dropdown-item" to="/storemerchant/vpa">VPA List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/store">Store List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/subuser">Sub User List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/submerchant">Sub Merchant List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/bank">Bank List</Link>
                                                                </div>
                                                            </div>
                                                        </Td>
                                                        <Td>
                                                            <Tooltip title="Edit"><Link className="text-primary " to="/storemerchant/edit"><i className="mdi mdi-pencil font-size-18" /></Link></Tooltip>
                                                        </Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>02</Td>
                                                        <Td><Link className="text-info " to="/storemerchant/details">ANUSUYA S</Link></Td>
                                                        <Td><Tooltip title="Samiset Chicken Center">Samiset Chicken Center</Tooltip></Td>
                                                        <Td style={{ textTransform: 'capitalize' }}>trade</Td>
                                                        <Td>7401059800</Td>
                                                        <Td><Tooltip title="27/103 new colony&nbsp;Easur&nbsp;Easur&nbsp;Tamil Nadu&nbsp;603310&nbsp;">27/103 new colony&nbsp;Easur&nbsp;Easur&nbsp;Tamil Nadu&nbsp;603310&nbsp;</Tooltip></Td>
                                                        <Td>28-02-2023 11:57 am</Td>
                                                        <Td><span className="btn btn-success btn-sm text-capitalize">active</span></Td>
                                                        <Td>
                                                            <div className="dropdown custom-table-dropdown px-1">
                                                                <span data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="mdi mdi-dots-horizontal text-muted" style={{ cursor: 'pointer', fontSize: '20px' }} />
                                                                </span><div className="dropdown-menu dropdown-menu-end">
                                                                    <Link className="dropdown-item" to="/storemerchant/vpa">VPA List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/store">Store List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/subuser">Sub User List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/submerchant">Sub Merchant List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/bank">Bank List</Link>
                                                                </div>
                                                            </div>
                                                        </Td>
                                                        <Td>
                                                            <Tooltip title="Edit"><Link className="text-primary " to="/storemerchant/edit"><i className="mdi mdi-pencil font-size-18" /></Link></Tooltip>
                                                        </Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>03</Td>
                                                        <Td>
                                                            <Link className="text-info " to="/storemerchant/details">Vasudevan</Link>
                                                        </Td>
                                                        <Td>
                                                            <Tooltip title="V S FLOWERS SHOP">V S FLOWERS SHOP</Tooltip>
                                                        </Td>
                                                        <Td style={{ textTansform: 'capitalize' }}>Business</Td>
                                                        <Td >9756767368</Td>
                                                        <Td>
                                                            <Tooltip title="1a ,33th streets Nanganallur Chennai Tamil Nadu 600061 ">1a ,33th streets Nanganallur Chennai Tamil Nadu 600061 </Tooltip>
                                                        </Td>
                                                        <Td>28-02-2023 12:01 pm</Td>
                                                        <Td>
                                                            <span className="btn btn-danger btn-sm text-capitalize">Deactive</span>
                                                        </Td>
                                                        <Td>
                                                            <div className="dropdown custom-table-dropdown px-1">
                                                                <span data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="mdi mdi-dots-horizontal text-muted" style={{ cursor: 'pointer', fontSize: '20px' }} />
                                                                </span>
                                                                <div className="dropdown-menu dropdown-menu-end">
                                                                    <Link className="dropdown-item" to="/storemerchant/vpa/cgSm7B3Vy">VPA List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/store/cgSm7B3Vy">Store List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/subuser/cgSm7B3Vy">Sub User List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/submerchant/cgSm7B3Vy">Sub Merchant List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/bank/cgSm7B3Vy">Bank List</Link>
                                                                </div>
                                                            </div>
                                                        </Td>
                                                        <Td>
                                                            <Tooltip title="Edit"><Link className="text-primary " to="/storemerchant/edit"><i className="mdi mdi-pencil font-size-18" /></Link></Tooltip>
                                                        </Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>04</Td>
                                                        <Td><Link className="text-info " to="/storemerchant/details">Ramalakshmi </Link></Td>
                                                        <Td><Tooltip title="Samiset Chicken Center">SRI AMMAN HOTEL</Tooltip></Td>
                                                        <Td style={{ textTransform: 'capitalize' }}>Trade</Td>
                                                        <Td>8754258317</Td>
                                                        <Td><Tooltip title="Periyakadai Bazaar Opp Govindaraj Hospital Rajapalayam Tamil Nadu 626117 ">Periyakadai Bazaar Opp Govindaraj Hospital Rajapalayam Tamil Nadu 626117 </Tooltip></Td>
                                                        <Td>28-02-2023 11:57 am</Td>
                                                        <Td><span className="btn btn-success btn-sm text-capitalize">active</span></Td>
                                                        <Td>
                                                            <div className="dropdown custom-table-dropdown px-1">
                                                                <span data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="mdi mdi-dots-horizontal text-muted" style={{ cursor: 'pointer', fontSize: '20px' }} />
                                                                </span><div className="dropdown-menu dropdown-menu-end">
                                                                    <Link className="dropdown-item" to="/storemerchant/vpa">VPA List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/store">Store List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/subuser">Sub User List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/submerchant">Sub Merchant List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/bank">Bank List</Link>
                                                                </div>
                                                            </div>
                                                        </Td>
                                                        <Td>
                                                            <Tooltip title="Edit"><Link className="text-primary " to="/storemerchant/edit"><i className="mdi mdi-pencil font-size-18" /></Link></Tooltip>
                                                        </Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>05</Td>
                                                        <Td>
                                                            <Link className="text-info " to="/storemerchant/details">Dhanasekaran</Link>
                                                        </Td>
                                                        <Td>
                                                            <Tooltip title="Sri iyyanar workshop">Sri iyyanar workshop</Tooltip>
                                                        </Td>
                                                        <Td style={{ textTansform: 'capitalize' }}>Business</Td>
                                                        <Td >6383634646</Td>
                                                        <Td>
                                                            <Tooltip title="Chikkana clg road&nbsp;Lalli hospital near&nbsp;Tiruppur&nbsp;Tamil Nadu&nbsp;641687&nbsp;">Chikkana clg road&nbsp;Lalli hospital near&nbsp;Tiruppur&nbsp;Tamil Nadu&nbsp;641687&nbsp;</Tooltip>
                                                        </Td>
                                                        <Td>28-02-2023 12:01 pm</Td>
                                                        <Td>
                                                            <span className="btn btn-danger btn-sm text-capitalize">Deactive</span>
                                                        </Td>
                                                        <Td>
                                                            <div className="dropdown custom-table-dropdown px-1">
                                                                <span data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="mdi mdi-dots-horizontal text-muted" style={{ cursor: 'pointer', fontSize: '20px' }} />
                                                                </span>
                                                                <div className="dropdown-menu dropdown-menu-end">
                                                                    <Link className="dropdown-item" to="/storemerchant/vpa/cgSm7B3Vy">VPA List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/store/cgSm7B3Vy">Store List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/subuser/cgSm7B3Vy">Sub User List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/submerchant/cgSm7B3Vy">Sub Merchant List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/bank/cgSm7B3Vy">Bank List</Link>
                                                                </div>
                                                            </div>
                                                        </Td>
                                                        <Td>
                                                            <Tooltip title="Edit"><Link className="text-primary " to="/storemerchant/edit"><i className="mdi mdi-pencil font-size-18" /></Link></Tooltip>
                                                        </Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>06</Td>
                                                        <Td><Link className="text-info " to="/storemerchant/details">ANUSUYA S</Link></Td>
                                                        <Td><Tooltip title="Samiset Chicken Center">Samiset Chicken Center</Tooltip></Td>
                                                        <Td style={{ textTransform: 'capitalize' }}>trade</Td>
                                                        <Td>7401059800</Td>
                                                        <Td><Tooltip title="27/103 new colony&nbsp;Easur&nbsp;Easur&nbsp;Tamil Nadu&nbsp;603310&nbsp;">27/103 new colony&nbsp;Easur&nbsp;Easur&nbsp;Tamil Nadu&nbsp;603310&nbsp;</Tooltip></Td>
                                                        <Td>28-02-2023 11:57 am</Td>
                                                        <Td><span className="btn btn-success btn-sm text-capitalize">active</span></Td>
                                                        <Td>
                                                            <div className="dropdown custom-table-dropdown px-1">
                                                                <span data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="mdi mdi-dots-horizontal text-muted" style={{ cursor: 'pointer', fontSize: '20px' }} />
                                                                </span><div className="dropdown-menu dropdown-menu-end">
                                                                    <Link className="dropdown-item" to="/storemerchant/vpa">VPA List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/store">Store List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/subuser">Sub User List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/submerchant">Sub Merchant List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/bank">Bank List</Link>
                                                                </div>
                                                            </div>
                                                        </Td>
                                                        <Td>
                                                            <Tooltip title="Edit"><Link className="text-primary " to="/storemerchant/edit"><i className="mdi mdi-pencil font-size-18" /></Link></Tooltip>
                                                        </Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>07</Td>
                                                        <Td>
                                                            <Link className="text-info " to="/storemerchant/details">Dhanasekaran</Link>
                                                        </Td>
                                                        <Td>
                                                            <Tooltip title="Sri iyyanar workshop">Sri iyyanar workshop</Tooltip>
                                                        </Td>
                                                        <Td style={{ textTansform: 'capitalize' }}>trade</Td>
                                                        <Td >6383634646</Td>
                                                        <Td>
                                                            <Tooltip title="Chikkana clg road&nbsp;Lalli hospital near&nbsp;Tiruppur&nbsp;Tamil Nadu&nbsp;641687&nbsp;">Chikkana clg road&nbsp;Lalli hospital near&nbsp;Tiruppur&nbsp;Tamil Nadu&nbsp;641687&nbsp;</Tooltip>
                                                        </Td>
                                                        <Td>28-02-2023 12:01 pm</Td>
                                                        <Td>
                                                            <span className="btn btn-success btn-sm text-capitalize">active</span>
                                                        </Td>
                                                        <Td>
                                                            <div className="dropdown custom-table-dropdown px-1">
                                                                <span data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="mdi mdi-dots-horizontal text-muted" style={{ cursor: 'pointer', fontSize: '20px' }} />
                                                                </span>
                                                                <div className="dropdown-menu dropdown-menu-end">
                                                                    <Link className="dropdown-item" to="/storemerchant/vpa/cgSm7B3Vy">VPA List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/store/cgSm7B3Vy">Store List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/subuser/cgSm7B3Vy">Sub User List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/submerchant/cgSm7B3Vy">Sub Merchant List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/bank/cgSm7B3Vy">Bank List</Link>
                                                                </div>
                                                            </div>
                                                        </Td>
                                                        <Td>
                                                            <Tooltip title="Edit"><Link className="text-primary " to="/storemerchant/edit"><i className="mdi mdi-pencil font-size-18" /></Link></Tooltip>
                                                        </Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>08</Td>
                                                        <Td><Link className="text-info " to="/storemerchant/details">Vinoth</Link></Td>
                                                        <Td><Tooltip title="Samiset Chicken Center">Samiset Chicken Center</Tooltip></Td>
                                                        <Td style={{ textTransform: 'capitalize' }}>Trade</Td>
                                                        <Td>7401059800</Td>
                                                        <Td><Tooltip title="27/103 new colony&nbsp;Easur&nbsp;Easur&nbsp;Tamil Nadu&nbsp;603310&nbsp;">27/103 new colony&nbsp;Easur&nbsp;Easur&nbsp;Tamil Nadu&nbsp;603310&nbsp;</Tooltip></Td>
                                                        <Td>28-02-2023 11:57 am</Td>
                                                        <Td><span className="btn btn-danger btn-sm text-capitalize">Deactive</span></Td>
                                                        <Td>
                                                            <div className="dropdown custom-table-dropdown px-1">
                                                                <span data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="mdi mdi-dots-horizontal text-muted" style={{ cursor: 'pointer', fontSize: '20px' }} />
                                                                </span><div className="dropdown-menu dropdown-menu-end">
                                                                    <Link className="dropdown-item" to="/storemerchant/vpa">VPA List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/store">Store List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/subuser">Sub User List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/submerchant">Sub Merchant List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/bank">Bank List</Link>
                                                                </div>
                                                            </div>
                                                        </Td>
                                                        <Td>
                                                            <Tooltip title="Edit"><Link className="text-primary " to="/storemerchant/edit"><i className="mdi mdi-pencil font-size-18" /></Link></Tooltip>
                                                        </Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>09</Td>
                                                        <Td><Link className="text-info " to="/storemerchant/details">Ramalakshmi </Link></Td>
                                                        <Td><Tooltip title="Samiset Chicken Center">SRI AMMAN HOTEL</Tooltip></Td>
                                                        <Td style={{ textTransform: 'capitalize' }}>Trade</Td>
                                                        <Td>8754258317</Td>
                                                        <Td><Tooltip title="Periyakadai Bazaar Opp Govindaraj Hospital Rajapalayam Tamil Nadu 626117 ">Periyakadai Bazaar Opp Govindaraj Hospital Rajapalayam Tamil Nadu 626117 </Tooltip></Td>
                                                        <Td>28-02-2023 11:57 am</Td>
                                                        <Td><span className="btn btn-success btn-sm text-capitalize">active</span></Td>
                                                        <Td>
                                                            <div className="dropdown custom-table-dropdown px-1">
                                                                <span data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="mdi mdi-dots-horizontal text-muted" style={{ cursor: 'pointer', fontSize: '20px' }} />
                                                                </span><div className="dropdown-menu dropdown-menu-end">
                                                                    <Link className="dropdown-item" to="/storemerchant/vpa">VPA List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/store">Store List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/subuser">Sub User List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/submerchant">Sub Merchant List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/bank">Bank List</Link>
                                                                </div>
                                                            </div>
                                                        </Td>
                                                        <Td>
                                                            <Tooltip title="Edit"><Link className="text-primary " to="/storemerchant/edit"><i className="mdi mdi-pencil font-size-18" /></Link></Tooltip>
                                                        </Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>10</Td>
                                                        <Td>
                                                            <Link className="text-info " to="/storemerchant/details">Dhanasekaran</Link>
                                                        </Td>
                                                        <Td>
                                                            <Tooltip title="Sri iyyanar workshop">Sri iyyanar workshop</Tooltip>
                                                        </Td>
                                                        <Td style={{ textTansform: 'capitalize' }}>Business</Td>
                                                        <Td >6383634646</Td>
                                                        <Td>
                                                            <Tooltip title="Chikkana clg road&nbsp;Lalli hospital near&nbsp;Tiruppur&nbsp;Tamil Nadu&nbsp;641687&nbsp;">Chikkana clg road&nbsp;Lalli hospital near&nbsp;Tiruppur&nbsp;Tamil Nadu&nbsp;641687&nbsp;</Tooltip>
                                                        </Td>
                                                        <Td>28-02-2023 12:01 pm</Td>
                                                        <Td>
                                                            <span className="btn btn-danger btn-sm text-capitalize">Deactive</span>
                                                        </Td>
                                                        <Td>
                                                            <div className="dropdown custom-table-dropdown px-1">
                                                                <span data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="mdi mdi-dots-horizontal text-muted" style={{ cursor: 'pointer', fontSize: '20px' }} />
                                                                </span>
                                                                <div className="dropdown-menu dropdown-menu-end">
                                                                    <Link className="dropdown-item" to="/storemerchant/vpa/cgSm7B3Vy">VPA List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/store/cgSm7B3Vy">Store List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/subuser/cgSm7B3Vy">Sub User List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/submerchant/cgSm7B3Vy">Sub Merchant List</Link>
                                                                    <Link className="dropdown-item" to="/storemerchant/bank/cgSm7B3Vy">Bank List</Link>
                                                                </div>
                                                            </div>
                                                        </Td>
                                                        <Td>
                                                            <Tooltip title="Edit"><Link className="text-primary " to="/storemerchant/edit"><i className="mdi mdi-pencil font-size-18" /></Link></Tooltip>
                                                        </Td>
                                                    </Tr>
                                                </Tbody>
                                            </Table>
                                        </div>
                                    </div>
                                    <div className="w-100 justify-content-end d-flex">
                                        <button class="btn btn-sm btn-info font-size-13">&lt;&lt; Previous</button>
                                        <button class="btn btn-sm btn-info font-size-13 ms-1">Next &gt;&gt;</button>
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

export default MerchantList;
