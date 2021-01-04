import React from "react";
import { useParams, useLocation } from "react-router-dom";

const SingleProd = () => {
  const params = useParams();
  const loc = useLocation();
  console.log(params, loc);
  return <div>Bello</div>;
};

export default SingleProd;
