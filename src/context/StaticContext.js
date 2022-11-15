import React from 'react'
// En caso de q algun componente quiera acceder al Context y este fuera del provider mostraria esto
const Context = React.createContext({
    name: 'esto-es-sin-provider',
    suscribiteAlCanal: true
})

export default Context