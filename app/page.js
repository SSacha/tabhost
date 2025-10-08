import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Bienvenue sur Tab&Host</h1>
        <p>Texte d'accueil ici 🌿</p>
      </main>
      <Footer />
    </>
  );
}