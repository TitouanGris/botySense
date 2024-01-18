import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Slider() {
  const baseUrl = "http://react-responsive-carousel.js.org/assets/";
  const datas = [
    {
      id: 1,
      image: `${baseUrl}1.jpeg`,
      title: "Titre du slider 1",
      text: "Description de votre premier slide",
    },
    {
      id: 2,
      image: `${baseUrl}5.jpeg`,
      title: "Titre du slider 2",
      text: `Lorem blablabla...`,
    },
    {
      id: 3,
      image: `${baseUrl}2.jpeg`,
      title: "Titre du slider 3",
      text: `Lorem blablabla...`,
    },
  ];

  return (
    <div>
      <h1 className="title__slide">Nos Incontournables</h1>
      <Carousel>
        {datas.map((slide) => (
          <div className="slide" key={slide.id}>
            <img className="slideimage" src={slide.image} alt="" />
            <div className="overlay">
              <h2 className="overlay__title">{slide.title}</h2>
              <p className="overlay__text">{slide.text}</p>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="tendance">
        <div className="Maquillage">
          <img src="https://via.placeholder.com/300x300" alt="" />
          <h4>MAQUILLAGE</h4>
        </div>
        <div className="soin">
          <img src="https://via.placeholder.com/300x300" alt="" />
          <h4>SOIN DE LA PEAU</h4>
        </div>
        <div className="coloration">
          <img src="https://via.placeholder.com/300x300" alt="" />
          <h4>COLORATION</h4>
        </div>
        <div className="cheveux">
          <img src="https://via.placeholder.com/300x300" alt="" />
          <h4>CHEVEUX</h4>
        </div>
      </div>
    </div>
  );
}

export default Slider;
