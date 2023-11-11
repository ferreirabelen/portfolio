import styled, {keyframes} from "styled-components";

const InUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(40px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Span = styled.span`
    font-size:25px;
    color:rgb(158, 111, 111);
    margin-right:10px;
    color:#6E3FCE;
`
export const Titulo3 = styled.h3`
    animation: ${InUp} 2s ease-out;
    text-align: center;
    font-size: 35px;
    padding:20px;
    padding-top:40px;
    display:block;
    color:#2a7c83;
    @media (max-width:600px){
        font-size:35px;
    }
`
export const Titulo4 = styled.h4`
    text-decoration: 4px underline;
    text-align: center;
    font-size: 25px;
    letter-spacing: 2px ;
    color:#6E3FCE;
    @media (max-width:600px){
        font-size:20px;
    }
`

export const DivContainer = styled.div`
    padding-bottom:30px;
    background-color:rgb(245, 245, 245);
    height:80vh;
    border-radius:20px;
    @media (max-width:1400px){
        background-color:rgb(245, 245, 245);
    }
    @media (max-width:600px){
        height:auto;
        margin-top:300px;
    }
`
export const DIVTODO = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    @media (max-width:600px){
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:100%;
        height:auto;
    }
`
export const DivSobreMi= styled.div`
    width : 500px;
    height:470px;
    font-size:16px;
    line-height: 1.5;
    background-color:white;
    padding:15px;
    background-color: rgb(144, 195, 169);
    border-radius:20px;
    box-shadow: 5px 3px 3px grey;
    p{
        font-size:18px;
        color:white;
    }
    @media (max-width:600px){
        width:80%;
        margin-bottom:10px;
        height:auto;
        p{
            font-size:18px;
            padding:5px;
        }
    }
`

export const ButtonCV = styled.button`
    background-color:#6E3FCE;
    padding:10px;
    margin-top : 20px;
    display:block;
    width: 150px;
    font-size:14px;
    border-radius : 20px;
    cursor:pointer;
    a{
        color:white;
        text-decoration:none;
    }
    @media (max-width:600px){
        width:50%;
        height:auto;
        a{
            font-size:16px;
        }
    }
`

export const DivEducacion = styled.div`
    width : 500px;
    height:470px;
    font-size:16px;
    padding:15px;
    color:white;
    background-color: rgb(144, 195, 169);
    border-radius:20px;
    box-shadow: 5px 3px 3px grey;
    h5{
        font-size:17px;
        margin-bottom:20px;
    }
    @media (max-width:600px){
        width:80%;
        padding-bottom:70px;
        height:auto;
        h5{
            font-size:18px;
            padding:5px;
        }
    }
`
export const Spanfecha = styled.span`
    margin-left:35px;
    @media (max-width:600px){
        font-size:20px;
    }
`