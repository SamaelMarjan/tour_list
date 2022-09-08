import React from "react";
import { Link } from "react-router-dom";

export default function NavBar () {
    return (
        <>
            <div className="navbar">
                <div className="navbar__sec">
                    <Link to='/'>Home</Link>
                    <Link to='/places'>BDPlaces</Link>
                    <Link to='/res'>Resturants</Link>
                    <Link to='/'>Sports</Link>
                    <Link to='/country'>Country</Link>
                    <Link to='/'>IT company list</Link>
                    <Link to='/'>Technologies</Link>
                    <Link to='/'>Tools</Link>
                </div>
            </div>
        </>
    );
}