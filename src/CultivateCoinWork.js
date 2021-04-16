import React from 'react'
import Ncoins from "./nCoins.png"
import Newsletter from './Newsletter'
import News from "./news.png"

export default function CultivateCoinWork() {
    return (
        <section class="cultivate">
          {/* <h1 ><br/>How Cultivate<br/> Coins Work</h1>  */}
          <h1 class="cultivatebigheading"><br/>How Cultivate <br/> Coins Work</h1>
           <img src={Ncoins} alt="" className="coin-n" style={{display:"block",marginLeft:"auto",marginRight:"auto",width:"20%"}}></img>
           <img src={News} alt="" width="95%" style={{marginLeft:"auto",marginRight:"auto",display:"block",marginTop:"5%"}}></img>
          <Newsletter/>
 </section>
    )
}
