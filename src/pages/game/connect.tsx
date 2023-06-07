import Link from "next/link";

function Game() {
  return (
    <div className="container">
      <div>
        <h1>Puissance 4</h1>
        <Link href="/" className="buttonLink2">
          Retour à la page d&aposaccueil
        </Link>
      </div>
    </div>
  );
}
export default Game;
