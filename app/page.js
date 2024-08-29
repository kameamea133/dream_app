'use client'

import { useState, useEffect } from "react";
import Title from "./components/Title";
import InputWithLabel from "./components/InputWithLabel";
import IconText from "./components/IconText";
import Button from "./components/Button";
import { API_URL } from "./config/api";

export default function Home() {
  const [fullname, setFullname] = useState('');
  const [intention, setIntention] = useState('');
  const [error, setError] = useState(null);
  const [titleText, setTitleText] = useState("Votre Shynleï c'est...");

  const updateTitleText = () => {
    if (window.innerWidth < 640) {
      setTitleText("Votre Shynleï");
    } else {
      setTitleText("Votre Shynleï c'est...");
    }
  };

  useEffect(() => {
    updateTitleText();
    window.addEventListener('resize', updateTitleText); 
    return () => window.removeEventListener('resize', updateTitleText);
  }, []);


  const validateForm = () => {
    if (window.innerWidth >= 640) {
    if (!fullname || !intention) {
      setError('Tous les champs doivent être remplis.');
      return false;
    }
    setError(null);
    return true;
  };
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      
      if (result.error) {
        alert(`Sorry: ${result.error}`);
      } else if (result.ipAddress) {
        const sum = result.ipAddress.split('.').map(Number).reduce((acc, curr) => acc + curr, 0);
        if (sum > 100) {
          alert("OK");
        } else {
          alert("KO");
        }
      }

      setFullname('');
      setIntention('');

    } catch (error) {
      console.log("An error occurred:", error);
    }
  };


  const handleMobileSubmit = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();

      if (result.error) {
        alert(`Sorry: ${result.error}`);
      } else if (result.ipAddress) {
        const sum = result.ipAddress.split('.').map(Number).reduce((acc, curr) => acc + curr, 0);
        if (sum > 100) {
          alert("OK");
        } else {
          alert("KO");
        }
      }
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  useEffect(() => {
    const handlePageClick = () => {
      setError(null);
    };

    document.addEventListener('click', handlePageClick);

    return () => {
      document.removeEventListener('click', handlePageClick);
    };
  }, []);

  return (
    <main className="p-10 flex min-h-screen flex-col items-center justify-between sm:p-24 bg-none lg:bg-[url('/assets/images/bg2-img.png')]">
      <div className="w-[100%] h-auto mt-[-10px] flex flex-col lg:flex-row">

        {/* left box */}
        <div className="hidden lg:flex w-1/2 flex-col text-white justify-center gap-10 pl-10 mt-20">
          <div>
            <Title title="Pour commencer..." className="text-2xl font-semibold" />
            <p className="text-sm mt-5 w-[60%] text-white/70">
              Faire votre Shynleï, jouer avec, c&apos;est l&apos;occasion d&lsquo;écouter vos rêves, de les partager et de prendre confiance dans votre richesse.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="relative">
            <div className="flex flex-col gap-10">
            <div>
              <InputWithLabel
                label="Nom et prénom :"
                id="fullname"
                htmlFor="fullname"
                type="text"
                className="bg-transparent border-0 border-b-2 border-gray-100 focus:border-gray-100 focus:outline-none py-3 w-[85%] placeholder-white"
                placeholder="Jeal"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
              {error && <p className="text-red-500">{error}</p>}
            </div>

              <div>
                <h2 className="text-[16px] ">Mon intention :</h2>
                <p className="text-xs my-3 text-white/70">L&lsquo;intention l&lsquo;objectif de ce Shynleï</p>
                <InputWithLabel
                  id="intention"
                  type="text"
                  className="bg-transparent border-0 border-b-2 border-gray-100 focus:border-gray-100 focus:outline-none py-3 w-[85%] placeholder-white"
                  placeholder="Mon rël"
                  value={intention}
                  onChange={(e) => setIntention(e.target.value)}
                />
                {error && <p className="text-red-500">{error}</p>}
              </div>
            </div>

            <Button
              className="absolute right-0 sm:right-[-390px] text-white text-[12px] uppercase w-full sm:w-[35%] py-2 bg-[#80B1B7] rounded-lg tracking-wide"
              type="submit"
            >
              Exprimez mes rêves &gt;
            </Button>
          </form>
        </div>

        {/* right box */}
        <div className="w-[100%] lg:w-1/2 flex flex-col justify-center gap-10   sm:pl-20">
          <div>
          <Title title={titleText} className="text-2xl font-semibold" />

            <p className="text-sm w-[100%] sm:w-[90%] sm:mt-5">
              7 étapes, 2 fiches pour prendre note des rencontres, 1 page pour éclairer le sens, 3 interprétations pour vous aider..
            </p>
          </div>

          {/* IconText elements */}
          <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-y-8 sm:w-[115%]">
            <IconText
              imageSrc="/assets/images/Page-1.svg"
              description="1. Le rêve libère l'expression"
              imageAlt="icon"
              imageSize="40"
            />
            <IconText
              imageSrc="/assets/images/Page-2.svg"
              description="2. Le sens éclaire le parcours"
              imageAlt="icon"
              imageSize="40"
            />
            <IconText
              imageSrc="/assets/images/Page-3.svg"
              description="3. La différence rend unique"
              imageAlt="icon"
              imageSize="40"
            />
            <IconText
              imageSrc="/assets/images/Page-4.svg"
              description="4. La valeur humaine met en mouvement"
              imageAlt="icon"
              imageSize="40"
            />
            <IconText
              imageSrc="/assets/images/Page-5.svg"
              description="5. La clé exprime le style"
              imageAlt="icon"
              imageSize="40"
            />
            <IconText
              imageSrc="/assets/images/Page-6.svg"
              description="6. Le parcours associe rêve et réalité"
              imageAlt="icon"
              imageSize="40"
            />
            <IconText
              imageSrc="/assets/images/Page-7.svg"
              description="7. Le ciel bleu révèle l'alignement"
              imageAlt="icon"
              imageSize="40"
            />
          </div>

         
          <Button
              className=" text-[10px] w-[170px] text-white px-2 py-3 mx-auto mt-[-20px] uppercase bg-[#80B1B7] rounded-lg tracking-wide sm:hidden sm:ml-0"
              onClick={handleMobileSubmit}
              type="button"
            >
              Exprimez mes rêves &gt;
            </Button>

        </div>
      </div>
    </main>
  );
}
