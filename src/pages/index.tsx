import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Site d'algo</title>
        <meta name="description" content="Site d'algo d'entrainement" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="container">
        <div>
          <h1>Bienvenue sur mon site web!</h1>
          <p>Je suis content.e de vous voir :3</p>

          <div className="image-container">
            <div>
              <Link href="/game/sudoku" className="buttonLink">
                Jouer au Sudoku
              </Link>
              <img
                src="/images/ef6faa18233c44ec8c4b678c51bdf38d-1944037190.png"
                alt="Renard blanc"
              />
            </div>

            <div>
              <Link href="/game/connect" className="buttonLink">
                Jouer à Puissance 4
              </Link>
              <img
                src="/images/dcf2tas-8758fbbd-ac10-45d8-be06-a4e27accc3ae.jpg"
                alt="Renard roux"
              />
            </div>

            <div>
              <Link href="/vocal" className="buttonLink">
                Commande vocale
              </Link>
              <img
                src="/images/blue_fox_by_wolfedoutcats-d4rtslv.png"
                alt="Renard bleu"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
