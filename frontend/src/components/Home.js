import React from "react";
import "./all.css";
import { Link } from "react-router-dom";
import Pic from "../assets/farm.jpg";

const Box = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <div
        style={{
          width: "100vw",
          maxWidth: "79rem",
          height: "20rem",
          background: "darkgreen",
          margin: "0 auto",
          display: "flex",
        }}
      >
        <div style={{  textAlign: "center" }}>
          {/* Text content */}
          <h1 style={{ paddingTop: "20px", color: "white" }}>
            Crop Monitoring
          </h1>
          <p style={{ color: "white" }}>
            Crop monitoring using space-based information to monitor the crop
            health status and predict the crop yield. The approach takes
            advantage of earth observation information provided by the satellite
            sensors, which are able to observe vegetation on a daily basis and
            derive different vegetation indices.
          </p>
        </div>
        <div style={{ }}>
          {/* Image content */}
          <img
            src={Pic}
            alt="farm"
            style={{ height: "20rem", objectFit: "contain" }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "40px",
        }}
      >
        {/* Two additional boxes */}
        <div
          style={{
            width: "35rem",
            height: "13rem",
            background: "darkgreen",
            textAlign: "center",
          }}
        >
          <h2 style={{ paddingTop: "30px", color: "white" }}>We Provide</h2>
          <p style={{ color: "white" }}>A better visualization</p>
          <h5 style={{ color: "white" }}>NDVI index, NDMI index, SDVI index</h5>
         
        </div>
        <div
          style={{
            width: "35rem",
            height: "13rem",
            background: "darkgreen",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ color: "white" }}>
            Start to visualize your crop health and get benefited by our
            suggestion
          </p>
          <Link to="/Monitor">
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "blue",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              START
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Box;
