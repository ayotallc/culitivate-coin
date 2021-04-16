import React from 'react'
import gif from './landingGif.gif'
// import agroImage from './agroMain.png'
export default function Banner() {
    return (
        <div>
            <div className="banner_container__3t38_">
   <div>
      <h1 className="mainHeading">Cultivate Coin</h1>
      <p>Bridging the gap between <span>physical goods</span> and <span>digital currency</span>.</p>
      {/* <h1 className="banner_title__2tF7I">
         <span context="START YOUR AGRICULTURAL">START YOUR AGRICULTURAL</span><br/> <span context="JOURNEY TODAY WITH">JOURNEY TODAY WITH</span><br/> <span context="AGRO COIN">AGRO COIN</span><br/>
      </h1> */}
      {/* <h2 className="banner_subTitle__23EMD">
         Get exclusive NFTs by auction sales or by farming ERNs<br/> and getting rewards that you can use to redeem cards.
      </h2> */}
      {/* <img src={agroImage} width="550"></img> */}
   </div>
   {/* <div className="banner_iframe__3G-oN"><iframe src="/_next/static/index.html" styles="[object Object]" border="0" frameborder="0" width="520" height="400"></iframe></div> */}
   <div className="banner_iframe__3G-oN"><img src={gif} alt="" ></img></div>
</div>
        </div>
    )
}
