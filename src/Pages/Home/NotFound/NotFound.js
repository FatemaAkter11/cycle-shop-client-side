import React from 'react';
import img from "../../../images/404-error.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <img className="w-75 img-fluid" src={img} alt="error" />
            </div>
            <div className="pb-5 text-center">
                <Link to="/">
                    <Button variant="warning">Back To Home</Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;