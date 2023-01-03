import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="error_container">
      <div className="error_text">
        <h1>{error?.status}</h1>
        <h2>{error?.statusText}</h2>
      </div>
    </div>
  );
};

export default ErrorPage;
