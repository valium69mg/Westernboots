import React from "react";  
import MenuBar from "./MenuBar";
import {Link} from 'react-router-dom';



export default function Home() {
    return (
        <div className="homeContainer">
           <MenuBar/>
           <div className="home">
            <div className="homePresentation">
                <h1> Wear Western. </h1>
                <p> We are an e-commerce  brand that is specialized on delivering the finest cowboy boots of the market right to your door. </p>
                <Link className="anchor" to="/"> See more </Link>
                
            </div>
            <img src="../imgs/cowboyboots.png" alt="cowboy boots"></img>
           </div>

        </div>
    )
}