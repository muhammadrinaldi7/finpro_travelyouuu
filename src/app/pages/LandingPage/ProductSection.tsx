'use client'

import CardCategory from "@/components/card/cardCategory";

export default function ProductPage () {
    
    return (
        <>  
           <section id="destination" className="w-full min-h-screen bg-primary-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path className="fill-gray-100" fillOpacity="1" d="M0,32L120,58.7C240,85,480,139,720,149.3C960,160,1200,128,1320,112L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                </svg>
            <div className="container py-10 mx-auto">
                <div className="flex flex-col items-center justify-center gap-4 mx-6 md:mx-24">
                    <h1 className="text-xl font-extrabold text-gray-800 font-tittle md:mb-5 md:text-4xl">Let&apos;s Trip With <span className="font-travelyouu">TravelYouuu</span></h1>
                    <div className="flex flex-col items-start w-full gap-2">
                        <div className="flex items-center justify-between w-full">
                        <h1 className="text-xl font-bold text-gray-800 font-tittle md:mb-5 md:text-4xl">Category</h1>
                        <a href="/destination" className="text-sm font-bold text-gray-800 hover:text-primary-500">See All</a>
                        </div>
                        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
                            <CardCategory name="Beach" imageUrl="/img/beach.jpg" />
                        </div>
                    </div>
                </div>
            </div>
           </section>
        </>
    );
}