import Image from "next/image";
import Title from "./components/Title";
import InputWithLabel from "./components/InputWithLabel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[url('/assets/images/bg2-img.png')]">
      <div className="w-[100%] h-auto flex">

      {/* box right side */}
        <div className="w-1/2 flex flex-col text-white justify-center gap-10 mt-16 pl-10">

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

        {/* box left side */}
        <div className="w-1/2 flex flex-col justify-center gap-10 mt-16 pl-10 bg-slate-300">
        <div>
        <Title title="Votre Shynleï c'est..." className="text-2xl font-semibold" />

        </div>
        </div>
      </div>
    </main>
  );
}
