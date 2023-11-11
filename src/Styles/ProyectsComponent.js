import styled, {keyframes} from "styled-components";
import Slider from "react-slick";

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

export const DIV = styled.div`
    background-color:rgb(245, 245, 245);
    height:670px;
    @media (max-width:1400px){
        //width:1400px;
    }
    @media (max-width:600px){
        //width:550px;
    }
`
export const DivContainer = styled.div`
    width:700px;
    height:460px;
    padding:14px;
    text-align:center;
    img{
        width:600px;
        margin-left:20px;
    }
    div{
        width:500px;
        height:80px;
        padding:5px;
        margin-left:70px;
    }
    a button{
        width:200px;
        font-size:18px;
        margin-right:20px;
        margin-top:35px;
        padding:5px;
        border-radius:20px;
        border:2px solid #6E3FCE;
        color:#6E3FCE;
        cursor:pointer;
        &:hover {
            background-color:#6E3FCE;
            color:white;
        }
    }
    @media (max-width:1400px){
        width:1400px;
    }
    @media (max-width:600px){
        width:550px;
        height:auto;
        div{
            width:auto;
            height:150px;
            padding:5px;
            margin-left:0px;
            p{
                font-size:18px;
            }
        }
        img{
            width:100%;
            margin-left:0px;
        }
        a button{
            margin-top:5px;
            width:100px;
            font-size:16px;
        }
    }
`
export const Titulo3 = styled.h3`
    animation: ${InUp} 2s ease-out;
    text-align: center; 
    font-size: 35px;
    padding:20px;
    padding-top:40px;
    diplay:block;
    color:#2a7c83;
    @media (max-width:600px){
        font-size:35px;
    }
`
export const SliderContainer = styled(Slider)`
    width:1400px;
    height:500px;
    margin-left:260px;
    @media (max-width:1400px){
        margin-left:0px;
    }
    @media (max-width:600px){
        width:auto;
    }
    
`