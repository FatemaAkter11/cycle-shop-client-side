import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const FeaturedProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("./products.json")
            .then((res) => res.json())
            .then((result) => setProducts(result));
    }, []);
    return (
        <Container>
            <div className="text-center my-5">
                <div className="title-block py-3">Best Seller</div>
                <h2>FEATURED PRODUCTS</h2>
                <small>
                    <p className="text-muted">
                        THE WORLD'S FAVOURITE ONLINE BIKE STORE | OVER 500 BRANDS IN STOCK
                        NOW
                    </p>
                </small>
            </div>
            <Row>
                {products.slice(0, 6).map((pd, index) => (
                    <Col sm={12} md={6} lg={4} key={pd.id} className="my-5">
                        <div className="m-2">
                            <Card className="mx-auto card" style={{ width: "21rem" }}>
                                <Card.Img variant="top" className="img-fluid mx-auto" src={pd?.image} />
                                <Card.Body className="my-1 py-1">
                                    <Card.Title><p className="text-muted">{pd.category}</p></Card.Title>
                                    <Card.Text><h6>{pd.name.slice(0, 33)}</h6></Card.Text>
                                    <Card.Text><p className="text-danger">Price: ${pd.price}</p></Card.Text>
                                </Card.Body>

                                <Card.Body className="d-flex">
                                    <Link to='/productDetails'>
                                        <button className="btn btn-warning font-bold">
                                            View Details
                                        </button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default FeaturedProduct;