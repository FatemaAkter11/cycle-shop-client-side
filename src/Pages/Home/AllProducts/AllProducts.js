import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // fetch("./products.json")
        fetch("https://tranquil-hollows-53684.herokuapp.com/allProducts")
            .then((res) => res.json())
            .then((result) => setProducts(result));
    }, []);
    return (
        <Container>
            <div className="text-center my-2">
                <div className="title-block py-3">Best Bikes </div>
                <h2>ALL PRODUCT</h2>
                <small>
                    <p className="text-muted">
                        THE WORLD'S FAVOURITE ONLINE BIKE STORE | OVER 500 BRANDS IN STOCK
                        NOW
                    </p>
                </small>
            </div>
            <Row>
                {products.map((pd, index) => (
                    <div key={pd.id} className="col-md-4 my-5">
                        <div>
                            <img className="w-50" src={pd?.image} alt="" />
                        </div>
                        <small>
                            <p className="text-muted">{pd.category}</p>
                            <hr />
                        </small>
                        <h6>{pd.name.slice(0, 33)}</h6>
                        <p className="text-danger">Price: ${pd.price}</p>
                        <Link to='productDetails'>
                            <button className="btn btn-warning font-bold">
                                View Details
                            </button>
                        </Link>
                    </div>
                ))}
            </Row>
        </Container>
    );
};

export default AllProducts;