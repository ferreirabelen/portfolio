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
export const Titulo3 = styled.h3`
    animation: ${InUp} 2s ease-out;
    text-align: center;
    font-size: 35px;
    padding:20px;
    padding-top:40px;
    color:#2a7c83;
    @media (max-width:600px){
        font-size:35px;
    }
`
export const DIV = styled.div`
    @media (max-width:1400px){
        //width:1400px;
    }
    @media (max-width:600px){
        //width:550px;
    }
`
export const DivContainer = styled.div`
    display:flex;
    justify-content:center;
    height:400px;
    h2{
        color:white;
    }
    img{
        width:120px;
    }
    div{
        text-align:center;
        margin-right:20px;
        padding:20px;
    }
    @media (max-width:600px){
        height:auto;
        flex-wrap:wrap;
        img{
            width:80px;
        }
    }
`