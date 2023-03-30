import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
// import Navbar from "react-bootstrap/Navbar";
// import Navbar from "react-bootstrap/Navbar";

const Shop = () => {
  useEffect(() => {
    getProducts();
  }, []);

  const [product, setProducts] = useState([]);
  console.log(product);
  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  return (
    <div className="container ">
      <div className="row">
        {product.map((prd) => {
          return (
            <div key={prd.id.toString()} className="col-4">
              <div className="w-100 d-flex py-3 position-relative">
                <Card
                  className="w-100 py-2 justify-content-center align-items-center d-flex"
                  style={{ width: "18rem", height: "90vh" }}
                >
                  <Card.Img
                    variant="top"
                    className="w-75 h-50 d-flex justify-content-bewteen align-items-center"
                    src={prd.image}
                  />
                  <Card.Body className=" d-flex justify-content-bewteen align-items-center flex-column">
                    <Card.Title>{prd.title}</Card.Title>
                    <h4>{prd.category}</h4>
                    <div>
                      {" "}
                      <h5>Price: {prd.price}$</h5>
                    </div>
                    <Link
                      className="position-absolute btn btn-primary"
                      style={{ bottom: "20px" }}
                      to={`/shop/${prd.id}`}
                    >
                      Details
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
