'use client'
import React from "react";
import { useRouter } from 'next/navigation';

function SectionFirst() {
 
  const router = useRouter();

    return(
      <section className="w-full lg:h-auto h-[500px] bg-white dark:bg-black">
        <div className="flex  p-20 justify-center items-center h-full ">
          <div className="w-full text-left flex flex-col gap-8">
            <div>
               <p className="text-center lg:text-left w-full  text-black dark:text-white text-xl font-sans">Não sabe onde é sua sala ?</p>
               <p className="font-sans text-black dark:text-white text-xl text-center lg:text-left"><span className="font-sans text-orange-500 text-2xl font-bold">Onde é</span> o Laboratório da aula de hoje ?</p>
            </div>
            <div className="text-center flex flex-col gap-3 items-center">
             <p className="text-black dark:text-white sm:text-lg text-lg lg:text-2xl font-bold font-sans">Nós podemos te ajudar!</p>           
             <button type="button" onClick={() => router.push('/buscar')} className="box-border relative z-30 inline-flex items-center justify-center w-2/3 lg:w-44 lg:px-9 py-4 overflow-hidden font-bold text-white transition-all duration-300 bg-orange-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-orange-300 ring-offset-orange-200 hover:ring-offset-orange-500 ease focus:outline-none">
      <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
      <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
      <span className="relative z-20 flex items-center text-sm">
        buscar
      </span>
    </button>
 
            </div>
          </div>
          <div className="hidden lg:flex w-full">
            <img src="./mapa-white.png"/>
          </div> 
          
        </div>
        
      </section>

    );
  }


  export default SectionFirst;
  