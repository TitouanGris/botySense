import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Shampooings from "./pages/Shampooings";
import Creme from "./pages/Creme";
import Coloration from "./pages/Coloration";
import Rouge from "./pages/Rouge";
import ProductDetails from "./pages/ProductDetails";
import Accueil from "./pages/Accueil";
import "./sass/_index.scss";

const products = [
  {
    id: 1,
    nom: "Crème hydratante",
    categorie: "Crème de peau",
    description: "Hydrate la peau en profondeur, la laissant douce et souple.",
    prix: 12.99,
    image: "/Creme_de_peau/0c498423-cd31-414b-b5ac-65e198a24176.webp",
  },
  {
    id: 2,
    nom: "Rouge à lèvres rouge vif",
    categorie: "Rouge à lèvre",
    description: "Donne à vos lèvres une couleur éclatante et durable.",
    prix: 6.99,
    image: "/Rouge_a_levres/688f3f10-59ee-4250-8151-8d19e3c61c41.webp",
  },
  {
    id: 3,
    nom: "Coloration intense - Noir ébène",
    categorie: "Coloration",
    description:
      "Obtenez une couleur noire intense pour vos cheveux avec cette coloration.",
    prix: 9.99,
    image: "/Coloration/35cf1ca2-0ab2-4f88-827d-e444a0750f88.webp",
  },
  {
    id: 4,
    nom: "Shampooing nourrissant à l'huile d'argan",
    categorie: "Shampooing",
    description:
      "Nettoie en douceur tout en nourrissant les cheveux avec de l'huile d'argan.",
    prix: 4.99,
    image: "/Shampoing/153a114c-f8c9-416e-84bc-10b0f7ccb78a.webp",
  },
  {
    id: 5,
    nom: "Lotion tonique rafraîchissante",
    categorie: "Crème de peau",
    description:
      "Tonifie et rafraîchit la peau tout en laissant une sensation agréable.",
    prix: 9.99,
    image: "/Creme_de_peau/58902492-3187-4db8-affa-4b6bd4221621.webp",
  },
  {
    id: 6,
    nom: "Rouge à lèvres rose poudré",
    categorie: "Rouge à lèvre",
    description:
      "Ajoute une touche délicate de rose à vos lèvres avec une finition satinée.",
    prix: 6.99,
    image: "/Rouge_a_levres/8e4ee5ca-feae-40cb-a76f-0540f8778bf6.webp",
  },
  {
    id: 7,
    nom: "Coloration vibrante - Rouge flamboyant",
    categorie: "Coloration",
    description:
      "Transformez vos cheveux avec une couleur rouge flamboyante et vibrante.",
    prix: 9.99,
    image: "/Coloration/92ec640f-b65f-4eca-87d8-d986661370e7.webp",
  },
  {
    id: 8,
    nom: "Shampooing fortifiant à la kératine",
    categorie: "Shampooing",
    description:
      "Renforce les cheveux en profondeur grâce à la kératine, laissant des cheveux sains et brillants.",
    prix: 4.99,
    image: "/Shampoing/7ced709b-9271-4071-8172-79d67df6ca9c.webp",
  },
  {
    id: 9,
    nom: "Soin hydratant intensif",
    categorie: "Crème de peau",
    description:
      "Un traitement intensif pour hydrater et régénérer la peau en profondeur.",
    prix: 14.99,
    image: "/Creme_de_peau/285e98a0-fed4-41a8-a07a-302eef102165.webp",
  },
  {
    id: 10,
    nom: "Rouge à lèvres mat - Nude élégant",
    categorie: "Rouge à lèvre",
    description:
      "Offrez à vos lèvres une teinte nude élégante avec une finition mate longue tenue.",
    prix: 6.99,
    image: "/Rouge_a_levres/5b50398e-c872-4740-b3ee-8e80360d87bd.webp",
  },
  {
    id: 11,
    nom: "Coloration naturelle - Brun chocolat",
    categorie: "Coloration",
    description:
      "Une coloration naturelle qui donne à vos cheveux une teinte brun chocolat séduisante.",
    prix: 9.99,
    image: "/Coloration/17b8e973-7530-4bba-8cc7-c98f27c1b6f7.webp",
  },
  {
    id: 12,
    nom: "Shampooing volumisant à la camomille",
    categorie: "Shampooing",
    description:
      "Apporte du volume aux cheveux fins tout en apaisant le cuir chevelu avec de la camomille.",
    prix: 4.99,
    image: "/Shampoing/53865e39-f423-4f57-a6d7-07456725f33f.webp",
  },
  {
    id: 13,
    nom: "Crème anti-rides",
    categorie: "Crème de peau",
    description:
      "Réduit l'apparence des rides et améliore l'élasticité de la peau.",
    prix: 12.99,
    image: "/Creme_de_peau/a9b46408-dae4-4014-aebe-6012395b891f.webp",
  },
  {
    id: 14,
    nom: "Rouge à lèvres corail éclatant",
    categorie: "Rouge à lèvre",
    description:
      "Donne à vos lèvres une teinte corail éclatante pour un look audacieux.",
    prix: 6.99,
    image: "/Rouge_a_levres/0f31c2ee-689a-47b7-9906-f932523ff3ce.webp",
  },
  {
    id: 15,
    nom: "Coloration douce - Blond doré",
    categorie: "Coloration",
    description:
      "Éclaircit en douceur vos cheveux avec une teinte blond doré lumineux.",
    prix: 9.99,
    image: "/Coloration/b111dfeb-b83b-4540-8534-7952ce9e96f6.webp",
  },
  {
    id: 16,
    nom: "Shampooing réparateur à l'huile d'olive",
    categorie: "Shampooing",
    description:
      "Répare les cheveux abîmés en profondeur grâce à l'huile d'olive nourrissante.",
    prix: 4.99,
    image: "/Shampoing/3dfdb08f-c513-4e12-933c-54e051979c40.webp",
  },
  {
    id: 17,
    nom: "Masque hydratant nuit",
    categorie: "Crème de peau",
    description:
      "Un masque nourrissant à laisser agir toute la nuit pour une peau hydratée au réveil.",
    prix: 14.99,
    image: "/Creme_de_peau/d33fefba-5170-4a85-ae63-e3b4497ad440.webp",
  },
  {
    id: 18,
    nom: "Rouge à lèvres mauve mystique",
    categorie: "Rouge à lèvre",
    description:
      "Ajoutez une touche de mystère avec ce rouge à lèvres mauve aux nuances envoûtantes.",
    prix: 6.99,
    image: "/Rouge_a_levres/78b057a6-8f7b-4664-bcce-e8afb174dc6e.webp",
  },
  {
    id: 19,
    nom: "Coloration auburn intense",
    categorie: "Coloration",
    description:
      "Obtenez une coloration auburn intense pour une transformation capillaire audacieuse.",
    prix: 9.99,
    image: "/Coloration/f024fe5f-a497-4126-b561-5d52586434c9.webp",
  },
  {
    id: 20,
    nom: "Shampooing apaisant à la menthe",
    categorie: "Shampooing",
    description:
      "Calme le cuir chevelu et rafraîchit les cheveux grâce à l'extrait de menthe apaisant.",
    prix: 4.99,
    image: "/Shampoing/d9957a91-f82c-42ec-8493-8f3c627b9494.webp",
  },
  {
    id: 21,
    nom: "Sérum anti-taches",
    categorie: "Crème de peau",
    description:
      "Atténue les taches sombres et uniformise le teint pour une peau radieuse.",
    prix: 12.99,
    image: "/Creme_de_peau/50e617c2-23db-4604-8d83-601bd1928462.webp",
  },
  {
    id: 22,
    nom: "Rouge à lèvres nude subtil",
    categorie: "Rouge à lèvre",
    description:
      "Un nude subtil qui ajoute une touche de couleur naturelle à vos lèvres.",
    prix: 6.99,
    image: "/Rouge_a_levres/b5baddfb-0738-40b3-95b7-4bad0ae6edb0.webp",
  },
  {
    id: 23,
    nom: "Coloration cuivrée flamboyante",
    categorie: "Coloration",
    description:
      "Optez pour une coloration cuivrée flamboyante pour des cheveux vibrants et audacieux.",
    prix: 9.99,
    image: "/Coloration/c8a699b1-2e5d-4f50-afbc-294acc988ea6.webp",
  },
  {
    id: 24,
    nom: "Shampooing éclatant à la grenade",
    categorie: "Shampooing",
    description:
      "Apporte de l'éclat aux cheveux tout en les nourrissant avec l'extrait de grenade revitalisant.",
    prix: 4.99,
    image: "/Shampooing/44c07866-4d5a-40a0-9f86-cf24e5f43ab2.webp",
  },
  {
    id: 25,
    nom: "Crème anti-acné",
    categorie: "Crème de peau",
    description:
      "Combat les imperfections et l'acné pour une peau plus lisse et éclatante.",
    prix: 12.99,
    image: "/Creme_de_peau/aeac20ab-1a22-421c-906f-0662a67a9c59.webp",
  },
  {
    id: 26,
    nom: "Rouge à lèvres Bordeaux chic",
    categorie: "Rouge à lèvre",
    description:
      "Une teinte Bordeaux chic pour des lèvres élégantes et sophistiquées.",
    prix: 6.99,
    image: "/Rouge_a_levres/03554561-0d71-43f3-8952-b13cc2845b5b.webp",
  },
  {
    id: 27,
    nom: "Coloration pastel - Rose tendre",
    categorie: "Coloration",
    description:
      "Adoptez une coloration pastel rose tendre pour une apparence douce et moderne.",
    prix: 9.99,
    image: "/Coloration/90a6a8c4-ad8a-449c-affc-3d542209734f.webp",
  },
  {
    id: 28,
    nom: "Shampooing fortifiant à la biotine",
    categorie: "Shampooing",
    description:
      "Renforce les cheveux fragiles avec de la biotine, favorisant la croissance et la santé capillaire.",
    prix: 4.99,
    image: "/Shampoing/2e72c05d-e55a-4922-802f-ed2b000192bd.webp",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Accueil />,
      },
      {
        path: "/Shampooings",
        element: <Shampooings products={products} />,
      },
      {
        path: "/Products/:id",
        element: <ProductDetails products={products} />,
      },
      {
        path: "/Cremes",
        element: <Creme products={products} />,
      },
      {
        path: "/Colorations",
        element: <Coloration products={products} />,
      },
      {
        path: "/Rouges",
        element: <Rouge products={products} />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
