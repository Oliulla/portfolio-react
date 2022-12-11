import React from "react";
import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);

  const details = loaderData[1];
  console.log(details);

  return (
    <section>
      <h2>Details For {loaderData[0]}</h2>
      <div className="projectDetails_container">
        {details.map((detail, idx) => {
          return (
            <div key={idx}>
              <div className="card">
                <img src={detail.ss1Url} alt="" className="card_img" />
                <p>{detail.ss1Details}</p>
              </div>
              <div className="card">
                <img src={detail.ss2Url} alt="" className="card_img" />
                <p>{detail.ss2Details}</p>
              </div>
              <div className="card">
                <img src={detail.ss3Url} alt="" className="card_img" />
                <p>{detail.ss3Details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectDetails;
