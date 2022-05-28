import React from 'react'
import './searchItem.css';

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
                alt="Search"
                className="siImg" />

            <div className="siDesc">
                <h1 className="siTitle">Barra Family Resort - 3 QuartosOpens in new window</h1>
                <spam className="siDistance">29.5 km from center</spam>
                <spam className="siTaxiOp">Travel - Taxi </spam>
                <spam className="siSubtitle">Barra Family Resort </spam>

                <spam className="siFeatures">Lindo 3 Quartos features accommodations with free WiFi, an outdoor swimming pool and a fitness center</spam>

                <spam className="siCancelOp">Free canscellation</spam>
                <spam className="siCancelOpSubtitle">You can cancel later!</spam>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$112</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See available</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem