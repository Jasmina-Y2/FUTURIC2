import "../css/App.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import '../css/Page/About.css'
import { Link } from "react-router-dom";
import { LiaArrowRightSolid } from 'react-icons/lia';

function Home(){
    return(
        <>
        <Header props={"About"} ></Header>
        <br/>
        <br/>
        <br/>
        <br/>
        <section className="About-Section1" >
            <h1 className="animate__fadeInDown animate__animated">Desarrolla Proyectos completos</h1>
            <p className="animate__fadeInDown animate__animated">
            Esta es una lista de Proyectos completos que puedes desarrollar para ganar experiencia y mejorar tus habilidades como programador.
            </p>
            <div className="button"> 
                <button>
                    Apoyar a Futuric
                </button>
                <Link to="/Products">Proximamente<LiaArrowRightSolid></LiaArrowRightSolid></Link>
            </div>
        </section>
        <Footer></Footer>
        </>
    )
}
export default Home