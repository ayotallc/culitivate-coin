import React from 'react'
import ReactDOM from "react-dom"
import CultivateCoinWork from './CultivateCoinWork'
export default function Newsletter() {

const iframe = '<iframe id="JotFormIFrame-211024252253036" title="Stay informed about Cultivate Coin" onload="window.parent.scrollTo(0,0)" onload="window.parent.scrollTo(0,0)" allowtransparency="true" allowfullscreen="true" allow="geolocation; microphone; camera" src="https://form.jotform.com/211024252253036" frameborder="0" style="min-width: 80%; display: block; margin-left: auto; margin-right: auto; margin-top: 5%; height:439px; border:none;" scrolling="no"></iframe>'
 
function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
  }

return (
        <div className="newsletter">
            {/* <CultivateCoinWork/> */}
        <Iframe iframe={iframe}></Iframe>
</div>
    )
}
