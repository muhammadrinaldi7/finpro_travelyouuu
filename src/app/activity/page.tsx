'use client'
import endpoints from "@/api/endpoints";
import useActivities from "@/api/hooks/useActivities";
import CardActivity from "@/components/card/cardActivity";
// import { useUserStore } from "@/store/userStore";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ActivityPage () {

    const { data } = useActivities(endpoints.activity);
    const [open, setOpen] = useState(false);
    const [searchData,setSearchData] = useState("")
    const handleItemClick = (city:string) => {
        setSearchData(city);
        setOpen(false);
    };
    const handleInputBlur = () => {
        setTimeout(() => setOpen(false), 100); 
    };
    const filteredData = data?.filter((item) => 
        item.city.toLowerCase().includes(searchData?.toLowerCase())
    )
    console.log(data)
    return (
        <>  
           <section id="destination" className="w-full min-h-screen bg-primary-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path className="fill-gray-100" fillOpacity="1" d="M0,32L120,58.7C240,85,480,139,720,149.3C960,160,1200,128,1320,112L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                </svg>
            <div className="container py-10 mx-auto">
                <div className="flex flex-col items-center justify-center gap-4 mx-6 md:mx-24">
                    <h1 className="text-xl font-extrabold text-gray-800 font-tittle md:mb-5 md:text-4xl">Pick You Trip With <span className="font-travelyouu">TravelYouuu</span></h1>
                    <div className="relative flex flex-col w-full px-3 ">
                        <input type="text" 
                        value={searchData}
                        onChange={(e) => setSearchData(e.target.value)} 
                        onFocus={() => setOpen(true)} 
                        onBlur={handleInputBlur}
                        className="w-full pl-8 border-0 rounded-md form-control" 
                        placeholder="Cari Tujuan Anda" />
                        <span className="absolute flex items-center w-8 text-gray-500 top-3 start-5">
                            <FontAwesomeIcon icon={faLocation} />
                        </span>
                        {
                            open && (         
                            <div className={`flex border max-h-40  rounded-lg py-2 px-4 justify-center w-full`}>
                                <div className="flex flex-col w-full overflow-auto bg-gray-100 rounded-lg">
                                    <ul>
                                    {filteredData?.length > 0 ? (
                                    filteredData.map((item) => (
                                        <li onClick={() => handleItemClick(item.city)}
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
                    <div className="flex flex-col flex-wrap gap-2 lg:flex-row">
                        {filteredData?.map((item,index) => (
                        <CardActivity key={index}
                            img={item.imageUrls[0]}
                            title={item.title}
                            rating={item.rating}
                            price={item.price}
                            riview={item.total_reviews}
                        />
                        ))}
                    </div>
                </div>
            </div>
           </section>
        </>
    );
}