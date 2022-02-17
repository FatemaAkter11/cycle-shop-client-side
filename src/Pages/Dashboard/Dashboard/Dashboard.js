import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FiLogOut } from "react-icons/fi";
import { FaFirstOrderAlt } from "react-icons/fa";
import { SiContactlesspayment, SiManageiq } from "react-icons/si";
import {
    MdLibraryAdd,
    MdAdminPanelSettings,
    MdOutlineRateReview,
} from "react-icons/md";
import { CgReorder } from "react-icons/cg";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import AddProduct from "../../Dashboard/AddProduct/AddProduct";

const Dashboard = () => {
    const { path, url } = useRouteMatch();

    return (
        <div>
            <Row style={{ width: "100%" }}>
                <Col
                    xs={12}
                    md={3}
                    className="d-flex justify-content-center bg-dark text-white py-5"
                >
                    <div>
                        <ul style={{ listStyle: "none" }}>
                            <Link to={`${url}`} style={{ textDecoration: "none" }}>
                                <li className="my-5 text-white">
                                    <FaFirstOrderAlt className="text-warning me-1" /> My Orders
                                </li>
                            </Link>
                            <Link to={`${url}/payment`} style={{ textDecoration: "none" }}>
                                <li className="my-5 text-white">
                                    <SiContactlesspayment className="text-warning me-2" />
                                    Payment
                                </li>
                            </Link>
                            <div>
                                <Link
                                    to={`${url}/addProduct`}
                                    style={{ textDecoration: "none" }}
                                >
                                    <li className="my-5 text-white">
                                        <MdLibraryAdd className="text-warning me-1" /> Add A
                                        Product
                                    </li>
                                </Link>
                                <Link
                                    to={`${url}/makeAdmin`}
                                    style={{ textDecoration: "none" }}
                                >
                                    <li className="my-5 text-white">
                                        <MdAdminPanelSettings className="text-warning me-1" />{" "}
                                        Make Admin
                                    </li>
                                </Link>
                                <Link
                                    to={`${url}/manageProducts`}
                                    style={{ textDecoration: "none" }}
                                >
                                    <li className="my-5 text-white">
                                        <SiManageiq className="text-warning me-1" /> Manage All
                                        Products
                                    </li>
                                </Link>
                                <Link
                                    to={`${url}/manageOrders`}
                                    style={{ textDecoration: "none" }}
                                >
                                    <li className="my-5 text-white">
                                        <CgReorder className="text-warning me-1" /> Manage Orders
                                    </li>
                                </Link>
                            </div>
                            <Link to={`${url}/addReview`} style={{ textDecoration: "none" }}>
                                <li className="my-5 text-white">
                                    <MdOutlineRateReview className="text-warning me-1" /> Review
                                </li>
                            </Link>

                            <Button
                                className="bg-warning mx-3 text-black"
                                style={{ fontSize: "15px", fontWeight: "bold" }}
                            >
                                Logout <FiLogOut />
                            </Button>
                        </ul>
                    </div>
                </Col>
                <Col xs={12} md={9}>
                    <Switch>
                        <Route exact path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
