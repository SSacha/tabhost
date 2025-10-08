import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function QuoiFaire() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center ">

        <div className="w-full">
          <Image src={'/place-bourse-photo.jpg'} alt={'bourse'} width={1920} height={1000} />
        </div>
        <h1 className="text-3xl  mx-perso px-4 py-12 font-bold">Quoi faire à Bordeaux ?</h1>

        {/* <p className="mx-perso px-4 py-4 mb-4">Tu pourras mettre ici tout ton texte et tes idées ✨</p> */}

        <ul className="text-2xl custom-list mx-perso px-4 mb-8">
          <li>Se perdre dans le vieux Bordeaux à Saint-Pierre, quartier historique et incontournable de
            la ville</li>
          <li>Admirer la Cathédrale Saint-André et grimper la tour de Pey-Berland pour une vue 360° de
            la ville</li>
          <li>Déjeuner sur la « Place Saint-Michel » (magnifique basilique gothique) il y a aussi un
            marché le lundi et le samedi matin ainsi que les « puces » du dimanche</li>
          <li>Faire un stop « Place de la Bourse » avec le miroir d’eau qui reflète cette place classée</li>
          <li>En profiter pour se balader le long des quais aménagés Bordelais et pour les plus sportifs
            faire le tour des deux ponts (Pont Chaban-Delmas et Pont de Pierre)</li>
          <li>Autre petite place très agréable « Place du Palais » pour boire un verre face à la « Porte
            Cailhau »</li>
        </ul>
        <div className="w-full mt-8">
          <Image src={'/rue-saint-james-photo.png'} alt={'cite-vin'} width={1920} height={1000} />
        </div>
        <ul className="text-2xl custom-list mx-perso px-4 ">
          <li>Faire du shopping dans la plus grande rue piétonne d’Europe « Rue Sainte-Catherine » du
            « Grand Théâtre » à la « Place de la Victoire »</li>
          <li>Se promener dans le très charmant quartier des Chartrons rempli d’antiquaires et de
            brocanteurs, puis boire un verre ou se restaurer « Place du marché des Chartrons », place
            très animée le soir</li>
          <li>Visiter la Cité du Vin, musée sur l’histoire du vin rempli d’expériences sensorielles (20€
            avec verre de vin au 7ème étage, très belle vue panoramique)</li>
        </ul>
        <div className="w-full mt-8">
          <Image src={'/cite-vin-photo.png'} alt={'cite-vin'} width={1920} height={1000} />
        </div>

        <h2 className="text-3xl  mx-perso px-4 py-12 font-bold">Nos restaurants préférés : </h2>

        <ul className="text-2xl custom-list mx-perso px-4 ">
          <li>« Le Donostia » place Saint Michel, pour de très bon tapas</li>
          <li>« Chez Thérèse » Saint Michel, bistrot gourmand, ambiance vintage</li>
          <li>« L’agneau à la braise » (menu soir 20€) en ville</li>
          <li>« La Maison Mère », aux confins du Triangle d'or, bistrot français la journée, la Maison
            Mère se transforme en club lorsque la nuit est entamée, rue de la maison Daurade</li>
          <li>« Au Carreau » en centre-ville, rue du Pas-Saint-Georges, plats régionaux préparés par
            des amoureux de la cuisine</li>
          <li> « French House » au coeur du triangle d’Or, 7 place Puy-Paulin. Nouveau concept de
            650m2 à la décoration 70’s : Restaurant-brunch, espace de coworking nomade et galerie
            d'art. Plats locaux et raffinés, accueil aux petits soins</li>
          <li>« La Gigi » vous accueille à St Michel. Un bar d'ambiance et une cuisine locale de
            saison vous y attendent</li>
          <li>« El Nacional », place des Chartrons, un peu cher mais super bonne viande- « Moelleuses et persillées », notre restaurant de viande préféré ! Ils servent de la
            viande maturée, incroyable !</li>
          <li>« Chez Dupont », rue Notre-Dame, cette table dans un hôtel sert une cuisine locale
            bistronomique du marché,
            Nous vous le recommandons +++</li>
          <li>« Le Cambridge Pub » ou le « Molly Malone », place des Chartrons ou sur les quais Pub
            anglais sans chichi, Burgers, Fish&Chips à prix mini</li>
        </ul>
        <div className="w-full mt-8">
          <Image src={'/restaurant.jpg'} alt={'restaurant'} width={1920} height={1000} />
        </div>

        <ul className="text-2xl custom-list mx-perso px-4 ">
          <li>« Cabane Cent Un » est un bar à huîtres situé sur la Place des Chartrons- « Leogusto » restaurant italien délicieux sur la place des Chartrons</li>
          <li>« L’entrecôte » près du Grand théâtre célèbre restaurant au plat unique et sa sauce secrète</li>
          <li>« Le bistrot régent » est aussi connu pour sa sauce, il y en a plusieurs dont un sur un bateau “quai Armand Lalande”</li>
          <li>« Le 7 » restaurant au 7ème étage de la cite du vin- « Les Halles de Bacalan » en face de la Cité du Vin, ambiance garantie avec 24 stands
            pour manger et boire sur le parvis ensoleillé. Ici vous trouverez la meilleure fromagerie
            “Robert & Robert”</li>
          <li>« La Cantine du Garage » est le resto associatif du Garage Moderne. Il propose des en
            cas à toute heure, et le midi, une formule fait maison, bistronomique et atypique comme
            son lieu</li>
          <li>« Le Bar de la Marine » cuisine du terroir dans un grand jardin dans l’esprit
            guinguette - Brunch délicieux le dimanche pour 32€</li>
          <li>Le « Monzù » meilleur restaurant italien de Bordeaux !</li>
          <li>Kebab « Le Coluche», meilleur Kebab de Bordeaux !</li>
          <li>Les rooftops du « Mama shelter », du Hangar 14, du « Siman » et du « Grand hôtel
            de Bordeaux » pour boire un verre au dessus de la ville</li>
          <li>Le Rooftop du Gina bar &
            restaurant vue sur la cité du vin</li>
          <li>Rive droite, baladez-vous vers : « Les chantiers de la Garonne » ancien hangar, nourriture maritime à déguster les
            pieds dans le sable en face de la Garonne, vue sur la Place de la Bourse</li>
          <li>« Les chantiers de la Garonne » ancien hangar, nourriture maritime à déguster les
            pieds dans le sable en face de la Garonne, vue sur la Place de la Bourse</li>
          <li>« Chez Alriq la guinguette » autre endroit très sympa avec concert live, restauration
            au comptoir et délicieux punch, superbe endroit pour le coucher de soleil</li>
          <li>« DARWIN », lieu alternatif, ancienne caserne militaire de près de 20 000 m2
            (skate-park XXL, Graffiti, épicerie bio, restaurant Le Magasin général, brasserie...) -
            brunch le dimanche matin avec produits bios 20€/pers
          </li>
        </ul>
        <div className="w-full my-8">
          <Image src={'/darwin-photo.jpg'} alt={'darwin'} width={1920} height={1000} />
        </div>

        <h3 className="text-3xl  mx-perso px-4 py-12 font-bold">Nos bars coup de cœur :</h3>
        <ul className="text-2xl custom-list mx-perso px-4 ">
          <li>Gargalou vers le pont chaban Delmas</li>
          <li>L’Adiu bar et restaurant locale super ambiance</li>
          <li>La plage de l’iboat (regardez la programmation du Collectif blonde venus)+ boîte de
        nuit dans un bateau</li>
          <li>Pour boire une bière : Vintage bar, starfish, La cueva, Dickens, l’Apollo, le market
        Tavern</li>
          <li>La Tencha dans le quartier Saint-Michel jusqu’à 2h</li>
          <li>Le poisson rouge jusqu’à 2h super DJ</li>
          <li>Boire un Long island au road house avec musique jusqu’à 2h ou Au Milo’s bar</li>
          <li>Regardez aussi les événements musicaux rive droite : les heures heureuses de
        Darwin, chez Alriq, Fabrique Pola</li>
          {/* <li></li> */}
        </ul>
        

      </main>
      <Footer />
    </>
  );
}