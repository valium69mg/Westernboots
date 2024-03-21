import React from "react";  
import MenuBar from "./MenuBar";
import {Link} from 'react-router-dom';

const sizes = ["24","25","26","27","28","29"];

const cardInfo = [
    {
        id:"1",
        name:"IUV Boots",
        description:"Men's Cowboy Boots, Western Boots Modern.",
        price:"53.99",
        imgUrl:"https://m.media-amazon.com/images/I/7165U51xR7L._AC_SY695_.jpg"
    },
    {
        id:"2",
        name:"Jeossy 9806",
        description:"Half-Banded Boots with Inner Zipper.",
        price:"39.99",
        imgUrl:"https://m.media-amazon.com/images/I/71NmbI3etXL._AC_SY695_.jpg"
    },
    {
        id:"3",
        name:"IUV Boots",
        description:"Men's Cowboy Boots, Western Boots Modern.",
        price:"53.99",
        imgUrl:"https://m.media-amazon.com/images/I/7165U51xR7L._AC_SY695_.jpg"
    }
]


function Card(props){
    return (
        <div className="previewCard">
            <img src={props.imgUrl} alt={`boot${props.id}`}></img>
            <h2> {props.name}</h2>
            <h3> {props.description}</h3>
            <p>{props.price}</p>
            <div className="sizeContainer">
                <label for="sizeLabel">Choose a size (cm):</label>
                <select name="sizes" id="sizesId">
                    {sizes.map((size) => {
                        return (<option value={size}>{size}</option>);
                    })}
                </select>
            </div>
            <Link href="/" className="addToCart"> add to cart </Link>           
        </div>
    )
}




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
           
           <div className="homeCards">
           <h2 id="bestSellersHeading"> Our best sellers. </h2>
                {cardInfo.map((element => {
                    return (<Card
                        name={element.name}
                        description={element.description}
                        price={element.price}
                        imgUrl={element.imgUrl}
                        id={element.id}
                    />)
                }))}
           </div>
        </div>
    )
}