import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import SignIn from "./components/SignIn.jsx";
import SignUp from './components/SignUp.jsx';

const Home = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Home;
