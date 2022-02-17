import React from "react";
import Button from "react-bootstrap/Button";

const MakeAdmin = () => {

    return (
        <div>
            <h2 className="my-5 text-center title-block">Make An Admin</h2>
            <div className="w-50 m-auto">
                <form>
                    <input
                        className="w-75 m-2 p-2 rounded"
                        label="Email"
                        type="email"
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
