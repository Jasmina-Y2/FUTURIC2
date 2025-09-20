import Header from "../components/Header.jsx";
import '../css/Page/Start.css'
import Footer from "../components/Footer.jsx"
import {BiLogoReact} from 'react-icons/bi'
import {SiDeno,SiJavascript,SiMysql} from 'react-icons/si'
import {AiFillHtml5} from 'react-icons/ai'
import {FaSass} from 'react-icons/fa'

function Start(){
    return(
        <>
        <Header props={"Start"}></Header>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <section className="Contact-Section1">
            <h2>
                Write your message
            </h2>
            <form action="/contact" method="POST">
                <fieldset>
                    <legend>
                        <label>Email:</label>
                    </legend>
                    <input className="style-input" autoFocus required type="email" placeholder="ejemplo@gmail.com" name="text"></input>

                </fieldset>
                <br/>
                <fieldset>
                    <legend>
                        <label>Message:</label>
                    </legend>
                    
                    <textarea className="style-input" required type="text" placeholder="here your message" name="message"/>

                </fieldset>
                <br/>

                <button>Enviar</button>
            </form>
            <hr></hr>
            <br/>
            <p className="text-2" >
            Developed with:
            </p>
            <br/>
            <ul>
                <li> <BiLogoReact></BiLogoReact> React + Vite</li>
                <li> <SiDeno></SiDeno> Deno</li>
                <li> <AiFillHtml5></AiFillHtml5> HTML</li>
                <li> <FaSass></FaSass> SASS</li>
                <li> <SiJavascript></SiJavascript> JavaScript</li>
                <li> <SiMysql></SiMysql> Mysql</li>

            </ul>
            <br/>
            <br/>

        </section>
        <Footer></Footer>
        </>
    )
}
export default Start;