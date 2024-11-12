'use client'

import endpoints from "@/api/endpoints";
import useAuth from "@/api/hooks/useAuth";
import { useNavbarStore } from "@/store/navbarStore"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
interface payloadRegister {
    name: string;
    email: string;
    password: string;
    passwordRepeat: string;
    role: string;
    profilePictureUrl: string;
    phoneNumber: string;
}
const Logout = () => {
    const { data, error, login} = useAuth(endpoints.login)
    const {toggleModalLogout } = useNavbarStore();
    const [formValues, setFormValues] = useState<payloadRegister>({
        name: "",
        email: "",
        password: "",
        passwordRepeat: "",
        role: "user",
        profilePictureUrl: "",
        phoneNumber: "",
    });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(formValues);
      };
   
    console.log(formValues)
   
    return (
        <>
        <div className={`w-full fixed flex px-4 justify-center z-40 items-center min-h-screen bg-gray-100/20 backdrop-blur-sm`}>
            <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg bg-primary-300/50">
                <button onClick={toggleModalLogout} className="relative self-end px-2 font-sans text-red-400 border border-red-400 rounded-lg hover:bg-red-400 hover:text-white">
                    <FontAwesomeIcon icon={faXmark}/>
                </button>
                {data && <div role="alert" className="p-2 my-2 bg-white border-green-500 rounded border-s-4">
                    <strong className="block font-medium text-green-800"> Selamat Datang {data?.name} </strong>
                </div>}
                <h1 className="text-2xl font-bold text-white font-travelyouu">TravelYouuu</h1>
                <h1 className="font-serif text-2xl font-bold text-white">Register</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Nama</label>
                    <input type="text" id="name"
                     value={formValues.name}
                     onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                     placeholder="John Doe" className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm" />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"
                     value={formValues.email}
                     onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                     placeholder="example@ex.com" className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm" />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" 
                    value={formValues.password}
                    onChange={(e) => setFormValues({ ...formValues, password: e.target.value, passwordRepeat: e.target.value })}
                    placeholder="Password" className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm" />
                    <button type="submit" disabled={formValues.email === "" || formValues.password === ""} className={`w-full ${formValues.email === "" || formValues.password === "" ? "hover:none  bg-gray-400" : "hover:bg-primary-100  bg-primary-300"} px-4 py-2 mt-4 text-sm font-medium text-white rounded-md `}>Login</button>    
                </form>     
                {error && <p className="self-start font-bold text-left text-red-500">* {error}</p>}
            </div>
        </div>
        </>
    )
}

export default Logout