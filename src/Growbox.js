import React from "react";
import GrowboxImg from "./Growbox.png";

export default function Growbox() {
  return (
    <div className="growbox">
      <div className="growbox-text">
        <h2 className="content-r">Introduction to</h2>
        <h1 className="grow " style={{letterSpacing:"0.35rem"}}>GROWBOXES</h1>
        <p className="growbox-content"
          style={{
            color: "#438400",
            marginBottom: "0",
            marginTop: "7px",
            fontSize: "1.2rem"
          }}
        >
          Becoming a shareholder allows
        </p>
        <p className="growbox-content" style={{ color: "#438400", marginTop: "0", fontSize: "1rem" }}>
          control of these features remotely.
        </p>
      </div>
      <img src={GrowboxImg} alt="" className="landing"></img>
    </div>
  );
}