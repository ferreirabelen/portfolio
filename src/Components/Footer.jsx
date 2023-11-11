import { DivContainerFooter, Form, DivFinal, Titulo3 } from "../Styles/FooterComponent";
import link from "../img/link.png";
import github from "../img/github.svg";
import { useContext } from "react";
import { LenguageContext } from "../Components/Context/LenguageContext"; 

function Footer() {
    const {state} = useContext(LenguageContext);
    return (
        <>
        {
                state.lenguage
                ? (
                    <Titulo3>CONTACTO</Titulo3>
                )
                :(
                    <Titulo3>CONTACT</Titulo3>
                )
        }
        <DivContainerFooter id="contacto">
            <Form>
            {state.lenguage ?  <label>Nombre: </label> :  <label>Name: </label>}
            <input name="name" placeholder="Ingresar el nombre" type="text" />

            <label>Mail: </label>
            <input name="mail" placeholder="Ingresar email de contacto" type="email" />

            {state.lenguage ?  <label>Mensaje: </label> :  <label>Message: </label>}
            <textarea name="message" placeholder="Ingresar mensaje" />
            <button type="submit">Enviar</button>
            </Form>
        </DivContainerFooter>

        <DivFinal>
            {state.lenguage ? <p>2023 hecho por Belén Ferreira</p> : <p>2023 made by Belén Ferreira</p>}
            <div>
            <a href="https://www.linkedin.com/in/belenferreira21/" target="_blank" rel="noopener noreferrer">
                <img src={link} alt="" />
            </a>
            <a href="https://github.com/ferreirabelen" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="" />
            </a>
            </div>
        </DivFinal>
        </>
    );
}

export default Footer;

