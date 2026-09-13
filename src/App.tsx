import React, { useEffect, useState } from 'react';

import { Loader2 } from 'lucide-react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Technology, StackItem } from './types';

import { Navbar } from './component/Navbar';
import { HeroBanner } from './component/HeroBanner';
import { TechCard } from './component/TechCard';
import { StackSidebar } from './component/StackSidebar';
import { Footer } from './component/Footer';




export default function App() {


  

  const [technologies, setTechnologies] = useState<Technology[]>([]);


 

  const [isLoading, setIsLoading] = useState<boolean>(true);


  

  const [loadError, setLoadError] = useState<string | null>(null);


  

  const [stack, setStack] = useState<StackItem[]>([]);



  

  useEffect(() => {

    if (window.location.hash) {

      window.history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search
      );

    }

  }, []);



  

  useEffect(() => {

    let isMounted = true;

    
    setIsLoading(true);


    fetch('/technologies.json')

      
      .then((res) => {

        if (!res.ok) {

          throw new Error(
            `Failed to load technologies (Status: ${res.status})`
          );

        }

        return res.json();

      })


      
      .then((data: Technology[]) => {

        if (isMounted) {

          setTechnologies(data);

          setIsLoading(false);

        }

      })


      
      .catch((err) => {

        console.error(
          'Error loading JSON data:',
          err
        );


        if (isMounted) {

          setLoadError(
            err.message || 'Failed to load technologies'
          );

          setIsLoading(false);

        }

      });


    
    return () => {

      isMounted = false;

    };

  }, []);



  

  const handleAddToStack = (tech: Technology) => {


    
    const alreadyExists = stack.some(
      (item) => item.id === tech.id
    );


    
    if (alreadyExists) {

      toast.warning(
        `${tech.name} is already in your stack.`,
        {
          toastId: `duplicate-${tech.id}`,
        }
      );

      return;

    }


    
    const newItem: StackItem = {

      ...tech,

      addedAt: Date.now(),

    };


    
    setStack((prev) => [
      ...prev,
      newItem,
    ]);


    
    toast.success(
      `${tech.name} added to your stack!`
    );

  };



  

  const handleRemoveItem = (id: string) => {


    
    const removedTech = stack.find(
      (item) => item.id === id
    );


    
    setStack((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );


    
    if (removedTech) {

      toast.info(
        `${removedTech.name} removed from your stack.`
      );

    }

  };





  const handleRemoveAll = () => {


    
    if (stack.length === 0) {
      return;
    }


    
    setStack([]);


    
    toast.info(
      'All technologies removed from your stack.'
    );

  };



  

  return (

    <div
      className="
        min-h-screen
        bg-white
        flex
        flex-col
        font-sans
        selection:bg-rose-500
        selection:text-white
      "
    >



      <ToastContainer
        position="top-right"
        autoClose={2500}
        newestOnTop
        theme="light"
        aria-label="Notifications"
      />



      

      <Navbar />





      <main className="flex-1 w-full">


        {/* Hero Section */}

        <HeroBanner />



        <section
          id="technologies"
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            pt-1
            sm:pt-4
            pb-20
          "
        >


          

          <div className="mb-8 text-center">

            <h2
              className="
                text-2xl
                sm:text-3xl
                lg:text-4xl
                font-extrabold
                text-[#0f172a]
                tracking-tight
              "
            >
              Explore the{' '}

              <span className="text-brand-gradient">
                Technologies
              </span>

            </h2>


            <p
              className="
                text-xs
                sm:text-sm
                text-slate-500
                mt-1.5
              "
            >
              Pick one technology per category to build
              your ideal stack.
            </p>

          </div>





          {isLoading ? (



            <div
              id="loading-spinner-view"
              className="
                py-24
                flex
                flex-col
                items-center
                justify-center
                space-y-3
                bg-white
                rounded-2xl
                border border-slate-100
                shadow-sm
              "
            >

              <Loader2
                className="
                  w-8
                  h-8
                  text-rose-500
                  animate-spin
                "
              />


              <p
                className="
                  text-sm
                  font-medium
                  text-slate-600
                "
              >
                Loading Technologies...
              </p>

            </div>


          ) : loadError ? (

            

            <div
              className="
                p-8
                bg-rose-50
                border border-rose-200
                rounded-2xl
                text-center
                space-y-3
              "
            >

              <p
                className="
                  text-rose-700
                  font-bold
                "
              >
                {loadError}
              </p>


              <button
                type="button"
                onClick={() => window.location.reload()}
                className="
                  px-4
                  py-2
                  bg-rose-600
                  text-white
                  rounded-xl
                  text-xs
                  font-semibold
                "
              >
                Retry Loading
              </button>

            </div>


          ) : (

            

            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-4
                gap-6
                items-start
              "
            >


              

              <div className="lg:col-span-3">

                <div
                  id="technologies-grid"
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    gap-6
                  "
                >

                  {technologies.map((tech) => {


                    
                    const isAdded = stack.some(
                      (item) => item.id === tech.id
                    );


                    return (

                      <TechCard
                        key={tech.id}
                        technology={tech}
                        isAdded={isAdded}
                        onAddToStack={handleAddToStack}
                      />

                    );

                  })}

                </div>

              </div>



              <div
                id="stack-sidebar-container"
                className="lg:col-span-1"
              >

                <StackSidebar
                  stack={stack}
                  onRemoveItem={handleRemoveItem}
                  onRemoveAll={handleRemoveAll}
                />

              </div>

            </div>

          )}

        </section>

      </main>





      <Footer />

    </div>

  );
}