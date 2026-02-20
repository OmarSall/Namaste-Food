import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">

                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        className="h-10 w-auto"
                        alt="logo_burger"
                        src={LOGO_URL}
                    />
                </Link>

                {/* Navigation */}
                <nav className="flex items-center gap-6">

                    {/* Online Status */}
                    <span className="text-sm font-medium text-slate-600">
            {onlineStatus ? "Online ✅" : "Offline 🔴"}
          </span>

                    {/* Links */}
                    <ul className="flex items-center gap-6 text-sm font-medium text-slate-700">
                        <li>
                            <Link className="hover:text-slate-900 transition-colors" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-slate-900 transition-colors" to="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-slate-900 transition-colors" to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-slate-900 transition-colors" to="/grocery">
                                Grocery
                            </Link>
                        </li>
                        <li className="text-slate-500">Cart</li>
                    </ul>

                    {/* Login Button */}
                    <button
                        type="button"
                        className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 active:bg-slate-950"
                        onClick={() =>
                            setBtnNameReact((prev) => (prev === "Login" ? "Logout" : "Login"))
                        }
                    >
                        {btnNameReact}
                    </button>

                </nav>
            </div>
        </header>
    );
};

export default Header;