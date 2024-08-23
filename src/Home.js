import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="Home">
           <img className="Home__image" src="https://i.ytimg.com/vi/veettl68tfk/maxresdefault.jpg" alt=""></img>
           <div className="Home__row">
           <Product
                id="1"
                title="AVITA LIBER NS13A1IN005P 13.3-inch FHD Ultra Slim & Light"
                price={11.1}
                rating={5}
                image="https://m.media-amazon.com/images/I/717RWbOuyCL._AC_SX372_SY372_.jpg"

           
           >

           </Product>
           <Product
                id="2"
                title="Scott International
                Unisex Reusable Face Mask"
                price={239}
                rating={3}
                image="https://m.media-amazon.com/images/I/61Nq11En1RL._AC_UL480_FMwebp_QL65_.jpg"

           
           >

           </Product>
           </div>
           <div className="Home__row">
           <Product
                id="3"
                title="White Westinghouse (Trademark By Electrolux) 7 Kg Semi-Automatic Top Loading Washing Machine (CSW7000, Maroon)"
                price={11.1}
                rating={5}
                image="https://m.media-amazon.com/images/I/71jcpHEk+CL._AC_UY327_FMwebp_QL65_.jpg"

           
           >

           </Product>
           <Product
                id="1"
                title="pTron Bassbuds in-Ear True Wireless Bluetooth Headphones (TWS) "
                price={111.1}
                rating={1}
                image="https://images-eu.ssl-images-amazon.com/images/I/51KM0EyQKNL._AC_UL270_SR270,270_.jpg"

           
           >

           </Product>
           <div className="Home__row">
           <Product
                id="1"
                title="How Constatnt Innovation Create Radically Successful Businesses Paperback"
                price={1.1}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg"

           
           >

           </Product>
          
           </div>
           </div>
           <div className="Home__row">
           <Product
                id="1"
                title="LG UltraWide 34 Inch WFHD (2560 x 1080) IPS Display - HDR 10, AMD Free sync, sRGB 99%, Multitasking and Gaming Monitor - 34WL500"
                price={1111.1}
                rating={5}
                image="https://m.media-amazon.com/images/I/71xMxbdxrsL._AC_UL480_FMwebp_QL65_.jpg"

           
           >

           </Product>
          
           </div>
        </div>
        
    )

}

export default Home
