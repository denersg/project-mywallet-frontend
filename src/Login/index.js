import axios from "axios";
// import { response } from "express";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import UserContext from "../contexts/UserContext";

import "./style.css";

function LoginRequirement(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    function handleLogin(e){
        e.preventDefault();

        if(email.length === 0){
            alert("Você esqueceu de preencher o campo de email");
            return;
        }
        if(password.length === 0){
            alert("Você esqueceu de preencher o campo senha");
            return;
        }

        const promise = axios.post("http://localhost:5000/login", {
            email, 
            password
        });
        promise.then(response => {
            const token = response.data;

            const userData = {
                token: response.data
            };
            setUser(userData);
            navigate("/inicio");
        });
        promise.catch(error => {
            console.log(error.response);
            alert("E-mail e/ou senha incorretos!\nPor favor, insira os dados corretamente.");
        });
    }
    
    return(
        <form onSubmit={handleLogin}>
            <div className="data-input-login">
                <input 
                    type="email"
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    name="email"
                />
                <input
                    type="password"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    name="password"
                />
                <button type="submit" className="cursor">Entrar</button>
            </div>
        </form>
    );
}

export default function Login(){
    return(
        <div className="container-login">
            <div className="content">
                <header className="top-title">
                    MyWallet
                </header>

                <div className="user-interaction-login">
                    <LoginRequirement />
                </div>

                <div className="create-account">
                    <Link to="/cadastro">
                        <span>Primeira vez? Cadastre-se!</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}