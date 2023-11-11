import {Titulo3,DIV,DivContainer} from "../Styles/TecnologiesConponent"
import html from "../img/html.jpg"
import css from "../img/csss.png"
import react from "../img/react.png"
import styled from "../img/styled.png"
import git from "../img/git.png"
import github from "../img/github.svg"
import js from "../img/js.png"
import { useContext } from "react";
import { LenguageContext } from "../Components/Context/LenguageContext"; 

function Tecnologies(){
    const {state} = useContext(LenguageContext);

    return(
        <DIV>
        {state.lenguage ? <Titulo3 id="skills">TECNOLOGIAS</Titulo3> : <Titulo3 id="skills">TECNOLOGIES</Titulo3>}
        <DivContainer>
            <div>
            <h2>Html</h2>
            <img src={html} alt="" />
            </div>

            <div>
            <h2>Css</h2>
            <img src={css} alt="" />
            </div>

            <div>
            <h2>JavaScript</h2>
            <img src={js} alt="" />
            </div>

            <div>
            <h2>React</h2>
            <img src={react} alt="" />
            </div>

            <div>
            <h2>Styled-component</h2>
            <img src={styled} alt="" />
            </div>

            <div>
            <h2>Git</h2>
            <img src={git} alt="" />
            </div>

            <div>
            <h2>GitHub</h2>
            <img src={github} alt="" />
            </div>

        </DivContainer>
        </DIV>
    )
}

export default Tecnologies