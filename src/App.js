import React from 'react'

import Rest from './rest'

const baseURL = 'https://meudinheiro-hotmart-default-rtdb.firebaseio.com/'
const {useGet, usePost, useDelete} = Rest(baseURL)

function App() {
    const data = useGet('movimentacoes/2019-08')
    const [postData, post] = usePost('movimentacoes/2019-08')
    const [deleteData, remove] = useDelete()

    const saveNew = () => {
        post({valor: 10, descricao: 'Olá'})
    }
    const doRemove = () => {
        remove('movimentacoes/2019-08/')
    }
    return (
        <div>
            <nav className='navbar navbar-light bg-light'>
                <div className='container'>
                    <a className='navbar-brand'>Meu dinheiro</a>
                </div>
            </nav>
            {JSON.stringify(data)}
            {data.loading && <p>Loading..</p>}
            <button onClick={saveNew}>Salvar</button>
            <pre>  {JSON.stringify(postData)}</pre>
            <button onClick={doRemove}>Delete</button>
            <pre>{JSON.stringify(deleteData)}</pre>

        </div>
    );
}

export default App;