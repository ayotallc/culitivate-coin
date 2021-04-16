import React from "react";
import "./NewHome.css";
import OneCoin from "./onecoin.gif";
import Logistics from "./Logistics.png";
import Certi from "./certi.png";
import DropCoin from "./dropCoin.gif";
import LandingGif from "./landingGif.gif";
import HowItWorks from "./HowItWorks.png";
import Growbox from "./Growbox";
import DesignedImage from "./sw2.jpg";

export default function NewHome() {
  return (
    <div>
      <div className="headline">
        <div className="headers">
          <img className="certi" src={Certi} alt=""></img>
          <h1 className="heading-r head1">WHO WE <span style={{WebkitTextStroke: "2px #438400",color:"#EAFFC0"}}>ARE</span></h1>
          <h1 className="heading-r" style={{ fontSize: "2rem",marginTop:"0" }}>
            Each NFT is backed by
            InGrown's <br/>
            Automated Off the Grid Growboxes
          </h1>
          <p className="content-r">
            Each box mints
             as an animated NFT
             split<br /> into 500 editions for $999.
          </p>
        </div>
      </div>

      <img src={DesignedImage} alt="" className="landing"></img>
      <Growbox />
      <div>
        <img className="landing" src="" alt=""></img>
      </div>
      <div className="headline">
        <div className="headers">
          <img className="images-l" src={DropCoin} alt=""></img>
          <h1 className="heading-l">
            <br />
            <br />
            How You Earn
            <br />{" "}
          </h1>
          <p className="content-l">
            Receive 0.1% of your box’s profits as
            <br />
            Cultivate Coins automatically sent to
            <br /> your digital wallet for as
            <br />
            long as you own the NFT.
            <br />
            <br />
            Profit sharing transfers to
            <br />
            new owners if the
            <br />
            NFT is sold in the open market.
          </p>
        </div>
      </div>
      <div className="headline">
        <div className="headers">
          <img className="images-r" src={Logistics} alt=""></img>
          <h1 className="heading-r">Logistics</h1>
          <br />
          <p className="content-r">
            Distributing product has been
            <br /> made easy and flexible.
            <br /> <br />
            Owners of the NFT have the option <br />
            to partner with Ingrown Organics <br /> for distribution services.
            <br />
            They handle the organization of <br />
            retail stores, dispensaries and <br />
            independent resellers <br />
            <br />
            In addition to Ingrown, <br />
            Shareholders can also go from
            <br />
            hundreds of similar distributors
            <br />
            and decide on which <br />
            service suits their <br />
            individual needs.
          </p>
        </div>
      </div>
      <img src={HowItWorks} className="landing" alt=""></img>
    </div>
  );
}