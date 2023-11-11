import {Nav,ButtonHamburger, Select} from "../Styles/NavComponent";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { useContext} from "react";
import { LenguageContext } from "../Components/Context/LenguageContext"; 

function NavBar(){

    const { state, dispatch } = useContext(LenguageContext);
    const toggleLanguage = () => {
        dispatch({ type: 'lenguage' });
    };

    const [click, setClick] = useState(false);
    const ChangeClick = () => {
        setClick(!click)
    };
    return(
        <Nav click={click}>
        <ul>
            {
                state.lenguage
                ? (
                    <>
                    <li> <a href="#sobremi">︽ Sobre mi</a></li>
                    <li><a href="#skills">♢ Skills</a></li>
                    <li><a href="#proyectos">❃ Proyectos</a></li>
                    <li><a href="#contacto">✉ Contacto</a></li>
                    </>
                )
                :(
                    <>
                    <li> <a href="#sobremi">︽ About Me</a></li>
                    <li><a href="#skills">♢ Skills</a></li>
                    <li><a href="#proyectos">❃ Proyects</a></li>
                    <li><a href="#contacto">✉ Contact</a></li>
                    </>
                )
        }
        </ul>
        <ButtonHamburger onClick={() => ChangeClick()} >
            <FontAwesomeIcon icon={faBars} />
            </ButtonHamburger>
            <Select onChange={toggleLanguage}  onClick={()=>{state.language ? 'ES' : 'EN'}}>
                {
                    state.language ? (
                        <>
                        <option value="EN" >EN</option>
                        <option value="ES" >ES</option>
                        </>
                    ) 
                    : (
                        <>
                        <option value="ES" >ES</option>
                        <option value="EN" >EN</option>
                        </>
                    )
                }
            </Select>
        </Nav>
    )
}
export default NavBar
