/***
 * 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

 */ 

const user =  [
    { firstname: 'paolino', lastname: 'paperino', age: 90 },
    { firstname: 'giovanni', lastname: 'senzapanni', age: 12 },
    { firstname: 'claudietto', lastname: 'conilpetto', age: 23 },
    { firstname: 'lucas', lastname: 'spacci', age: 36 },
    { firstname: 'giuseppe', lastname: 'senzadenti', age: 16 },
    { firstname: 'paolino', lastname: 'paperino', age: 90 },
    { firstname: 'giovanni', lastname: 'senzapanni', age: 12 },
    { firstname: 'claudietto', lastname: 'conilpetto', age: 23 },
    { firstname: 'lucas', lastname: 'spacci', age: 36 },
    { firstname: 'giuseppe', lastname: 'senzadenti', age: 16 },
]

const userList = user.map((persona) => {
    if(persona.age > 17){
        return `${persona.firstname} ${persona.lastname}  tu puoi guidare!`
    }

    return `${persona.firstname} ${persona.lastname} hei amico tu non puoi guidare!`
})

console.log(userList)