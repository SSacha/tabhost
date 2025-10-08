import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Separator from "./components/Separator";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full ">
        <h1 className="text-3xl  mx-perso px-4 py-12 font-bold mb-2">Pourquoi choisir notre conciergerie ?</h1>
        <p className="text-2xl mx-perso px-4 py-4 mb-4"> Vous êtes propriétaire d'un appartement destiné à la location saisonnière ou à long terme ? Confiez sa gestion à des experts qui
          s'occupent de tout, de l’accueil de vos invités à l'entretien de votre bien. Notre conciergerie vous offre une solution clé en main pour
          maximiser votre rentabilité et garantir la satisfaction de vos hôtes.</p>
          <Separator />
        <h2 className="text-3xl  mx-perso px-4 py-4 font-bold mb-4" >Nos Services</h2>
        <p className="text-2xl mx-perso px-4 py-4 mb-4" >Gestion des réservations :</p>
        <ul className="custom-list mx-perso px-4 mb-4">
          <li>Prise en charge des réservations via les principales
            plateformes (Airbnb, Booking, etc.)</li>
          <li>Optimisation des tarifs en fonction de la demande</li>
          <li>Communication avec les locataires avant, pendant et après
            leur séjour</li>
        </ul>
        
        <p className="text-2xl mx-perso px-4 py-4 mb-4" >Accueil des hôtes :</p>
        <ul className="custom-list mx-perso px-4 mb-4">
          <li>Remise des clés et présentation de l’appartement</li>
          <li>Disponibilité pour répondre aux questions ou demandes
            spéciales des locataires</li>
          <li>Assistance 24/7 en cas d’urgence</li>
        </ul>

        <p className="text-2xl mx-perso px-4 py-4 mb-4" >Entretien de l'appartement :</p>
        <ul className="custom-list mx-perso px-4 mb-4">
          <li>Ménage professionnel avant et après chaque séjour</li>
          <li>Gestion des linges de maison</li>
          <li>Vérification des équipements et réapprovisionnement
            (savons, produits ménagers, etc.)</li>
        </ul>
        

        <p className="text-2xl mx-perso px-4 py-4 mb-4" >Maintenance et réparations :</p>
        <ul className="custom-list mx-perso px-4 mb-4">
          <li>Suivi régulier de l’état de l’appartement (plomberie,
            électricité, etc.)</li>
          <li>Réparation ou remplacement rapide des équipements
            défectueux</li>
          <li>Contrôle des installations de sécurité</li>
        </ul>

        
        <p className="text-2xl mx-perso px-4 py-4 mb-4" >Optimisation de l’expérience hôte :</p>
        <ul className="custom-list mx-perso px-4 mb-4">
          <li>Fourniture d’informations locales (restaurants, transports,
            attractions)</li>
          <li>Suggestions personnalisées pour améliorer l’accueil et les
            avis des client</li>
        </ul>

      </main>
      <Footer />
    </>
  );
}