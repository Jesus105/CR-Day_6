const request = require('request') // es como nosotros accedemos a nuestra librería

const POKE_URI = 'https://pokeapi.co/api/v2'

const getPokemonById = id => {
    request.get(`${POKE_URI}/pokemon/${id}`, (error, respons, body)=>{
        
        const pokemon = JSON.parse(body)
    
        console.log(respons.statusCode)
        console.log(pokemon.name)
    })
}

console.log(getPokemonById(30))

const getMoveNames = (id) =>{
    request.get(`${POKE_URI}/pokemon/${id}`, (error, respons, body)=>{
       
        const pokemon = JSON.parse(body)
        let Array_moves = []  
        
        console.log(`Este es un movimiento de ${pokemon.name}:`)
        
        for(let i = 0; i < pokemon.moves.length; i++)
        {
    
            Array_moves.push(pokemon.moves[i].move.name) 
            console.log(Array_moves[i])
    
        }    
         
    }) 
}

getMoveNames(5)
