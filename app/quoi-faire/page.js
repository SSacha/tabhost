import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function QuoiFaire() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Quoi faire à Bordeaux ?</h1>
        <p>Tu pourras mettre ici tout ton texte et tes idées ✨</p>
      </main>
      <Footer />
    </>
  );
}