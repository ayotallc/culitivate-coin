import React from 'react'
import Banner from './Banner'
import Collections from './Collections'
import CultivateCoinWork from './CultivateCoinWork'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import NewBanner from './NewBanner'
import NewHome from './NewHome'
import Newsletter from './Newsletter'

export default function BgContainer() {
    return (
        <div className="bg-container dark-theme">
            <Header/>
            <NewBanner/>
            {/* <Home/> */}
            <NewHome/>
            {/* <Newsletter/> */}
            <CultivateCoinWork/>
            {/* <Collections/> */}
            <Footer/>
        </div>
    )
}
