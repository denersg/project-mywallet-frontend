import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./style.css";

function RequestRegistration(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    // console.log(name)
    
    function handleSignUp(e){
        e.preventDefault();

        if(name.length === 0){
            alert("Você esqueceu de preencher o campo de nome");
            return;
        }
        if(email.length === 0){
            alert("Você esqueceu de preencher o campo de email");
            return;
        }
        if(password.length === 0){
            alert("Você esqueceu de preencher o campo senha");
            return;
        }
        if(confirmPassword.length === 0){
            alert("Confirme a senha");
            return;
        }
        if(password !== confirmPassword){
            alert("As senhas estão diferentes");
            return;
        }

        const promise = axios.post("http://localhost:5000/sign-up", {
            name,
            email,
            password
        });
        promise.then(response => {
            console.log(response.data);
            navigate("/");
        });
        promise.catch(error => {
            console.log(error.response);
            alert("Falha ao enviar os dados!\nPor favor, verifique as informações e insira os dados novamente.");
        });
    }

    return(
        <form onSubmit={handleSignUp}>
            <div className="data-input-register">
                <input
                    type="text"
                    placeholder="Nome"
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
                <input
                    type="password"
                    placeholder="Confirme a senha"
                    onChange={e => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                />
                {/* Botão de Cadastro */}
                <button type="submit" className="cursor">Cadastrar</button>
            </div>
        </form>
    );
}

export default function Register(){
    return(
        <div className="container-register">
            <div className="content">
                <header className="top-title">
                    MyWallet
                </header>

                <div className="user-interaction-register">
                    <RequestRegistration />
                </div>

                <div className="goto-login">
                    <Link to="/">
                        <span>Já tem uma conta? Entre agora!</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}