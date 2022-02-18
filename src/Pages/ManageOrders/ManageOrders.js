import React from "react";
import { Table } from "react-bootstrap";

const ManageOrders = () => {

  return (
    <div>
      <h2 className="text-center py-3">Order Item</h2>
      <h1 className="text-center title-block">Manage Order</h1>
      <Table striped bordered hover>
        <thead>
          <tr className="bg-warning">
            <th>#</th>
            <th>Image</th>
            <th>User email</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>status</th>
            <th>Action</th>
          </tr>
        </thead>
      </Table>
    </div>
  );
};

export default ManageOrders;
