import React from 'react'

const AdicionarMes=()=>{

    return(
        <React.Fragment>
            <h2>Adicionar Mês</h2>
            <select>
                <option>2019</option>
                <option>2020</option>
            </select>
            <select>
                <option value='01'>01</option>
                <option value='02'>02</option>
            </select>
            <button>Adicionar mês</button>
        </React.Fragment>
)}
export default AdicionarMes