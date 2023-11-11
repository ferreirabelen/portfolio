import {Titulo3,DIV,DivContainer,SliderContainer} from "../Styles/ProyectsComponent"
import portfolio from "../img/portfolio.png"
import bamedia from "../img/bamedia.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import { LenguageContext } from "../Components/Context/LenguageContext"; 

const proyectos = [
    {
        id:1,
        img: bamedia,
        repo: "https://github.com/lucastgl/ba.media-website",
        demo : "https://cards-superheroes.netlify.app/",
        description: "Ba-Media fue mi primer proyecto freelance, utilicé herramientras como React + Vite, y en los estilos Styled-Component, fue un proyecto de un mes de trabajo."
    },
    {
        id:2,
        img: portfolio,
        repo:"https://github.com/ferreirabelen/colors",
        demo : "https://colors-a883c8.netlify.app/",
        description: "Mi portfolio personal"
    },
    {
        id:3,
        img: bamedia,
        repo : "https://github.com/ferreirabelen/portfolio",
        demo : "https://belenferreiraportfolio.netlify.app/",
        description: "loremloremlorem"
    }

]
function Proyects(){
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        speed: 500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    
    const {state} = useContext(LenguageContext);
    return(
        <>
            <DIV id="proyectos">
            {state.lenguage ?  <Titulo3>PROYECTOS</Titulo3> :  <Titulo3>PROYECTS</Titulo3>}
            <SliderContainer {...settings}>
            {
                proyectos.map((proyecto) =>(
                        <DivContainer key={proyecto.id}>
                            
                            
                            <img src={proyecto.img} alt="" />
                            <div>
                                <p>{proyecto.description}</p>
                            </div>
                            <a href={proyecto.repo} target="_black"><button>Repositorio Github</button></a>
                            <a href={proyecto.demo} target="_black"><button>Repositorio Pagina</button></a>
                            
                        </DivContainer>
                ))
            }
            </SliderContainer>
            </DIV>
        </>
    )
}

export default Proyects