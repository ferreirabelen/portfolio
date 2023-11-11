import {DivContainer,DIVTODO,Titulo3,DivSobreMi,DivEducacion,Span, Spanfecha,ButtonCV, Titulo4} from "../Styles/AboutMeComponent"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cvfront from "../img/cvfront.pdf";
import { faCheckCircle}from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react";
import { LenguageContext } from "../Components/Context/LenguageContext"; 

function AboutMe(){
    const {state} = useContext(LenguageContext);
    return(
        <>
        <DivContainer id="sobremi">
        {
            state.lenguage ? <Titulo3>SOBRE MÍ</Titulo3> : <Titulo3>ABOUT ME</Titulo3>
        }

        <DIVTODO>
            <DivSobreMi>
                {
                    state.lenguage ? <Titulo4>Información</Titulo4> : <Titulo4>Information</Titulo4>
                }
                {
                    state.lenguage ? (
                        <p> 
                        Me llamo Belén Ferreira y empecé a estudiar programación a final del 2021 de forma autonóma para luego formarme en 
                        la Carrera Certified Tech Developer en Digital House, a la par que hacia proyectos personales para perfeccionarme más.
                        <br /> 
                        Me considero una persona creativa y apasionada por lo que hago, por este motivo sigo aprendiendo para a futuro poder dar soluciones acordes a diferentes contextos.
                        <br />
                        Como Front-end developer JR busco insertarme en el mundo laboral en una empresa donde pueda
                        demostrar mis habilidades y a la vez nunca dejar de aprender para seguir potenciando mis conocimientos. 
                        <ButtonCV><a href={cvfront} download="cvfront.pdf" className="cv">Descargar CV</a></ButtonCV>
                        
                    </p>
                    )
                    :(
                        <p>
                        My name is Belén Ferreira and I started to study programming at the end of 2021 in an autonomous way to then train in the 
                        Certified Tech Developer Career at Digital House, at the same time that I was doing personal projects to improve myself more.
                        I consider myself a creative person and passionate about what I do, for this reason I keep learning to be able to provide 
                        solutions to different contexts in the future. 
                        <br />
                        As a Front-end developer JR I am looking for a job in a company where  
                        I can demonstrate my skills and at the same time never stop learning to continue to enhance my knowledge.
                        <ButtonCV><a href={cvfront} download="cvfront.pdf" className="cv">Download CV</a></ButtonCV>
                    </p>
                    )
                }
            </DivSobreMi>
            <DivEducacion>
                    {
                        state.lenguage ? <Titulo4>Educación</Titulo4> : <Titulo4>Education</Titulo4>
                    }
                    {
                        state.lenguage ? (
                            <>
                            <h5> 
                            <Span><FontAwesomeIcon icon={faCheckCircle}/></Span>
                            Certified tech developer en Digital House
                            </h5>
                            <Spanfecha>Octubre 2021 - Julio 2023</Spanfecha>
                            <h5> 
                                <Span><FontAwesomeIcon icon={faCheckCircle}/></Span>
                                Curso de React en Coder House
                            </h5>
                            <Spanfecha>Mayo 2022 - Julio 2022</Spanfecha>
                            </>
                        )
                        : (
                            <>
                            <h5> 
                            <Span><FontAwesomeIcon icon={faCheckCircle}/></Span>
                            Certified tech developer in Digital House
                            </h5>
                            <Spanfecha>October 2021 - July 2023</Spanfecha>
                            <h5> 
                                <Span><FontAwesomeIcon icon={faCheckCircle}/></Span>
                                React Course in Coder House
                            </h5>
                            <Spanfecha>May 2022 - July 2022</Spanfecha>
                            </>
                        )
                    }
            </DivEducacion>
        </DIVTODO>

            </DivContainer>
        </>

    )
}

export default AboutMe