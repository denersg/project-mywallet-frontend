import { useState } from "react";

import "./style.css";

function WithdrawalScreen(){
    return(
        <div className="content-withdrawal">
            <header className="header-withdrawal-screen">
                <span>Nova saída</span>
            </header>

            <form className="withdrawal-screen-form">
                <input type="text" placeholder="Valor"/>
                <input type="text" placeholder="Descrição"/>
                <button>Salvar saída</button>
            </form>
        </div>
    );
}

function EntryScreen(){
    return(
        <div className="content-entry">
            <header className="header-entry-screen">
                <span>Nova entrada</span>
            </header>

            <form className="entry-screen-form">
                <input type="text" placeholder="Valor"/>
                <input type="text" placeholder="Descrição"/>
                <button>Salvar entrada</button>
            </form>
        </div>
    );
}

function RecordsScreen(){
    const [selectOption, setSelectOption] = useState("records");
    const [isRecordEmpty, setIsRecordEmpty] = useState(true);
    const [records, setRecords] = useState([
        {
            id: 1,
            date: "30/11",
            description: "Almoço mãe",
            value: "39,90"
        },
        {
            id: 2,
            date: "27/11",
            description: "Mercado",
            value: "400,99"
        },
        {
            id: 3,
            date: "26/11",
            description: "Compras churrasco",
            value: "60,70"
        }
    ]);

    return(
        <div className="content">
            {selectOption === "records" ? (
                <>
                    <header className="header">
                        <span>Olá, Fulano</span>
                        <ion-icon name="exit-outline"></ion-icon>
                    </header>

                    <main className="movement-record">
                        {isRecordEmpty === false ? (
                            <div className="no-records">
                                Não há registros de entrada ou saída
                            </div>
                        ) : (
                            <div className="records">
                                <div className="record-list-box">
                                    {records.map(e => (
                                        <>
                                            <div key={e.id} className="record-list">
                                                <div key={e.date} className="record-date">
                                                    {e.date}
                                                </div>
                                                <div key={e.description} className="record-description">
                                                    {e.description}
                                                </div>
                                                <div key={e.value} className="record-value">
                                                    {e.value}
                                                </div>
                                            </div>
                                        </>
                                    ))}
                                </div>

                                <div className="record-balance">
                                    <span className="balance">
                                        SALDO
                                    </span>
                                    <span className="value">
                                        2000,00
                                    </span>
                                </div>
                            </div>
                        )}
                    </main>

                    <footer className="new-record">
                        <div className="new-entry cursor" onClick={() => setSelectOption("newEntry")}>
                            <div className="new-entry-box">
                                <ion-icon name="add-circle-outline"></ion-icon>
                                <span>Nova entrada</span>
                            </div>
                        </div>
                        <div className="new-withdrawal cursor" onClick={() => setSelectOption("newWithdrawal")}>
                            <div className="new-withdrawal-box">
                                <ion-icon name="remove-circle-outline"></ion-icon>
                                <span>Nova saída</span>
                            </div>
                        </div>
                    </footer>
                </>
            ) : (
                <>
                    {selectOption === "newEntry" ? (
                        <>
                            <EntryScreen />
                        </>
                    ) : (
                        <>
                            <WithdrawalScreen />
                        </>
                    )}
                </>
            )}
            
        </div>
    );
}

export default function Home(){
    return(
        <div className="container-home">
            <RecordsScreen />
        </div>
    );
}