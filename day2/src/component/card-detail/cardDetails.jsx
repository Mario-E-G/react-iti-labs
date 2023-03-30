import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rate from "rc-rate";

const CardDetails = () => {
  const [prd, setProduct] = useState({});

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  let { id } = useParams();

  const styledRate = {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 35,
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-6">
          <div className="details">
            <div className="cardimg w-50">
              <img className="w-100 text-center" src={prd.image} alt="img" />
            </div>
          </div>
        </div>
        <div className="col-6 d-flex flex-column justify-content-center">
          <div className="cardetails text-center">
            <h1>{prd.title}</h1>
          </div>
          <div className="cardetails text-center">
            <p>{prd.description}</p>
          </div>
          <div className="cardetails text-center ">
            <h4>Price: {prd.price}$</h4>
          </div>
          <div className="cardetails text-center ">
            <h4>Rate: {prd?.rating?.rate}</h4>
            <Rate
              allowHalf={true}
              value={prd?.rating?.rate}
              count={5}
              precision={1}
              allowClear={true}
              style={styledRate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
