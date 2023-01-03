import React from "react";
import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const loaderData = useLoaderData();
  // console.log(loaderData);

  const details = loaderData[1];
  // console.log(details);
  // console.log(loaderData);

  return (
    <>
      {details?.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <section>
          <h2 className="btn_heading">Details For {loaderData[0]}</h2>
          <div className="projectDetails_container" data-aos="zoom-in">
            {details.map((detail, idx) => {
              return (
                <div key={idx}>
                  <div className="card">
                    <img src={detail.ss1Url} alt="" className="card_img" />
                    <p className="detail_bg">{detail.ss1Details}</p>
                  </div>
                  <div className="card">
                    <img src={detail.ss2Url} alt="" className="card_img" />
                    <p className="detail_bg">{detail.ss2Details}</p>
                  </div>
                  <div className="card">
                    <img src={detail.ss3Url} alt="" className="card_img" />
                    <p className="detail_bg">{detail.ss3Details}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default ProjectDetails;
