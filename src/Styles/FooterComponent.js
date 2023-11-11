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
    font-size: 30px;
    padding:20px;
    padding-top:40px;
    color:#2a7c83;
    @media (max-width:1400px){
        width:1400px;
    }
    @media (max-width:600px){
        width:auto;
        padding:0px;
        padding-top:20px;
        padding-bottom:20px;
    }
`

export const DivContainerFooter = styled.div`
    height:500px;
    display:flex;
    justify-content:center;
    p{
        display:block;
    }
    @media (max-width:1400px){
        //width:1400px;
    }
    @media (max-width:600px){
        //width:550px;
    }
`

export const Form = styled.form`
    border-radius:8px;
    display:flex;
    flex-direction:column;
    background-color:white;
    height:400px;
    width:800px;
    padding:20px;
    label{
        margin-bottom:9px;
    }
    input{
        padding:10px;
        margin-bottom:30px;
    }
    textarea{
        height:300px;   
    }
    button{
        margin-top:30px;
        border-radius:8px;
        width:120px;
        padding:6px;
        margin-left:340px;
        cursor:pointer;
        border:2px solid #6E3FCE;
        color:#6E3FCE;
        font-size:15px;
        &:hover {
            background-color:#6E3FCE;
            color:white;
        }
    }
    @media (max-width:600px){
        width:80%;
        button{
            margin-left:0px;
        }
    }

`
export const DivFinal = styled.div`
    height:40px;
    display:flex;
    justify-content:space-between;
    padding:10px;
    img{
        width:35px;
        margin-right:30px;
    }
    p{
        font-size:18px;
        margin-left:20px;
        color:#6E3FCE;
    }
    @media (max-width:1400px){
        //width:1400px;
    }
    @media (max-width:600px){
        //width:550px;
        flex-wrap:wrap;
        justify-content:center;
    }
    
`