const request = require('request') // es como nosotros accedemos a nuestra librería

const SWAPI_URI = 'https://swapi.co/api'

const mainFunct = id =>{
    console.log(`Nombre: ${getNameById(id)} ha participado en estas peliculas:`)

}

const getNameById = (id) =>{
    request.get(`${SWAPI_URI}/people/${id}`, (error, respons, body)=>{
        
        const person = JSON.parse(body)

        let name = person.name

        return name

    })
}

const getMoviesById = id =>{
    request.get(`${SWAPI_URI}/people/${id}`, (error, respons, body)=>{
        
        const person = JSON.parse(body)

        let movies_URI = person.films

        console.log(movies_URI)

        
    })
}

mainFunct(5)
console.log(getNameById(5))
getMoviesById(5)
