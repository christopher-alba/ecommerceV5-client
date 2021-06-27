import React from "react";

const Favourites = ({ productIds }) => {
  console.log(productIds);
  return <div>{JSON.stringify(productIds)}</div>;
};

export default Favourites;
