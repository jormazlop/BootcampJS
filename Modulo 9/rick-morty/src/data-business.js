let getCharacters = () => {

   return axios.get("https://rickandmortyapi.com/api/character")
       .catch(error => console.log("Se ha producido un error"));

}

export { getCharacters };