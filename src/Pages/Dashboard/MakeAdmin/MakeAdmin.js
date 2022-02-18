import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
    const [email, setEmail] = useState("");
    const { token } = useAuth();

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    };

    const handleAdminSubmit = (e) => {
        e.preventDefault();
        const user = { email };
        fetch("http://localhost:5000/users/admin", {
            method: "PUT",
            headers: {
                "authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount) {
                    setEmail('');
                    swal("Good job!", "Admin has been created!", "Success");
                }
            });
    };

    return (
        <div>
            <h2 className="my-5 text-center title-block">Make An Admin</h2>
            <div className="w-50 m-auto">
                <form onSubmit={handleAdminSubmit}>
                    <input
                        className="w-75 m-2 p-2 rounded"
                        label="Email"
                        type="email"
                        onBlur={handleOnBlur}
                        placeholder="Enter Your Email"
                    />
                    <div className="text-center">
                        <Button type="submit" variant="warning">
                            Make An Admin
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;
