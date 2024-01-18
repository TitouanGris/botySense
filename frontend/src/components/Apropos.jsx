import GifPlayer from "react-gif-player";

function Apropos() {
  return (
    <div className="apropos">
      <div className="title-description">
        <h2 className="titledescription">A propos</h2>
        <div className="description-container">
          <div className="content">
            <img src="./images/paragraphe.svg" alt="" className="image" />
            <div className="paragraphe">
              {" "}
              <p>
                Bienvenue sur BotySense, votre destination de choix pour tout ce
                qui concerne l'univers captivant de la beauté et de la
                cosmétique signée Oreal. Chez BotySense, nous sommes déterminés
                à vous découvrir votre propre sens de la beauté et de
                l'élégance, tout en mettant à votre disposition une gamme
                exclusive de produits de qualité supérieure. Explorez notre
                catalogue varié et laissez-vous séduire par notre sélection
                soigneusement choisie de produits Oreal. Que vous recherchiez
                des produits de maquillage pour sublimer votre apparence, des
                soins de la peau pour une peau éclatante, des produits
                capillaires pour des cheveux magnifiques ou des parfums
                envoûtants pour une touche de glamour, BotySense a tout ce qu'il
                vous faut.
              </p>
            </div>
          </div>
        </div>
        <div className="img-container1">
          <img
            src="./images/citationloreal.png"
            alt="citations"
            className="img-citation"
          />
          <img
            className="gif"
            src="./images/Neutral Modern Skincare Instagram Reels.gif"
            alt="Votre Vidéo GIF"
          />
        </div>
        <p className="marques">Nos Marques</p>
        <div className="img-container2">
          <img
            src="./images/marqueloreal.png"
            alt="nos marques"
            className="img-marques"
          />
        </div>
        {/* <p className="thirdparagraph">
            Profitez de promotions exclusives, de réductions spéciales et
            d'offres promotionnelles régulières, ainsi que de nos options de
            livraison rapide et sécurisée pour recevoir vos produits l'Oreal
            préférés chez vous. BotySense est plus qu'un simple site de
            e-commerce, c'est un lieu où la beauté devient une expérience
            personnelle et inspirante. <br />
            Rejoignez-nous dans l'univers BotySense et découvrez une nouvelle
            dimension de la beauté. Nous sommes ravis de vous accompagner dans
            votre voyage vers la confiance en soi et l'expression de votre style
            unique. Merci de faire confiance à BotySense pour votre bien-être et
            votre beauté.
          </p> */}
      </div>
    </div>
  );
}

export default Apropos;
