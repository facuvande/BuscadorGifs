import React, {useState} from 'react'
import {Link, useLocation} from "wouter"
import ListOfGifs from '../../components/ListOfGifs'
import useGifs from '../../hooks/useGifs'

const POPULAR_GIFS = [ "Matrix", "Chile", "Colombia", "Ecuador"]

export default function Home(){
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs()

    const handleSubmit = evt =>{
        evt.preventDefault()
        // Navegar a otra ruta
        pushLocation(`/search/${keyword}`)
        console.log(keyword)
    }

    const handleChange= evt =>{
        setKeyword(evt.target.value)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} placeholder= 'Busca un gif aqui...' type='text' value={keyword} />
                <button>Buscar!!!</button>
            </form>
            <h3 className='App-title'>Ultima Busqueda</h3>
            <ListOfGifs gifs={gifs}/>
            <h3 className='App-title'>Los gifs mas populares</h3>
            <ul>
                {POPULAR_GIFS.map((popularGif) =>(
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}