
import {Presentacion,H3, DivPresentacion} from "../Styles/PresentationComponent"
import link from "../img/link.png"
import github from "../img/github.svg"
import { useContext } from "react";
import { LenguageContext } from "../Components/Context/LenguageContext"; 
function Presentation(){
    const {state} = useContext(LenguageContext);
    return(
        <Presentacion>
        <DivPresentacion>
            <h1>Hello world! </h1>
            {
                state.lenguage ? <h2>Soy Belén Ferreira</h2> : <h2>Im Belén Ferreira</h2> 
            }
            <H3>FRONTEND DEVELOPER JR .<span>&#160;</span></H3>
            {
                state.lenguage  ? (
                    <p>Estudiante de programación con enfoque en el Desarrollo Web Frontend, como amante de la tecnologia estoy en busqueda de mi 
                    primer empleo It para seguir formandome profesionalmente y potenciar mis conocimientos.</p>
                )
                :(
                    <p>Programming student with a focus on Frontend Web Development, as a technology lover I am looking for my first It job to
                    continue my professional training and enhance my knowledge.</p>
                )
            }
            <a href="https://www.linkedin.com/in/belenferreira21/" target="_black">
                <img src={link} alt="" /></a>

            <a href="https://github.com/ferreirabelen" target="_black"> 
                <img src={github} alt="" /></a>
        </DivPresentacion>
    </Presentacion> 

    )
}

export default Presentation