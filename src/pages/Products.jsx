import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import '../css/Page/Products.css'
import { TiEyeOutline } from 'react-icons/ti';
import {PiPlantLight, PiCookingPotDuotone} from 'react-icons/pi';
import {BsRobot} from 'react-icons/bs'
import {FaOpencart} from 'react-icons/fa'


function Start(){
    return(
        <>
        <Header props={"Products"}></Header>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <section class="Product-Section1">
            <div class="Product-Section1-content">
                {/***  DESDE AQUI EMPIEZA LOS CARD */}
                <div className="card animate__fadeInUp animate__animated">
                    <div className="image"></div>
                    <p class="title">Alie &nbsp; <PiPlantLight></PiPlantLight> </p>
                    <p class="sub-text">
                        Alie is a plant that save the life of world and reduce..
                    </p>
                    <br/>
                    <p class="text">
                        La planta autónoma, una maravilla verde, se carga sola y produce energía renovable. Una sinergia perfecta entre naturaleza y tecnología para un futuro más sostenible y autosuficiente.
                    </p>
                    <div className="button"> 
                        <button className="ver">
                            <TiEyeOutline></TiEyeOutline> &nbsp; See
                        </button>
                        <button class="tiempo">
                            hace 3 dias
                        </button>
                    </div>
                </div>
                <div className="card animate__fadeInUp animate__animated">
                    <div className="image"></div>
                    <p class="title">FutureX &nbsp; <PiCookingPotDuotone></PiCookingPotDuotone></p>
                    <p class="sub-text">
                        This firt cook that make your have breckfast.
                    </p>
                    <br/>
                    <p class="text">
                        Bienvenidos a la cocina del futuro, donde la tecnología y el arte culinario se fusionan. Esta cocina autónoma anticipa tus gustos y prepara almuerzos exquisitos con precisión y rapidez.
                    </p>
                    <div className="button"> 
                        <button className="ver">
                            <TiEyeOutline></TiEyeOutline> &nbsp; See
                        </button>
                        <button class="tiempo">
                            hace 5 meses
                        </button>
                    </div>
                </div>
                <div className="card animate__fadeInUp animate__animated">
                    <div className="image"></div>
                    <p class="title">Mattel  &nbsp;<BsRobot></BsRobot></p>
                    <p class="sub-text">
                        Project execute fot clear all city on the world
                    </p>
                    <br/>
                    <p class="text">
                        Entra al futuro de la limpieza con nuestro robot revolucionario. Con tecnología avanzada, este incansable limpiador automatizado barre y recoge residuos, transformando tu espacio en un oasis impecable.
                    </p>
                    <div className="button"> 
                        <button className="ver">
                            <TiEyeOutline></TiEyeOutline> &nbsp; See
                        </button>
                        <button class="tiempo">
                            hace 5 meses
                        </button>
                    </div>
                </div>
                <div className="card animate__fadeInUp animate__animated">
                    <div className="image"></div>
                    <p class="title">Flycar &nbsp; <FaOpencart></FaOpencart> </p>
                    <p class="sub-text">
                        Flycar is ultimate product, the velocity aprox is 130/km in space.
                    </p>
                    <br/>
                    <p class="text">
                        Embárcate en la era de la elevación con nuestro carro volador. La fusión perfecta entre automovilismo y aviación, este vehículo redefine la movilidad, llevándote a nuevos horizontes con gracia y velocidad.
                    </p>
                    <div className="button"> 
                        <button className="ver">
                            <TiEyeOutline></TiEyeOutline> &nbsp; See
                        </button>
                        <button class="tiempo">
                            hace 5 meses
                        </button>
                    </div>
                </div>
            
            </div>
        </section>
        <Footer></Footer>
        </>
    )
}
export default Start;