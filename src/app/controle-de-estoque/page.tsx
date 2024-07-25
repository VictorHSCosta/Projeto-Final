"use client"

import LoginTest from "~/app/controle-de-estoque/testLogin"
import { SessionProvider } from 'next-auth/react';

export default function Estoque () {    
    return (
        <div style={{margin: "auto", textAlign: "center"}}>
            <h2>Controle de Estoque</h2>
            <SessionProvider>
                <LoginTest />
            </SessionProvider>
        </div>
    )
}