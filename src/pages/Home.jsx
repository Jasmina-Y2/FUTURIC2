import Header from "../components/Header.jsx";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import '../css/Page/Home.css'
import { useState } from "react";


function Home(){
    

    return(
        <>
        <Header props={"Home"}></Header>
        <br/>
        <br/>
        <br/>
        <br/>
        <section className="Home-Section1">
            <div className="Home-Section1-welcome" >
                <div className="Home-Section1-welcome-contain" >
                    <ul>
                        <li>Inicio</li>
                        &nbsp;>> &nbsp;
                        <li>Show images</li>
                        &nbsp;>> &nbsp;
                        <li>Start now</li>
                    </ul>
                    <div className="text-reference" >     
                        <h1>
                            FUTURIC
                        </h1>
                        <br/>
                        <p>
                            We are more than a technology company; We are pioneers, visionaries and dreamers who challenged conventional limits.
                        </p>
                        
                        <br/>
                        <p>
                            "Estamos construyendo el futuro."
                        </p>
                        <br/>
                        <button>
                            <Link to="/Start">START NOW</Link>
                        </button> 
                    </div>
                </div>
            </div>
            <div className="Home-Section1-card1 img-orden" ></div>
            <div className="Home-Section1-card2 img-orden" ></div>
            <div className="Home-Section1-small1 img-orden" ></div>
            <div className="Home-Section1-small2 img-orden" ></div>
            <div className="Home-Section1-small3 img-orden" ></div>
            <div className="Home-Section1-small4 img-orden" ></div>
            <div className="Home-Section1-text1 img-orden" ></div>
            <div className="Home-Section1-text2 img-orden" ></div>
        </section>
        <Footer></Footer>
        </>
    )
}
export default Home