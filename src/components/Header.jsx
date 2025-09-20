import "../css/Header.css";
import { Link } from "react-router-dom";
import { BiAtom } from 'react-icons/bi';
import { MdExpandMore } from "react-icons/md";
import { useEffect, useState } from "react";

function Header({props}){
    const [visible, setVisible] = useState('solid-on')
    const [nonerotate,setnonerotate] = useState('rotateNormal')
    
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setVisible('solid-on');
            setnonerotate('rotateNormal')
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    const toggleMenu = () => {
        setVisible('items-link');
        setnonerotate('rotateLevt')
        //console.log(move)
    };
    


    return(
        <>
        <div className="Header-content">
        <header className="Header">
            <div className="Header-logo">
                <h2> <BiAtom /> &nbsp;</h2>
            </div>
            <nav className="Header-nav">
                <ul>
                        {(props=== "Home")      ?  <li className="solid" onClick={toggleMenu}><Link className="on-link" >Home <MdExpandMore className={nonerotate} /></Link></li>  : <li className="solid-on Header-mostrar"> <Link to="/Home">Home</Link></li>}
                        {(props=== "About")     ? <li className="solid" onClick={toggleMenu}><Link className="on-link" >About<MdExpandMore className={nonerotate} /></Link></li>  : <li className="solid-on Header-mostrar"> <Link to="/About">About</Link></li>}
                        {(props=== "Blog")      ? <li className="solid" onClick={toggleMenu}><Link className="on-link" >Blog<MdExpandMore className={nonerotate} /></Link></li> : <li className="solid-on Header-mostrar"><Link to="/Blog">Blog</Link></li>}
                        {(props=== "Faq")       ? <li className="solid" onClick={toggleMenu}><Link className="on-link" >FAQ<MdExpandMore className={nonerotate} /></Link></li> : <li className="solid-on Header-mostrar"><Link to="/Faq">FAQ</Link></li>}
                        {(props=== "Products")  ? <li className="solid" onClick={toggleMenu}><Link className="on-link">Products<MdExpandMore className={nonerotate} /></Link></li> : <li className="solid-on Header-mostrar"><Link to="/Products">Products</Link></li>} 
                        {(props=== "Start")     ? <li className="solid" onClick={toggleMenu}><Link className="on-link" >Contact<MdExpandMore className={nonerotate} /></Link></li> : <li className="solid-on Header-mostrar"><Link to="/Start">Contact</Link></li>}
                </ul>


                <div className={visible}>
                    {(props=== "Home")      ?  <li className="solid-on" ><Link className="solid-on" >Home</Link></li>  : <li > <Link to="/Home">Home</Link></li>}
                    {(props=== "About")     ? <li className="solid-on"><Link className="solid-on" >About</Link></li>  : <li > <Link to="/About">About</Link></li>}
                    {(props=== "Blog")      ? <li className="solid-on"><Link className="solid-on" >Blog</Link></li> : <li ><Link to="/Blog">Blog</Link></li>}
                    {(props=== "Faq")       ? <li className="solid-on"><Link className="solid-on" >FAQ</Link></li> : <li ><Link to="/Faq">FAQ</Link></li>}
                    {(props=== "Products")  ? <li className="solid-on"><Link className="solid-on">Products</Link></li> : <li ><Link to="/Products">Products</Link></li>} 
                    {(props=== "Start")     ? <li className="solid-on"><Link className="solid-on" >Contact</Link></li> : <li ><Link to="/Start">Contact</Link></li>}
                </div>
                
                
            </nav>
        </header>
        </div>
        </>
    )
}
export default Header;