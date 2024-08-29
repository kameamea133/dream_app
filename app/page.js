'use client'

import { useState } from "react";
import Title from "./components/Title";
import InputWithLabel from "./components/InputWithLabel";
import IconText from "./components/IconText";
import Button from "./components/Button";

export default function Home() {

  const handleClick = async () => {
    try {
      const response = await fetch('https://api.db-ip.com/v2/free/self')
      if(!response.ok) {
        throw new Error("Failed to fetch data")
      }
      const result = await response.json();
      console.log(typeof result.ipAddress);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-none lg:bg-[url('/assets/images/bg2-img.png')]">
      <div className="w-[100%] h-auto  mt-[-10px] flex flex-col lg:flex-row">

      {/* left box */}
        <div className="hidden lg:flex w-1/2 flex-col text-white justify-center gap-10 pl-10 mt-8">

          <div>
          <Title title="Pour commencer..." className="text-2xl font-semibold" />
          <p className="text-sm mt-5 w-[60%]">
            Faire votre Shynleï, jouer avec, c'est l'occasion d'écouter vos
            rêves, de les partager et de prendre confiance dans votre richesse.
          </p>
          </div>

          <div className="flex flex-col gap-10">
            <InputWithLabel
              label="Nom et prénom :"
              id="fullname"
              htmlFor="fullname"
              type="text"
              className="bg-transparent border-0 border-b-2 border-gray-100 focus:border-gray-100 focus:outline-none py-3 w-[85%] placeholder-white"
              placeholder="Jeal"
            />

            <div>
            <h2>Mon intention :</h2>
            <p className="text-xs my-3">L'intention l'objectif de ce Shynleï</p>
            <InputWithLabel
              id="intention"
              type="text"
              className="bg-transparent border-0 border-b-2 border-gray-100 focus:border-gray-100 focus:outline-none py-3 w-[85%] placeholder-white"
              placeholder="Mon rël"
            />
            </div>
          </div>

        </div>

        {/* right box */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-10 mt-16 pl-10">

        <div>
        <Title title="Votre Shynleï c'est..." className="text-2xl font-semibold" />
        <p className="text-sm mt-5 w-[90%]">
            7 étapes, 2 fiches pour prendre note des rencontres, 1 page pour éclairer le sens, 3 interprétations pour vous aider..
          </p>
        </div>

        <div className="grid grid-cols-2 gap-y-8 w-[120%]">
          <IconText
            imageSrc="/assets/images/Page-1.svg"
            description="1. Le rêve libère l'expression" 
            imageAlt="icon"
            imageSize="30"
            />
             <IconText
            imageSrc="/assets/images/Page-2.svg"
            description="2. Le sens éclaire le parcours" 
            imageAlt="icon"
            imageSize="30"
            />
             <IconText
            imageSrc="/assets/images/Page-3.svg"
            description="3. La différence rend unique" 
            imageAlt="icon"
            imageSize="30"
            />
             <IconText
            imageSrc="/assets/images/Page-4.svg"
            description="4. La valeur humlaine met en mouvement" 
            imageAlt="icon"
            imageSize="30"
            />
             <IconText
            imageSrc="/assets/images/Page-5.svg"
            description="5. La clé exprime le style" 
            imageAlt="icon"
            imageSize="30"
            />
             <IconText
            imageSrc="/assets/images/Page-6.svg"
            description="6. Le parcours associe rêve et réalité" 
            imageAlt="icon"
            imageSize="30"
            
            
            />
             <IconText
            imageSrc="/assets/images/Page-7.svg"
            description="7. Le ciel bleu révèle l'alignement" 
            imageAlt="icon"
            imageSize="30"
            />
        </div>

        <Button className="text-white text-xs uppercase w-[33%] px-3 py-3 bg-[#80B1B7] rounded-lg mx-auto tracking-wide"
        onClick={handleClick}
        >Exprimez mes rêves &gt;</Button>

        </div>
      </div>
    </main>
  );
}
