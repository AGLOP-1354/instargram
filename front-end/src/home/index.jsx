import React from 'react';
import {Route, Routes} from "react-router-dom";
import SignIn from "./components/SignIn.jsx";
import SignUp from './components/SignUp.jsx';

const Home = ({history}) => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<SignIn />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </div>
    );
};

export default Home;
