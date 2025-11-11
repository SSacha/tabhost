import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Separator from "./components/Separator";
import BlocAccueil from "./components/BlocAccueil";
import BlocAccueilSeul from "./components/BlocAccueilSeul";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full ">
        <div className="w-full">
          <Image src={'/place-bourse-photo.jpg'} alt={'bourse'} width={1920} height={1000} />
        </div>
        <div className="flex flex-col accueil-container-title justify-center items-center font-bold">
          <h1 className="text-3xl  px-4 py-12 mb-2">Pourquoi choisir notre conciergerie ?</h1>
          <p className="text-2xl w-full px-4 py-4 mb-4"> Vous êtes propriétaire d'un appartement destiné à la location saisonnière ou à long terme ? Confiez sa gestion à des experts qui
            s'occupent de tout, de l’accueil de vos invités à l'entretien de votre bien. Notre conciergerie vous offre une solution clé en main pour
            maximiser votre rentabilité et garantir la satisfaction de vos hôtes.</p>
        </div>

        {/* <Separator /> */}
        <h2 className="text-3xl flex justify-center items-center mx-perso pb-8 font-bold pt-8 to-uppercase" >Nos Services</h2>
        <div className="flex flex-row bloc-accueil-w h-80 justify-space-evenly mx-perso items-center mb-4">
          <BlocAccueil
            titre="Gestion des réservations"
            contenu={
              <ul className="custom-list px-4 mb-4 text-base font-normal">
                <li>Prise en charge des réservations via les principales plateformes (Airbnb, Booking, etc.)</li>
                <li>Optimisation des tarifs en fonction de la demande</li>
                <li>Communication avec les locataires avant, pendant et après leur séjour</li>
              </ul>
            }
          />
          <BlocAccueil
            titre="Accueil des hôtes"
            contenu={
              <>
                {/* <p className="text-2xl mx-perso px-4 py-4 mb-4 font-semibold">Accueil des hôtes :</p> */}
                <ul className="custom-list  px-4 mb-4 text-base font-normal">
                  <li>Remise des clés et présentation de l’appartement</li>
                  <li>Disponibilité pour répondre aux questions ou demandes spéciales des locataires</li>
                  <li>Assistance 24/7 en cas d’urgence</li>
                </ul>
              </>
            }
          />
        </div>
        <div className="flex flex-row bloc-accueil-w h-80 justify-space-evenly mx-perso items-center mt-4 mb-4">
          <BlocAccueil
            titre="Entretien de l'appartement"
            contenu={
              <ul className="custom-list px-4 mb-4 text-base font-normal">
                <li>Ménage professionnel avant et après chaque séjour</li>
                <li>Gestion des linges de maison</li>
                <li>Vérification des équipements et réapprovisionnement
                  (savons, produits ménagers, etc.)</li>
              </ul>
            }
          />
          <BlocAccueil
            titre="Maintenance et réparations"
            contenu={

              <ul className="custom-list  px-4 mb-4 text-base font-normal">
                <li>Suivi régulier de l’état de l’appartement (plomberie,
                  électricité, etc.)</li>
                <li>Réparation ou remplacement rapide des équipements
                  défectueux</li>
                <li>Contrôle des installations de sécurité</li>
              </ul>

            }
          />
        </div>

        <div className="flex flex-row bloc-accueil-w h-80 justify-space-evenly mx-perso items-center mt-4">
          <BlocAccueilSeul
            titre="Optimisation de l’expérience hôte"
            contenu={
              <ul className="custom-list px-4 mb-4 text-base font-normal">
                <li>Fourniture d’informations locales (restaurants, transports,
                  attractions)</li>
                <li>Suggestions personnalisées pour améliorer l’accueil et les
                  avis des client</li>
              </ul>
            }
          />

        </div>


      </main>
      <Footer />
    </>
  );
}