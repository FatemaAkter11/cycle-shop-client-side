import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const { user } = useAuth();

    const [change, setChange] = useState({
        name: `${user?.displayName}`,
        address: "",
        PhoneNumber: "",
        location: "",
    });

    // handle change
    const handleChange = (e) => {
        const { value, name } = e.target;
        setChange((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            };
        });
    };

    //   handle on submit
    const handleSubmit = (e) => {
        e.preventDefault();

        swal(
            "Information Updated!",
            "Your shipping details updated successfully!",
            "success"
        )
    };


    return (
        <Container className="my-5">
            <Row>
                <>
                    <div className="col-md-6">
                        <h2 className="text-muted">Edit Delivery Details</h2>
                        <hr />
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Delivery to"
                                name="name"
                                value={change.name}
                                onChange={handleChange}
                                required
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                type="text"
                                placeholder="Address"
                                name="address"
                                value={change.address}
                                onChange={handleChange}
                                required
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                type="number"
                                placeholder="Phone Number"
                                name="phoneNumber"
                                value={change.phoneNumber}
                                onChange={handleChange}
                                required
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input
                                type="text"
                                placeholder="Location"
                                name="location"
                                value={change.location}
                                onChange={handleChange}
                                required
                                className="p-2 m-2 w-100"
                            />

                            <button className="btn btn-warning">Save & Continue</button>
                        </form>
                    </div>
                    <div className="col-md-6 ">
                        <div className="d--flex">
                            <p>
                                Deliver to :
                            </p>
                            <p className="text-danger">Arriving in 2-7 days</p>
                            <p>
                                Address :
                            </p>
                            <p>
                                Phone Number :
                            </p>
                            <p>
                                Location :
                            </p>
                        </div>

                        {/* orders */}

                        <div>
                            <button
                                className="btn btn-warning"
                                onClick={() => {
                                    swal(
                                        "Congratulations!!!",
                                        `You have order times successfully`,
                                        "success"
                                    );
                                }}
                            >
                                Place Order
                            </button>
                        </div>
                    </div>
                </>
            </Row>
        </Container>
    );
};

export default Booking;