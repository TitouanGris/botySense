function Corbeille() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Panier E-commerce</title>
      <link rel="stylesheet" />
      <main className="container">
        <div className="grid">
          <section>
            <div className="title_basket">
              <h2>Panier</h2>
              <h3>Vos articles sélectionnés</h3>
            </div>
            <div className="grid">
              <article>
                <figure>
                  <img
                    src="https://source.unsplash.com/random/200x200"
                    alt="Article 1"
                  />
                  <figcaption>Article 1</figcaption>
                </figure>
                <p>Description de l'article 1. Prix: 20€</p>
                <input type="number" defaultValue={1} />
                <button>Supprimer</button>
              </article>
              <article>
                <figure>
                  <img
                    src="https://source.unsplash.com/random/201x201"
                    alt="Article 2"
                  />
                  <figcaption>Article 2</figcaption>
                </figure>
                <p>Description de l'article 2. Prix: 35€</p>
                <input type="number" defaultValue={1} />
                <button>Supprimer</button>
              </article>
              {/* Ajoutez plus d'articles ici */}
            </div>
          </section>
        </div>
      </main>
      <section aria-label="Subscribe example">
        <div className="abonne">
          <article>
            <div className="text_abonne">
              <h2>S'abonner</h2>
              <h3>Restez informé des nouveautés</h3>
            </div>
            <form className="grid_abonne">
              <div className="form-item">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Votre nom"
                  aria-label="Nom"
                  required
                />
              </div>
              <div className="form-item">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Votre email"
                  aria-label="Email"
                  required
                />
              </div>
              <div className="form-item">
                <button
                  type="submit"
                  onClick={(event) => event.preventDefault()}
                >
                  S'abonner
                </button>
              </div>
            </form>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Corbeille;
