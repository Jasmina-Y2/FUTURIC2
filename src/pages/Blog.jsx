import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import '../css/Page/Blog.css'

import { SiDeno } from 'react-icons/si';
import { BsCheckAll } from 'react-icons/bs';
import {FaReact} from 'react-icons/fa'
import {BiLogoVuejs} from 'react-icons/bi'

function Start(){
    return(
        <>
        <Header props={"Blog"}></Header>
        <br/>
        <br/>
        <br/>
        <br/>
        <section className="Blog-Section1" >
            <div className="Blog-Section1-Content">
                <div className="text-all">
                    
                <h1>Deno Revolution World</h1>

                <p className="sub-title">The spiritual successor to NodeJS</p>
                <p className="autor">
                    Autor: Futuric
                </p>
                <div className="img">

                </div>
                <div className="text">
                    <p className="text-special">What Makes Deno Special?</p>
                    <br/>
                    <p>
                        1. Dating back to Node.js creator Ryan Dahl’s 2018 presentation 10 Things I Regret about Node.js, the programming community was anticipating his latest creation. Fast forward to May 2020 and Deno — A secure runtime for JavaScript and TypeScript — has released version 1.0.
                    <br/>
                    <br/>
                        
                        2. Node.js as a JS runtime environment has become an absolute backbone for technology stacks. Any time you see the letter “N” in a tech stack, such as MEAN, that’s most likely Node.
                    <br/>
                    <br/>
                        3. With great success comes longevity and with longevity comes legacy challenges, some of which are too deeply ingrained in the architecture to be addressed.
                    <br/>
                    <br/>
                        4. This is where Deno comes in. If you’re curious about the language, as a seasoned developer or a fledgling self-starter who learned JavaScript, it’s undeniably exciting to get started on something that’s this new.
                    <br/>
                    <br/>
                        5. In this article, we’ll introduce what makes Deno special, figure out if Deno is right for you, and walk through how to get started with your first Deno script.
                    </p>
                </div>
                <br/>
                <br/>
                <p className="sub-title">Thank fot read ! </p>
                </div>
            </div>
            
            <div className="Blog-Section1-static">
                {/*** DESDE AQUI ESTA UN CARD */}
                <div className="Blog-card animate__shakeX animate__animated">
                    <h3><SiDeno></SiDeno> &nbsp; Deno Revolution World</h3>
                    <div>
                        <p>12 DIC   >>   5min read </p>
                        <button className="purple">WATCHING</button>
                    </div>
                    <p className="autor">
                        Autor: Futuric <BsCheckAll></BsCheckAll>
                    </p>
                    <p>
                        Deno is a JavaScript server language built for TypeScript and designed to improve on shortcomings that exist in Node.
                        
                    </p>
                </div>
                <div className="Blog-card animate__shakeX animate__animated">
                    <h3><BiLogoVuejs></BiLogoVuejs> &nbsp; Vue is faster that Deno</h3>
                    <div>
                        <p>26 FEB   >>   1min read </p>
                        <button>Published</button>
                    </div>
                    <p className="autor">
                        Autor: Futuric <BsCheckAll></BsCheckAll>
                    </p>
                    <p>
                        Why Vue Get Started Install. Special Sponsor. Approachable. Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.      
                    </p>
                </div>
                <div className="Blog-card animate__shakeX animate__animated">
                    <h3><FaReact></FaReact> &nbsp; React to Reactor</h3>
                    <div>
                        <p>12 DIC   >>   5min read </p>
                        <button>Published</button>
                    </div>
                    <p className="autor">
                        Autor: Medium <BsCheckAll></BsCheckAll>
                    </p>
                    <p>
                        When it comes to building user interfaces, React and SolidJS are two powerful contenders each with its unique approach to syntax, reactivity, and state management.
                        
                    </p>
                </div>
               
            </div>
        
        </section>
        </>
    )
}
export default Start;