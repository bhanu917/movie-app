import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { HomeIcon, Telescope, List, Heart, X, Menu } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
    const items = [
        { title: "Home", path: "/", icon: <HomeIcon /> },
        { title: "Explore", path: "/Explore", icon: <Telescope /> },
        { title: "Genres", path: "/Genres", icon: <List /> },
        { title: "Favourites", path: "/Favourites", icon: <Heart /> }
    ];
    const [mobileview, setmobileview] = useState(false);

    return (
        <>
            {/* Open button: outside the header, only visible on mobile */}
            {!mobileview && (
                <button
                    className="fixed top-3 left-3 z-50 p-2 rounded-md 
                    bg-slate-600 text-white sm:hidden"
                    onClick={() => setmobileview(true)}
                    aria-label="Open menu"
                >
                    <Menu />
                </button>
            )}

            <header
                className={`bg-[oklch(44.6%_0.043_257.281)] md:w-75 lg:w-86 w-65 min-h-screen
                font-semibold
                ${mobileview ? "block fixed inset-y-0 left-0 z-40" : "hidden"} sm:block sm:static`}
            >
                {/* Logo */}
                <div className="flex items-center justify-between pt-2 pl-2 h-20">
                    <div className="flex gap-3 items-center">
                        <img
                            className="rounded-full h-20 w-20 object-cover"
                            src={logo}
                            alt="Logo"
                        />
                        <p className="text-2xl text-white">Neo-Stramer</p>
                    </div>
                    <button
                        className="mt-3 mr-6 text-white sm:hidden"
                        onClick={() => setmobileview(false)}
                        aria-label="Close menu"
                    >
                        <X />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="mt-1">
                    {items.map((item, i) => (
                        <NavLink
                            key={i}
                            to={item.path}
                            onClick={() => setmobileview(false)}
                            className={({ isActive }) =>
                                `block text-center text-white text-xl py-3 pr-[40px] ${isActive ? "opacity-100" : "opacity-50"
                                } hover:opacity-100 font-semibold`
                            }
                        >
                            <div className="flex ml-12 gap-3">
                                <div>{item.icon}</div>
                                <div>{item.title}</div>
                            </div>
                        </NavLink>
                    ))}
                </nav>

                <hr className="border-gray-400" />
            </header>
        </>
    );
}