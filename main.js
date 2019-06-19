const jumpStopRecords = []
const chattenRecords = []
const polarRecords = []


// Create a factory function for each possible genre (e.g. createBluegrassArtist()). 
// Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.
const createBluegrassArtist = (artist, genre, age) => ({
    "artist": artist,
    "genre": genre,
    "age": age
})

const createPopArtist = (artist, genre,age) => ({
    "artist": artist,
    "genre": genre,
    "age": age
})

const createRapArtist = (artist, genre,age) => ({
    "artist": artist,
    "genre": genre,
    "age": age
})
const createCountryArtist = (artist, genre,age) => ({
    "artist": artist,
    "genre": genre,
    "age": age
})

const createFunkArtist = (artist, genre,age) => ({
    "artist": artist,
    "genre": genre,
    "age": age
})

chattenRecords.push(createCountryArtist("Bruce Aticans","Country",23))
jumpStopRecords.push(createCountryArtist("Dre Funkz", "Funk", 25))
chattenRecords.push(createCountryArtist("Avilee Davis","Country",19))
polarRecords.push(createPopArtist("Jenson Browns","Pop",20))
chattenRecords.push(createBluegrassArtist("Bartholomew Danielson","Bluegrass",23))
polarRecords.push(createPopArtist("Austin Kincaid","Pop",22))
jumpStopRecords.push(createRapArtist("Dusta Grimes","Rap",21))
jumpStopRecords.push(createRapArtist("Loyonce Branis","Rap",27))
console.log("Jump Stop Records:",jumpStopRecords)
console.log("Chatten Records:", chattenRecords)
console.log("Polar Records",polarRecords)