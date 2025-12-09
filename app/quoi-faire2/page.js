
'use client'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import useInterval from 'react-use/lib/useInterval';
import React, { useState, useEffect } from 'react';


export default function QuoiFaire() {

  let dataToDisplay4 = ['1', '2', '3', '4'];
  let dataToDisplay3 = ['1', '2', '3'];
  let dataToDisplay2 = ['1', '2'];
  const [currentIndex, setCurrentIndex] = useState(0);



  useInterval(() => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % dataToDisplay3.length);
  }, 30000);


  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center ">

        <div className="w-full">
          <Image src={'/quinconces-automne.jpg'} alt={'bourse'} width={1920} height={1000} />
        </div>
        <h1 className="text-3xl  mx-perso px-4 py-12 font-bold">Quoi faire à Bordeaux ?</h1>

        {/* <p className="mx-perso px-4 py-4 mb-4">Tu pourras mettre ici tout ton texte et tes idées ✨</p> */}

        {currentIndex === 0 ?
          <>
            <ul className=" custom-list mx-perso px-4 mb-8">
              <li>Se perdre dans le Vieux Bordeaux, notamment dans le quartier Saint-Pierre, avec ses ruelles pavées, ses façades dorées et ses petites terrasses animées.</li>
              <li>Visiter la Cathédrale Saint-André et grimper en haut de la Tour Pey-Berland pour admirer une vue panoramique imprenable sur la ville.</li>
              <li>S’arrêter sur la Place Saint-Michel, dominée par sa splendide basilique gothique. Le quartier est très vivant, surtout les jours de marché (lundi et samedi matin) et lors des puces du dimanche.</li>
              <li>Admirer la Place de la Bourse et son célèbre Miroir d’eau, l’un des symboles de Bordeaux — parfait pour une photo au coucher du soleil.</li>
              <li>Flâner le long des quais de la Garonne, aménagés pour la balade à pied ou à vélo. Les plus motivés peuvent faire le tour des deux ponts : le Pont de Pierre et le Pont Chaban-Delmas, qui offre une belle vue sur la ville.</li>
              <li>Prendre un verre sur la Place du Palais, face à la Porte Cailhau, une ancienne porte fortifiée emblématique du Bordeaux médiéval.</li>
              <li>Faire du shopping dans la Rue Sainte-Catherine, la plus longue rue piétonne d’Europe, reliant le Grand Théâtre à la Place de la Victoire.</li>
              <li>Explorer le quartier des Chartrons, autrefois fief des négociants en vin, aujourd’hui plein de charme avec ses antiquaires, ses friperies et la très conviviale Place du Marché des Chartrons, idéale pour boire un verre en soirée.</li>
              <li>Se détendre au Jardin Public, véritable poumon vert au cœur de la ville, parfait pour une pause au calme.</li>
              <li>Explorer Darwin, un éco-lieu alternatif sur la rive droite, entre street art, brasserie bio et ambiance bohème.</li>
              <li>Découvrir le Bassin des Lumières, une ancienne base sous-marine transformée en centre d’art numérique immersif — un lieu spectaculaire.</li>
              <li>Faire un tour au Marché des Capucins, surnommé le « ventre de Bordeaux », pour déguster huîtres, tapas ou produits locaux dans une ambiance conviviale.</li>
              <li>Découvrir la Cité du Vin, un lieu unique dédié à la culture du vin et à ses expériences sensorielles. (Entrée autour de 20 €, avec un verre de vin au 7ᵉ étage et une superbe vue sur la Garonne.)</li>
            </ul>
          </>
          : ''}

        <div className="w-full mt-8">
          <Image src={'/rue-saint-james-photo.png'} alt={'cite-vin'} width={1920} height={1000} />
        </div>

        {currentIndex === 1 ?
          <>
            <h2 className="text-3xl  mx-perso px-4 py-12 font-bold">Nos restaurants coups de cœur</h2>

            <p className="mx-perso px-4 font-bold">💸 Petits prix – excellent rapport qualité/prix :</p>

            <ul className=" custom-list mx-perso px-4 ">
              <li>Les Drôles 21 Rue Saint-Rémi, 33000 Bordeaux Budget : 20–30 € Cuisine française
                traditionnelle, ambiance bistrot conviviale, très bon rapport qualité/prix.</li>
              <li>Le Vieux Chaudron 31 Rue du Pas-Saint-Georges, 33000 Bordeaux Budget : 25–35 € Bistrot
                local typique avec plats généreux et accueil chaleureux, au cœur du vieux Bordeaux.</li>
              <li>Santosha 2 Place Fernand Lafargue, 33000 Bordeaux Budget : 15–25 € Cuisine thaï /
                indonésienne façon street-food, portions généreuses, ambiance décontractée.</li>
              <li>L’Entrecôte 4 Cours du 30 Juillet, 33000 Bordeaux Budget : 25–35 € Formule unique : faux-filet,
                sauce secrète et frites à volonté. Incontournable, mais sans réservation.</li>
              <li>Bistrot Régent 50 Rue Maréchal Joffre, 33000 Bordeaux Budget : 15–25 € Concept simple et
                efficace : viande ou poisson, salade et frites à volonté, ambiance conviviale.</li>
              <li>Marché des Capucins Place des Capucins, 33800 Bordeaux Budget : selon les stands Le
                “ventre de Bordeaux” : huîtres, tapas, produits locaux dans une ambiance populaire et vivante.</li>
              <li>Les Halles de Bacalan 10 Esplanade de Pontac, 33300 Bordeaux Budget : variable selon les
                stands Marché couvert moderne avec producteurs locaux et coins restauration. Idéal pour
                découvrir plusieurs saveurs.</li>
            </ul>

            <p className="mx-perso px-4 font-bold">🍽️ Milieu de gamme – pour un dîner un peu plus chic :</p>

            <ul className=" custom-list mx-perso px-4 ">
              <li>Racines 59 Rue Georges Bonnac, 33000 Bordeaux Budget : 40–50 € Cuisine française
                moderne, produits de saison, présentation soignée. Excellent rapport qualité-prix.</li>
              <li>Tante Charlotte 7 Rue des Bahutiers, 33000 Bordeaux Budget : 50–60 € Cadre élégant, cuisine
                raffinée et service attentionné. Parfait pour un dîner romantique.</li>
              <li>Symbiose 4 Quai des Chartrons, 33000 Bordeaux Budget : 50–70 € Lieu tendance :
                gastronomie et cocktails, produits locaux et ambiance décontractée.</li>

            </ul>

            <p className="mx-perso px-4 font-bold">🍷 Gastronomique – pour une occasion spéciale :</p>

            <ul className=" custom-list mx-perso px-4 ">
              <li>L’Oiseau Bleu 127 Avenue Thiers, 33100 Bordeaux Budget : 100 € et + Cuisine inventive,
                cadre raffiné, chef reconnu. Excellent pour célébrer une belle occasion.</li>
              <li>Maison Nouvelle 11 Rue Rode, 33000 Bordeaux Budget : 120 € et + Le restaurant du chef
                Philippe Etchebest : expérience culinaire d’exception et service haut de gamme.</li>
              <li>Le Quatrième Mur Place de la Comédie, 33000 Bordeaux Budget : 60–100 € Cuisine
                bistronomique du chef Etchebest, dans le magnifique cadre du Grand Théâtre.</li>
              <li>Le Pressoir d’Argent – Gordon Ramsay 2–5 Place de la Comédie, 33000 Bordeaux Budget :
                200 € et + Restaurant 2 étoiles Michelin. Cuisine d’une finesse exceptionnelle, service
                irréprochable, cadre somptueux.</li>


            </ul>

            <p className="mx-perso px-4 font-bold font-italic">🥖 Bon appétit et belle découverte de Bordeaux !</p>
          </>
          : ''}

        <div className="w-full mt-8">
          <Image src={'/cite-vin-photo.png'} alt={'cite-vin'} width={1920} height={1000} />
        </div>

        {currentIndex === 2 ?
          <>
            <h2 className="text-3xl  mx-perso px-4 py-12 font-bold">Nos bars coups de cœur</h2>

            <p className="mx-perso px-4 font-bold">🍸 Bars à cocktails / branchés :</p>
            <ul className=" custom-list mx-perso px-4 ">
              <li>L’Apollo 19 Place Fernand‑Lafargue, 33000 Bordeaux
                Musique soul/funk, ambiance centrale et animée.</li>
              <li>Le Grand Popo
                Quartier Saint-Michel, 33000 Bordeaux
                Bar associatif animé, concerts et DJ sets, ambiance jeune.</li>
              <li>La Gigi
                32 Rue des Allamandiers, 33800 Bordeaux
                Cocktails créatifs, street-food bistronomique, cadre tendance.</li>
              <li>Bien Public
                68 Quais Deschamps, 33100 Bordeaux
                Lieu hybride face à la Garonne : bar‑restaurant, salle de spectacles, grande terrasse. Concerts, DJ sets, expos et restauration bistronomique, ambiance festive et conviviale.
              </li>
            </ul>


            <p className="mx-perso px-4 font-bold">🍷 Bars à vins :</p>
            <ul className=" custom-list mx-perso px-4 ">
              <li>Wine More Time
                Rue Saint James, 33000 Bordeaux
                Vins variés, ambiance conviviale et cosy pour découvrir des crus locaux.</li>
              <li>L’École du Vin de Bordeaux
                3 Cours du 30 Juillet, 33000 Bordeaux
                Bar/atelier pour apprendre et déguster les vins de Bordeaux, cadre élégant et pédagogique.</li>
              <li>Le Bon Jaja
                Angle Cours Alsace Lorraine, 33000 Bordeaux
                Large choix de vins au verre, ambiance agréable et conviviale.</li>
            </ul>

            <p className="mx-perso px-4 font-bold">🌿 Guinguettes / spots bord de fleuve :</p>
            <ul className=" custom-list mx-perso px-4 ">
              <li>Chez Alriq
                Quai des Queyries, 33100 Bordeaux
                Terrasse au bord de la Garonne, musique live, ambiance relax.</li>
              <li>Les Chantiers de la Garonne
                21 Quai des Queyries, 33100 Bordeaux
                Plage urbaine, terrasse, cadre chill pour l’après-midi ou soirée.</li>
              <li>Darwin
                87 Quai des Queyries, 33100 Bordeaux
                Lieu culturel et éco-responsable, bar, street-food, concerts et événements.</li>
            </ul>
          </>
          : ''}

        <div className="w-full mt-8 mb-8">
          <Image src={'/restaurant.jpg'} alt={'restaurant'} width={1920} height={1000} />
        </div>





        <div className="w-full mt-8">
          <Image src={'/darwin-photo.jpg'} alt={'darwin'} width={1920} height={1000} />
        </div>




      </main>
      <Footer />
    </>
  );
}