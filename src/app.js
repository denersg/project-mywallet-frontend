import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

import UserContext from "./contexts/UserContext";

export default function App(){
    const [user, setUser] = useState();
    const contextValue = { user, setUser };
    
    return(
        <UserContext.Provider value={contextValue}>
            <div className="content">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />}></Route>
                        <Route path="/cadastro" element={<Register />}></Route>
                        <Route path="/inicio" element={<Home />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </UserContext.Provider>
    );
}