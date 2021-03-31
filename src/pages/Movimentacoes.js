import React from 'react'
import Rest from '../utils/rest'

const baseURL = 'https://meudinheiro-hotmart-default-rtdb.firebaseio.com/'
const {useGet} = Rest(baseURL)

const Movimentacoes = (props) => {
    // const data=useGet('movimentacoes/${match.params.data}')
    return (
        <div className='container'>
            <h1>Movimentações</h1>
            <pre>{JSON.stringify(props)}</pre>
        </div>
    )
}
export default Movimentacoes