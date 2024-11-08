'use client'
import endpoints from "@/api/endpoints";
import useFetchData from "@/api/hooks/useFetchData";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ProductPage () {

    const { data }: { data: { id: string; city: string; rating: number }[] } = useFetchData(endpoints.activity);
    const [open, setOpen] = useState(false);
    const [searchData,setSearchData] = useState("")
    const filteredData = data?.filter((item) => 
        item.city.toLowerCase().includes(searchData?.toLowerCase())
    )

    return (
        <>  
           <section id="destination" className="w-full bg-primary-100 min-h-screen">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path className="fill-gray-100" fillOpacity="1" d="M0,32L120,58.7C240,85,480,139,720,149.3C960,160,1200,128,1320,112L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                </svg>
            <div className="container mx-auto">
                <div className="flex mx-6 md:mx-24  flex-col items-center justify-center">
                    <h1 className="text-2xl font-tittle font-extrabold text-gray-800  md:mb-5 md:text-4xl">Pick You Trip With <span className="font-travelyouu">TravelYouuu</span></h1>
                    <div className="flex px-3 relative flex-col gap-2 w-full ">
                        <input type="text" 
                        value={searchData}
                        onChange={(e) => setSearchData(e.target.value)} 
                        onFocus={() => setOpen(true)} 
                        onBlur={() => setOpen(false)} 
                        className="form-control pl-8 border-0 rounded-md w-full" 
                        placeholder="Cari Tujuan Anda" />
                        <span className="absolute top-3 start-5 flex w-8 items-center text-gray-500">
                            <FontAwesomeIcon icon={faLocation} />
                        </span>
                        {
                            open && (         
                            <div className={`flex border max-h-40  rounded-lg py-2 px-4 justify-center w-full`}>
                                <div className="flex bg-gray-100 rounded-lg overflow-auto w-full flex-col">
                                    <ul>
                                    {filteredData?.length > 0 ? (
                                    filteredData.map((item) => (
                                        <li
                                        className="flex items-center justify-between p-2 hover:bg-gray-200"
                                        key={item.id}
                                        >
                                        <span>{item.city}</span>
                                        <span><FontAwesomeIcon className="text-yellow-500" icon={faStar} /> {item.rating}</span>
                                        </li>
                                    ))
                                    ) : (
                                    <p className="text-gray-500">No results found</p>
                                    )}
                                    </ul>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
           </section>
        </>
    );
}