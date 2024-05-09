function SectionFirst() {
    return(
      <section className="w-full  bg-white dark:bg-black">
        <div className="flex  p-20 justify-center items-center h-full ">
          <div className="w-full text-left flex flex-col gap-5">
            <div>
               <p className="text-left w-full text-black dark:text-white lg:text-xl">Não sabe onde é sua sala ?</p>
               <p className="text-black dark:text-white lg:text-xl"><span className="text-orange-500">Onde é</span> o Laboratório da aula de hoje ?</p>
            </div>
            <div className="text-center flex flex-col gap-3 items-center">
             <p className="text-black dark:text-white sm:text-lg lg:text-2xl font-bold">Nós podemos te ajudar!</p>
            
             <buttun class="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-orange-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-orange-300 ring-offset-orange-200 hover:ring-offset-orange-500 ease focus:outline-none">
              <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span class="relative z-20 flex items-center text-sm">
              buscar
              </span>
            </buttun>
            </div>
          </div>
          <div className="flex w-full">
            <img src="./mapa-white.png"/>
          </div>
          
        </div>
        
      </section>

    );
  }


  export default SectionFirst;