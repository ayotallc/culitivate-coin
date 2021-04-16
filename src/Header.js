import React,{useState} from 'react'
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';




export default function Header() {

   
   const [open, setOpen] = useState(false);
   
   const onOpenModal = () => setOpen(true);
   const onCloseModal = () => setOpen(false);
   
   // var element = document.getElementById("gautam");
   
   const navbarOpen =()=>{
      var element = document.getElementById("gautam");
      element.classList.add('navigation_mobileNavigationOpen__3X3bU');
   }
   window.addEventListener('mouseup',(event)=>{
      var element = document.getElementById("gautam");
      // element.classList.remove('navigation_mobileNavigationOpen__3X3bU');
      if(event.target != element){
         element.classList.remove('navigation_mobileNavigationOpen__3X3bU');
      }
   })

    return (
        <div>
           <div  className="header_container__3c2dZ">
   <div style={{position:"relative",bottom:"2.5rem",left:"1.8rem"}}><br/><span style={{fontWeight:"800",fontSize:"2.0rem",marginBottom:"0"}}>Cultivate Coin</span><br/>
   <span style={{marginBottom:"0",marginTop:"0",fontWeight:"50",opacity:"0.9",fontSize:"1.3rem"}}>Decentralized Farming</span>
   </div>
   
   {/* <nav className="navigation_navigation__3kcwo header_headerNavigation__1jIbi"><a href="/#" className="navigation_link__2Deuz">How it works</a><a className="navigation_link__2Deuz">Growbox</a>
   <a className="navigation_link__2Deuz">Collections</a>
   </nav> */}
   <nav id="gautam" className="navigation_navigation__3kcwo navigation_mobileNavigation__116Aa">
   <a href="https://exchange.pancakeswap.finance/#/add/BNB/0x8a3E4D92396B85a319986442C402b94e623a0371" className="navigation_link__2Deuz tablet">PancakeSwap</a>
   <a href="/#" onClick={onOpenModal} className="navigation_link__2Deuz mobile">Login</a>
   <a href="/#" onClick={onOpenModal} className="navigation_link__2Deuz mobile">Signup</a>
   <a href="/#" onClick={onOpenModal} className="navigation_link__2Deuz mobile">Connect with Metamask</a>
   {/* <a className="navigation_link__2Deuz tablet">Stake</a> */}
   {/* <a href="/#" className="navigation_link__2Deuz">How it works</a> */}
   {/* <a className="navigation_link__2Deuz">Artists</a> */}
   {/* <a className="navigation_link__2Deuz">Collections</a> */}
   </nav>
   <div className="header_right__vh4PD">
      <div className="wallet_wallet__2hFnB">
         <a href="https://exchange.pancakeswap.finance/#/add/BNB/0x8a3E4D92396B85a319986442C402b94e623a0371" className="button_button__320IU button_buttonFilled__1eZ4c wallet_hideButtons__1qCVm">PancakeSwap</a>
         <Modal open={open} onClose={onCloseModal}  center>
         <content className="comingSoon">
  {/* <p>Be ready, we are launching soon.</p> */}
         <h1>Coming Soon</h1>
         </content>
         </Modal>
      {/* <button className="button_button__320IU button_buttonFilled__1eZ4c wallet_hideButtons__1qCVm"><span className="" style={{color:"#fff"}}>Stake</span></button> */}
      <a onClick={onOpenModal} className="button_button__320IU wallet_connectButton__3NDuJ"><span className="" style={{color:"#fff"}}>Login</span></a><a onClick={onOpenModal} className="button_button__320IU wallet_connectButton__3NDuJ"><span className="" style={{color:"#fff"}}>Signup</span></a>
      <a href="/#" className="button_button__320IU button_buttonFilled__1eZ4c wallet_hideButtons__1qCVm"><span className="" style={{color:"#fff"}}>Connect with Metamask</span></a>
      </div>
      <button onClick={navbarOpen} className="button_button__320IU header_hamburgerButton__1aTb8">
         <span className="" style={{color:"#fff"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="">
               <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
         </span>
      </button>
   </div>
</div> 
        </div>
    )
}
