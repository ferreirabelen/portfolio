import styled , {keyframes}from "styled-components";

export const Presentacion = styled.div`
    height: 90vh;
    display: flex;
    @media (max-width:900px){
        display:flex;
        justify-content:center;
        align-items:center;
    }
    @media (max-width:600px){
        //width: max-content;
        //height:100vh;
    }
`

export const DivPresentacion = styled.div`
    margin-top : 230px;
    margin-left:400px;
    padding: 10px;
    width: 800px;
    height: 300px;
    h1{
        color:white;
    }
    h2{
        font-size:40px;
        color:white;
    }
    p{
        font-size: 18px;
        line-height: 1.7;
        color:white;
        display: inline-block;
    }   
    img{
        width:30px;
        margin-left:20px;
    }
    @media (max-width:1400px){
        width:1000px;
        height:60vh;
        margin-left:0px;
        margin-top : 130px;
    }
    @media (max-width:600px){
        width:500px;
        h2{
            font-size:25px;
        }
        p{
            font-size: 20px;
            line-height: 1.7;
            display: inline-block;
        }
    }
`
const escritura = keyframes`
    from {
        width:100%;
    }
    to{
        width:0px;
    }
`
export const H3 = styled.h3`
    font-size:25px;
    color:#6E3FCE;
    float:left;
    position:relative;
    span{
        position:absolute;
        right:0;
        width:0;
        background-color: rgb(144, 195, 169);
        border-left:1px solid #000;
        animation: ${escritura} 5s infinite alternate steps(22);
    }
    @media (max-width:600px){
        font-size:20px;
    }

`
