import {useEffect, useState} from 'react'
import getGifs from '../services/getGifs';

export default function useGifs({keyword} = { keyword: null }){
        const [loading, setLoading] = useState(false)
        const [gifs , setGifs] = useState([]);
    
        // Se ejecuta cada vez que se renderiza el componente, se le pone el [] ya que queremos que se ejecute 1 sola vez osea la primera vez q se ejecute el componente y le ponemos keyword dentro para que se ejecute cada vez que se actualize la keyword, por lo tanto se volveria a ejecutar el useEffect
        useEffect(() =>{
            setLoading(true)
            // Recuperamos la Keyword de localstorage
            const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
            getGifs({ keyword: keywordToUse})
                .then(gifs => {
                    setGifs(gifs)
                    setLoading(false)
                    // Guardamos la keyword en el localStorage
                    localStorage.setItem('lastKeyword', keyword)
                })
        }, [keyword])

        return {loading, gifs}
}