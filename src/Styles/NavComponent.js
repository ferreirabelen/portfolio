
import styled from "styled-components";

export const Titulo3 = styled.h3`
    text-align: center;
    font-size: 30px;
    padding:20px;
    padding-top:40px;
    color:#2a7c83;
`
export const ButtonHamburger = styled.div`
    font-size:20px;
    display:none;
    cursor: pointer;
    @media (max-width:600px){
        display:flex;
        justify-content: end;
        align-items: center;
        margin-left:300px;
        margin-top:10px;
    }
`
export const Nav = styled.nav`
    z-index:999;
    display: flex;
    justify-content: center;
    position:fixed;
    top:0;
    width: 100%;
    right:0;
    background-color: rgb(144, 195, 169);
    ul{
        display: flex;
        list-style: none;
        @media (max-width:600px){
            width:100%;
            height:100vh;
            position:absolute;
            top:20px;
            left:${({click}) => click ? 0 : "-120%"};
            flex-direction:column;
            align-items:center;
            justify-content:center;
            transition: 0.5s all ease-in;
            background-color: rgba(50, 168, 130, 1);
        }
    }

    li{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 240px;
        text-decoration: none;
        font-size: 17px;
        letter-spacing: 1px ;
        color: white;
        &:hover {
            box-shadow: inset 0 0 1px #6E3FCE; // Sombra de borde al hacer hover
        }
        @media (max-width:600px){
            width:100%;
            height:80px;
        }
    }
    a{
        color:white;
        text-decoration:none;
        &:hover {
            color:#6E3FCE;
        }
    }
`

export const Select = styled.select`
    font-size:15px;
    border: none;
    width:90px;
    color:white;
    background-color: rgb(144, 195, 169);
    position:static;
    margin-left:100px;
    option{
        font-size:14px;
    }

`
