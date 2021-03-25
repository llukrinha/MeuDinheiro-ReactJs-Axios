import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./elements/Header";
import Meses from "./Meses";
import AdicionarMes from "./AdicionarMes";


const Home = () => {
    return (
        <div className='container'>
            <AdicionarMes/>
            <Meses/>
        </div>
    )
}
const Movimentacoes=()=>{
    return <h1> Movimentações</h1>

}
function App() {
    return (
        <Router>
            <div>
                <Header/>
                <Route path='/' exact component={Home}/>
                <Route path='/movimentacoes/:data' component={Movimentacoes}/>
            </div>
        </Router>
    )
}

export default App;