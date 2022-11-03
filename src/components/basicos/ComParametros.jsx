import React from 'react'

export default function ComParametro(params){
    const status = params.nota >= 7 ? 'Aprovado' : 'Recuperação'
    return (
        <div>
            <h2>{params.titulo}</h2>
            <h3>Aluno: {params.aluno}</h3>
            <p>Nota: {params.nota} e foi {status}</p>
        </div>
    )
}