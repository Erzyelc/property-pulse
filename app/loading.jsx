"use client";

import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const LoadingPage = ({ loading }) => {
  return (
    <ClipLoader
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading"
    />
  );
};

export default LoadingPage;
