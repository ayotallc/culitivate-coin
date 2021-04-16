import React from 'react'
import onecoin from "./onecoin.gif"
import threecoin from "./threecoin.gif"

export default function Home() {
    return (
        <div>
            <div className="home_center__SgosJ">
   <div className="cards_container__3Omm5 home_cardSecond__1yBlh cards">
      <div className="card-title_title__2KtF0">
         <div className="title_title__2YR0a"><span></span></div>
      </div>
      <div className="cards_collections__3ufPx">
         <div className="card_card__2z2Nq">
            <div className="card_image__14FfC">
               <a href="/">
                  {/* <video autoplay="">
                     <source src="/_next/static/ethpacks.mp4" type="video/mp4"/>
                     Your browser does not support playing videos.
                  </video> */}
                  <img src={onecoin} alt=""></img>
               </a>
               <div className="card_detail__ZI9Lf">
                  <div className="card_title__1GWkN">CULTIVATE COIN BASE PACK</div>
                  {/* <div className="card_artist__1w2dQ">Ethernity Studios</div> */}
                  {/* <div className="card_prop__1Bu39">Edition Number: Limited Edition</div> */}
               </div>
            </div>
         </div>
         <div className="card_card__2z2Nq">
            <div className="card_image__14FfC">
               <a href="/">
                  {/* <video autoplay="">
                     <source src="/_next/static/ethpacks.mp4" type="video/mp4"/>
                     Your browser does not support playing videos.
                  </video> */}
                  <img src={threecoin} height="290" alt=""></img>
               </a>
               <div className="card_detail__ZI9Lf">
                  <div className="card_title__1GWkN">CULTIVATE COIN RARE PACK</div>
                  {/* <div className="card_artist__1w2dQ">Ethernity Studios</div> */}
                  {/* <div className="card_prop__1Bu39">Edition Number: Limited Edition</div> */}
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
        </div>
    )
}
