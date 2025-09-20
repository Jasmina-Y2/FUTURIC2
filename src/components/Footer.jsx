import { Link } from "react-router-dom"
import '../css/Footer.css'

function Footer(){
    return(
        
        <fotter>
            <h2 className="title">Futuric.online</h2>
            <span className="title-sub">We build to future</span>
            <div className="content-references">
                <div>
                    <p>Product</p> 
                    <br/>
                    <ul>
                        <li>CookFast</li>
                        <li>Anny Fly</li>
                        <li>Of Future</li>
                        <li>Best black</li>
                        <li>IA</li>
                    </ul>
                </div>
                <div>
                    
                    <p>Company</p>
                    <br/>
                    <ul>
                        <Link to="/Faq"><li>Polity</li></Link>
                        <Link to="/Faq"><li>About Us</li></Link>
                        <Link to="/Faq"><li>Creator</li></Link>
                        <Link to="/Faq"><li>Miemb</li></Link>
                    </ul>
                    
                </div>
                <div>
                    <p>Global</p>
                    
                    <br/>
                    <ul>
                        <li>Security</li>
                        <li>Divercity</li>
                    </ul>
                </div>
                <div>
                    <p>Services</p>
                    
                    <br/>
                    <ul>
                        <li>App Developement</li>
                        <li>Games </li>
                        <li>TextArt </li>
                    </ul>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <p className="futuric-copy">© 2023 Futuric Technologies, Inc.</p>
            <br/>
        </fotter>
        
    )
}
export default Footer;